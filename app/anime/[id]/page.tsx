import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface AnimeDetailProps{
  params: {
    id: string;
  }
}


async function getAnimeDetails(id: string){
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if(!response.ok) return null;

  const data = await response.json();
  return data.data;
}


export default async function AnimePage({ params }: AnimeDetailProps){
  const anime = await getAnimeDetails(params.id);


  if(!anime) return notFound();   //Display not found if the anime ID is not correct

  return(
    <main>
      <div className="flex flex-col gap-3">
        <Button className="place-self-start my-4 ml-4 bg-card rounded-sm border-1 border-indigo cursor-pointer">
          <ArrowLeft />
          Back
        </Button>
        <div>{anime.title}</div>
        <div>{anime.title_japanese}</div>
        <div>items</div>
        <div>synopsis</div>
        <div>picture</div>
      </div>
    </main>
  )
}