import { useState } from "react";
import { removeBackground, trimVideo, applySlowMotion } from "@/pages/api/api";

const VideoEditor = ({ videoId, initialSpeed='1', initialStartTime='0', initialEndTime='', onEditComplete }) => {
    const [speed, setSpeed] = useState(initialSpeed);
    const [startTime, setStartTime] = useState(initialStartTime);
    const [endTime, setEndTime] = useState(initialEndTime);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEdit = async (editFunction, ...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await editFunction(videoId, ...args);
            onEditComplete(response.secure_url);
            setLoading(false);
        } catch (error) {
            console.error("Error editing video:", error);
            setError("Failed to edit the video. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Start Time (seconds):
                    <input
                        type="number"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Start time in seconds"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">End Time (seconds):
                    <input
                        type="number"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="End time in seconds"
                    />
                </label>
            </div>
            <button onClick={() => handleEdit(trimVideo, startTime, endTime)} className="btn-primary mb-4" disabled={loading}>
                {loading ? "Processing..." : "Trim Video"}
            </button>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Speed:
                    <input
                        type="number"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Speed factor (e.g., 0.5 for slow motion)"
                    />
                </label>
            </div>
            <button onClick={() => handleEdit(applySlowMotion, speed)} className="btn-primary mb-4" disabled={loading}>
                {loading ? "Processing..." : "Apply Slow Motion"}
            </button>
            <button onClick={() => handleEdit(removeBackground)} className="btn-primary" disabled={loading}>
                {loading ? "Processing..." : "Remove Background"}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
    );
};

export default VideoEditor;
