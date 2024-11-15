import React, { useState } from 'react'

const List = ({ video }) => {
    const [popup, setPopup] = useState(false);
    const [videoId, setVideoId] = useState('');
    const findLength = (duration) => {
        const hours = duration.match(/(\d+)H/) ? duration.match(/(\d+)H/)[1] : 0;
        const minutes = duration.match(/(\d+)M/) ? duration.match(/(\d+)M/)[1] : 0;
        const seconds = duration.match(/(\d+)S/) ? duration.match(/(\d+)S/)[1] : 0;
        return `${hours}:${minutes}:${seconds}`;
    }
    function videoPlayer(id) {
        setPopup(true);
        setVideoId(id);
    }
    function closePopup() {
        setPopup(false);
    }
    return (
        <div>
            {popup &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className='relative w-full max-w-4xl px-5 pt-12 pb-5 backdrop-blur-md border-2 border-gray-500 rounded-lg' >
                        <button onClick={closePopup} className=" absolute top-1 left-1 inline-flex items-center py-2 px-5  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center">
                            ✖  Close
                        </button>
                        <div className="w-full h-0 pb-[56.25%] relative">
                            <iframe width="760" height="420" title="YouTube video" className="absolute top-0 left-0 w-full h-full"
                                style={{ border: "none" }}
                                allowFullScreen
                                src={`https://www.youtube.com/embed/${videoId}`} >
                            </iframe>
                        </div>
                    </div>
                </div>
            }
            <a href="#" onClick={(e) => { videoPlayer(video.id) }} className="relative z-10 flex flex-col mt-6 text-white shadow-md bg-clip-border rounded-xl border-2 border-rose-50 w-80 cursor-pointer">
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