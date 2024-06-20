import { useState } from "react";
import VideoUploader from "@/components/VideoUploader";
import VideoPlayer from "@/components/VideoPlayer";
import VideoEditor from "@/components/VideoEditor";
import VideoDownloader from "@/components/VideoDownloader";

export default function Home() {
    const [url, setUrl] = useState(null);
    const [filename, setFilename] = useState("edited-video.mp4");

    const onUploadSuccess = (secureUrl) => {
        setUrl(secureUrl);
    };

    const onEditComplete = (secureUrl) => {
        setUrl(secureUrl); // Update the video player with the edited video URL
    };

    return (
        <main className="min-h-screen bg-gray-100 p-4">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden bg-gray-900 shadow-2xl rounded-lg p-6">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:left-full sm:-ml-80 lg:-translate-x-1/2"
                        style={{ maskImage: 'radial-gradient(closest-side, white, transparent)' }}
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="gradient">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <h1 className="font-bold text-4xl text-center my-8 text-white">Online Video Editing Canvas</h1>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-full">
                            <VideoUploader onUploadSuccess={onUploadSuccess} />
                        </div>
                        <div className="w-full">
                            <VideoPlayer src={url} />
                        </div>
                        <div className="w-full">
                            <VideoEditor videoId={url} onEditComplete={onEditComplete} />
                        </div>
                        <div className="w-full">
                            <VideoDownloader url={url} filename={filename} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
