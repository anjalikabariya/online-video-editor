import cloudinary from "@/utils/cloudinary";

export const trimVideo = async(videoId, startTime, endTime) => {
  const response = await cloudinary.uploader.upload(videoId, {
    resource_type: 'video',
    start_offset: `${startTime}`, 
    end_offset: `${endTime}`
  })
  return response;
}

export const removeBackground = async (videoId) => {
  try {
    const response = await cloudinary.uploader.upload(videoId, {
      resource_type: 'video',
      transformation: [{ effect: 'make_transparent', color: '#0e80d8' }]
    });
    return response;
  } catch (error) {
    console.error("Error removing background:", error);
    throw error;
  }
};

export const applySlowMotion = async(videoId, speed) => {
  const response = await cloudinary.uploader.upload(videoId, {
    resource_type: 'video',
    transformation: [{ effect: `accelerate:${speed}` }],
  })
  return response;
}