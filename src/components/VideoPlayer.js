import { useEffect, useRef } from "react";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);

    if (!src) {
        return <div className="text-center">No video source provided.</div>;
    }

    return (
        <div className="flex">
            <video
                width="1920"
                height="1080"
                src={src}
                controls
                ref={videoRef}
            />
        </div>
    );
};

export default VideoPlayer;
