import Image from "next/image";

export interface AnimeProp{
    mal_id: string;
    title: string;
    image_url: string;
    episodes: number;
    score: string;
    rank: number;
    favorites: number;
}

interface Prop{
    anime: AnimeProp;
    index: number;
}

const AnimeCard = ({anime}: Prop) => {
  return (
    <div className="max-w-sm rounded relative w-full">
        <div className="relative w-full h-[37vh]">
            <Image
                src={anime.image_url}
                alt={anime.title}
                fill
                className="rounded-xl" />
        </div>
        <div className="py-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-1">
                <h2 className="font-bold text-white text-xl line-clamp-1 w-full">{anime.title}</h2>
            </div>
            <div className="py-1 px-2 rounded-sm">
                <p className="text-white text-sm font-bold capitalize">{anime.episodes} episodes</p>
            </div>
        </div>
    </div>
  )
}
export default AnimeCard
