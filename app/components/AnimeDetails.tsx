"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Anime {
  title: string;
  title_japanese: string;
  url: string;
  score: string;
  scored_by: string;
  rating: string;
  status: string;
  season: string;
  year: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    }
  }
  trailer: {
    url: string;
  }
}

interface Props {
  anime: Anime;
}


const AnimeDetails = ({ anime }: Props) => {
  const router = useRouter();

  function AnimeStatus(status: string){
    switch(status){
      case "Finished Airing":
        return "bg-blue-500 text-white";
      case "Currently Airing":
        return "bg-green-500 text-white";
      case "Not yet aired":
        return "bg-yellow-500 text-black";
      default:
        return "bg-slate-500 text-white";
    }
  }

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:mx-16 lg:mx-26">
        <div className="flex flex-col gap-3 mx-4 justify-baseline">
          <Button
            className="place-self-start my-6 bg-card rounded-sm border cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft />
            Back
          </Button>
          <Link href={anime.url} target="_blank" className="w-70">
            <div className="font-bold text-3xl underline underline-offset-4 hover:text-primary">{anime.title}</div>
          </Link>
          <div className="font-semibold text-lg italic text-muted-foreground">{anime.title_japanese}</div>
          <div className="flex flex-row justify-baseline gap-2 text-xs">
              {anime.score && (
                <div className="flex flex-row items-center justify-center gap-2 bg-accent p-1.5 px-2.5 rounded-3xl">
                  <div className="flex flex-row justify-center gap-2 font-bold"><Star className="w-4 h-4 text-yellow-300"/>{anime.score}</div>
                  <div className="italic text-muted-foreground">({anime.scored_by})</div>
                </div>
              )}
            <div className="border rounded-3xl p-2 px-3 text-center font-semibold">{anime.rating}</div>
            <div className={`border rounded-3xl p-2 px-3 text-center font-semibold ${AnimeStatus(anime.status)}`}>{anime.status}</div>
            <div className="border rounded-3xl p-2 px-3 text-center font-semibold capitalize">{anime.season} {anime.year}</div>
          </div>
          <div className="text-md mt-2 max-w-full md:max-w-2xl">{anime.synopsis}</div>
        </div>
        <div className="flex flex-col justify-end items-end gap-4">
          <Link href={anime.trailer.url} className="place-self-center" target="_blank">
            <div className="group border-2 rounded-2xl border-primary mt-8 w-[450px] h-[600px] relative overflow-hidden">
              <Play className="absolute inset-0 m-auto w-16 h-16 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
              <Image src={anime.images.jpg.large_image_url || anime.images.jpg.image_url} alt={anime.title} fill
                className="rounded-2xl transition-all duration-500 hover:blur-sm cursor-pointer"
              />
            </div>
          </Link>
          <div>trailer</div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default AnimeDetails;
