import VideoUploader from "@/components/VideoUploader";
import VideoPlayer from "@/components/VideoPlayer";
import VideoEditor from "@/components/VideoEditor";
import VideoDownloader from "@/components/VideoDownloader";

export default function Home() {
  return (
    <main>
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-gray-900 shadow-2xl lg:flex lg:gap-x-20 h-screen">
      <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
      <h1 className="font-bold text-4xl text-center my-8">Online Video Editing Canvas</h1>
      <VideoUploader />
      <VideoPlayer /> 
      <VideoEditor />
      <VideoDownloader />
      </div>
      </div>
      </div>
    </main>
  );
}
