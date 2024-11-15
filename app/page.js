"use client";
import List from "./components/List";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const limit = 18;
  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/add");
      const data = await response.json();
      setVideos(data);
      setVisible(data.slice(0, limit))
      if (data.length <= limit) {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error fetching videos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMore = () => {
    const nextpage = page + 1;
    const newvisible = videos.slice(0, nextpage * limit);
    setVisible(newvisible);
    setPage(nextpage);
    if (newvisible.length >= videos.length) {
      setHasMore(false);
    }
  }
  const searchVideos = (e) => {
    e.preventDefault();
    const key = e.target.name.value.toLowerCase().trim().replace(/[.,]/g, "");
    if (key === "") {
      setVisible(videos.slice(0, limit));
      setError(null);
      setHasMore(true);
      return;
    }
    setVisible(videos.filter(video => video.snippet.title.trim().replace(/[.,]/g, "").toLowerCase().includes(key)));
    if (videos.filter(video => video.snippet.title.trim().replace(/[.,]/g, "").toLowerCase().includes(key)).length === 0) {
      setError(`No videos found with the search term ${key}`);
      setHasMore(false);
    } else {
      setError(null);
    }
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pb-6">
      <div className="inset-0 h-full w-full items-center px-5 py-24">
        <div>
          <form className="flex items-center max-w-lg mx-auto" onSubmit={searchVideos}>
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                name="name"
                className="border-2 border-violet-300 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-black  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search playlists, videos, free courses..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {visible.map((video) => (
            <List key={video.id} video={video} />
          ))}
        </div>
        {error && <div className="text-center m-6 text-red-500">{error}</div>}
        {hasMore && <div className="flex items-center justify-center mt-8">
          <button onClick={loadMore} className="inline-flex items-center py-4 px-6 ms-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center" >
            Load More
          </button>
        </div>}
      </div>
    </div>
  );
}
