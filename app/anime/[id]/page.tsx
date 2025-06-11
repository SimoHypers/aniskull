import { notFound } from "next/navigation";
import AnimeDetails from "@/app/components/AnimeDetails";

async function getAnimeDetails(id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!response.ok) return null;

  const data = await response.json();
  return data.data;
}

export default async function AnimePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const anime = await getAnimeDetails(id);
  
  if (!anime) return notFound();

  return <AnimeDetails anime={anime} />;
}