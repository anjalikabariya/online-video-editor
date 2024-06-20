import { removeBackground, trimVideo, applySlowMotion } from "@/pages/api/api"
import { useState } from "react"


const VideoEditor = ({ url, initialSpeed='1', initialStartTime='0', initialEndTime='', onEditComplete }) => {
    const [speed, setSpeed] = useState(initialSpeed)
    const [startTime, setStartTime] = useState(initialStartTime)
    const [endTime, setEndTime] = useState(initialEndTime)
    const [updating, setUpdating] = useState(false)

    const handleTrim = async() => {
        setUpdating(true);
        const response = await trimVideo(url, startTime, endTime);
        onEditComplete(response.secure_url);
        setUpdating(false);
    }
    
    const handleSlowMotion = async() => {
        setUpdating(true);
        const response = await applySlowMotion(url, speed);
        onEditComplete(response.secure_url);
        setUpdating(false);
    }
    
    const handleRemoveBackground = async() => {
        setUpdating(true);
        const response = await removeBackground(url);
        onEditComplete(response.secure_url);
        setUpdating(false);
    }
    return(
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Start Time (seconds):
            <input 
                type="text" 
                value={startTime} 
                onChange={(e) => setStartTime(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </label>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">End Time (seconds):
            <input 
                type="text" 
                value={endTime} 
                onChange={(e) => setEndTime(e.target.value)} 
                disabled={updating}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </label>
    </div>
    <button 
        onClick={handleTrim} 
        className="btn-primary"
        disabled={updating}
    >
        Trim Video
    </button>

    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Speed:
            <input 
                type="text" 
                value={speed} 
                onChange={(e) => setSpeed(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </label>
    </div>
    <button 
        onClick={handleSlowMotion} 
        className="btn-primary"
        disabled={updating}
    >
        Apply Slow Motion
    </button>
    <button 
        onClick={handleRemoveBackground} 
        className="btn-primary"
        disabled={updating}
    >
        Remove Background
    </button>
</div>

    )
}

export default VideoEditor
