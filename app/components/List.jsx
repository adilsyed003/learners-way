import React from 'react'

const List = ({ video }) => {
    const findLength = (duration) => {
        const hours = duration.match(/(\d+)H/) ? duration.match(/(\d+)H/)[1] : 0;
        const minutes = duration.match(/(\d+)M/) ? duration.match(/(\d+)M/)[1] : 0;
        const seconds = duration.match(/(\d+)S/) ? duration.match(/(\d+)S/)[1] : 0;
        return `${hours}:${minutes}:${seconds}`;
    }
    return (
        <div>

            <a href={`https://www.youtube.com/watch?v=${video.id}`} target='_blank' className="relative z-10 flex flex-col mt-6 text-white shadow-md bg-clip-border rounded-xl border-2 border-rose-50 w-80 cursor-pointer">
                <div
                    className="relative mx-4 mt-2 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt="card-image" />
                </div>
                <div className="p-4">
                    <h5 className="block mb-2 text-xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900 overflow-hidden text-overflow-ellipsis overflow-ellipsis h-24">
                        {video.snippet.title}
                    </h5>
                    <div className='flex items-center mt-6 gap-2'>
                        <img src={video.channelProfilePhoto} alt="channel-profile" className="w-8 h-8 rounded-full" />
                        <div className="block text-base antialiased font-light leading-relaxed text-inherit">
                            {video.snippet.channelTitle}
                        </div>
                    </div>
                </div>
                <div className='flex mx-6 my-4 justify-between'>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3>{findLength(video.contentDetails.duration)}</h3>
                    </div>
                    <h2>{video.snippet.defaultAudioLanguage}</h2>
                </div>
            </a>
        </div>
    )
}

export default List