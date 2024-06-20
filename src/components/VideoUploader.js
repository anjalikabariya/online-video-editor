import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

const VideoUploader = ({ onUploadSuccess }) => {
    const [uploading, setUploading] = useState(false);
    return (
        <div>
            <CldUploadWidget
            uploadPreset="online_video_editor"
            onSuccess={(result, { widget }) => {
                widget.close();
                onUploadSuccess(result.info.secure_url);
                setUploading(false);
            }}
            >
            {({ open }) => {
                function handleOnClick() {
                    open();
                    setUploading(true);
                }
                return (
                    <div className="my-2 flex">
                    <button onClick={handleOnClick} className="btn-primary" disabled={uploading}>
                        Upload a Video
                    </button>
                    </div>
                );
            }}
            </CldUploadWidget>
        </div>
    )
}

export default VideoUploader