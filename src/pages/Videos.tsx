import { Navbar } from "@/components/Navbar";
import { VideoCard } from "@/components/VideoCard";

const DEMO_VIDEOS = [
  {
    id: 1,
    title: "Introduction to Web Development",
    thumbnail: "/placeholder.svg",
    duration: "15:30"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    thumbnail: "/placeholder.svg",
    duration: "20:45"
  },
  {
    id: 3,
    title: "React Basics",
    thumbnail: "/placeholder.svg",
    duration: "18:20"
  },
  {
    id: 4,
    title: "CSS Layouts Mastery",
    thumbnail: "/placeholder.svg",
    duration: "25:15"
  },
  {
    id: 5,
    title: "Backend Development with Node.js",
    thumbnail: "/placeholder.svg",
    duration: "22:10"
  }
];

const Videos = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Featured Videos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_VIDEOS.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;