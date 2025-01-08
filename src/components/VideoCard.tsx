import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
}

export const VideoCard = ({ title, thumbnail, duration }: VideoCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
          <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
            {duration}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardContent>
    </Card>
  );
};