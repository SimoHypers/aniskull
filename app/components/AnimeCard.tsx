import { Star } from "lucide-react";
import Image from "next/image";

export interface AnimeProp{
    mal_id: string;
    title: string;
    image_url: string;
    episodes: number;
    score: string;
    rank: number;
    year: number;
    status: string;
}

interface Prop{
    anime: AnimeProp;
    index: number;
}

const AnimeCard = ({anime}: Prop) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="aspect-[2/3] relative">
            <Image
                src={anime.image_url || ''} //Add a fallback image later
                alt={anime.title}
                fill
                objectFit="cover"
                className="rounded-t-lg" />
            <div className="flex flex-row justify-between gap-2 absolute top-2 right-2 bg-primary/70 text-white px-2 py-1 rounded-md">
                <Star className="text-yellow-300 w-4 h-6"/>
                <p className="font-bold">{parseFloat(anime.score).toFixed(1)}</p> 
                {/* anime.score was a string so we used parseFloat to turn it into float */}
            </div>
        </div>
        <div className="py-4 flex flex-col gap-3 p-2">
            <div className="flex justify-between items-center gap-1">
                <h2 className="font-bold text-white text-xl line-clamp-1 w-full">{anime.title}</h2>
            </div>
            <div className="flex flex-row justify-between">
                <div className="justify-baseline">
                    <p className="text-white text-sm font-semibold">{anime.status}</p>
                </div>
                <div className="justify-end px-2 text-muted-foreground">
                    {anime.year}
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default AnimeCard
