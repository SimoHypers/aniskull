"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Anime {
  title: string;
  title_japanese: string;
}

interface Props {
  anime: Anime;
}

const AnimeDetails = ({ anime }: Props) => {
  const router = useRouter();

  return (
    <main>
      <div className="flex flex-col gap-3">
        <Button
          className="place-self-start my-4 ml-4 bg-card rounded-sm border cursor-pointer"
          onClick={() => router.back()}
        >
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
  );
};

export default AnimeDetails;
