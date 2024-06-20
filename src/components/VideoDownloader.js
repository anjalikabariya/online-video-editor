import { useState } from "react";

const VideoDownloader = ({ url, filename }) => {
    const [downloading, setDownloading] = useState(false);
    const [error, setError] = useState(null);

    const handleDownload = () => {
        setDownloading(true);
        setError(null);
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = filename || 'edited-video.mp4';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(downloadUrl);
                setDownloading(false);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
                setError("Failed to download the video. Please try again.");
                setDownloading(false);
            });
    };

    return (
        <div className="my-2 flex flex-col items-center">
            <button onClick={handleDownload} className="btn-primary" disabled={downloading}>
                {downloading ? "Downloading..." : "Download"}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
    );
};

export default VideoDownloader;
