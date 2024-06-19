const VideoDownloader = ({ url, filename }) => {
    const handleDownload = () => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.filename = filename || 'edited-video.mp4';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            })
    }

    return(
        <div>
            <button onClick={handleDownload}>Download</button>
        </div>
    )
}

export default VideoDownloader
