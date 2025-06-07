import { notFound } from "next/navigation";
import AnimeDetails from "@/app/components/AnimeDetails";

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

async function getAnimeDetails(id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!response.ok) return null;

  const data = await response.json();
  return data.data;
}

export default async function AnimePage({ params }: AnimeDetailProps) {
  const anime = await getAnimeDetails(params.id);
  if (!anime) return notFound();

  return <AnimeDetails anime={anime} />;
}
