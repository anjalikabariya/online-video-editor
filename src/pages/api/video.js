import cloudinary from "@/utils/cloudinary";

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { videoUrl, startTime, endTime, speed } = req.body;

    try {
      const uploadResponse = await cloudinary.uploader.upload(videoUrl, {
        resource_type: 'video',
        eager: [
          {
            start_offset: startTime,
            end_offset: endTime,
            transformation: [{ effect: `accelerate:${speed}` }],
          },
        ],
      });

      res.status(200).json({ videoUrl: uploadResponse.eager[0].secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Error uploading video' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
