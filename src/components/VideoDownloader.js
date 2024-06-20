const VideoDownloader = ({ url, filename }) => {
    const handleDownload = () => {
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
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            })
    }

    return(
        <div className="my-2 flex">
            <button onClick={handleDownload} className="btn-primary">Download</button>
        </div>
    )
}

export default VideoDownloader
