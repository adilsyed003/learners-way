import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
    const API_KEY = process.env.API_KEY;
    const filepath = path.join(process.cwd(), "data", "video.json");
    console.log(filepath);
    try {
        const data = fs.readFileSync(filepath, "utf-8");
        const videoIds = JSON.parse(data).id;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoIds.join(",")}&key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const videoResult = await response.json();
        const channelIds = [...new Set(videoResult.items.map(video => video.snippet.channelId))];
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(",")}&key=${API_KEY}`
        );
        if (!channelResponse.ok) {
            throw new Error(`YouTube API error! status: ${channelResponse.status}`);
        }
        const channelData = await channelResponse.json();
        const channelMap = channelData.items.reduce((acc, channel) => {
            acc[channel.id] = channel.snippet.thumbnails.default.url;
            return acc;
        }, {});
        const videosWithChannelPhotos = videoResult.items.map(video => ({
            ...video,
            channelProfilePhoto: channelMap[video.snippet.channelId] || null,
        }));
        //console.log(videosWithChannelPhotos);
        return NextResponse.json(videosWithChannelPhotos);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}