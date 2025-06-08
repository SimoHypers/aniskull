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
        return "bg-blue-600 text-white";
      case "Currently Airing":
        return "bg-green-600 text-white";
      case "Not yet aired":
        return "bg-yellow-600 text-black";
      default:
        return "bg-slate-500 text-white";
    }
  }

  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex flex-col gap-4">
            <Button
              className="place-self-start my-6 bg-card rounded-sm border cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft />
              Back
            </Button>
            <Link href={anime.url} target="_blank" className="w-fit">
              <h1 className="font-bold text-2xl sm:text-3xl underline underline-offset-4 hover:text-primary break-words">
                {anime.title}
              </h1>
            </Link>
            <div className="font-semibold text-base sm:text-lg italic text-muted-foreground break-words">
              {anime.title_japanese}
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {anime.score && (
                <div className="flex items-center gap-2 bg-accent p-1.5 px-2.5 rounded-3xl">
                  <div className="flex items-center gap-1 font-bold">
                    <Star className="w-4 h-4 text-yellow-300" />
                    {anime.score}
                  </div>
                  <span className="italic text-muted-foreground">
                    ({anime.scored_by})
                  </span>
                </div>
              )}
              <div className="border rounded-3xl p-2 px-3 text-center font-semibold">
                {anime.rating}
              </div>
              <div
                className={`border rounded-3xl p-2 px-3 text-center font-semibold ${AnimeStatus(
                  anime.status
                )}`}
              >
                {anime.status}
              </div>
              <div className="border rounded-3xl p-2 px-3 text-center font-semibold capitalize">
                {anime.season} {anime.year}
              </div>
            </div>
            <p className="text-sm sm:text-md mt-2 max-w-full text-justify leading-relaxed">
              {anime.synopsis}
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <Link href={anime.trailer.url} target="_blank" className="w-full max-w-md lg:max-w-none">
              <div className="group border-2 rounded-2xl border-primary w-full lg:w-[450px] aspect-[2/3] relative overflow-hidden mx-auto lg:my-6">
                <Play className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={
                    anime.images.jpg.large_image_url ||
                    anime.images.jpg.image_url
                  }
                  alt={anime.title}
                  fill
                  className="rounded-2xl object-cover transition-all duration-500 group-hover:blur-sm cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );

};

export default AnimeDetails;
