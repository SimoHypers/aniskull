"use client";

import { Input } from "@/components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { fetchSearchAnime } from "../action";
import AnimeCard from "../components/AnimeCard";
import Link from "next/link";




const search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    if(!query.trim()) return

    try{
      const animeList = await fetchSearchAnime(query)
      setResults(animeList || [])
    } catch (err){
      console.error("Search failed: ", err)
    }
  }


  return (
    <div className="container mx-auto my-6 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-center mx-2 lg:text-5xl">
          Search For Your Next <br /><span className="text-primary underline underline-offset-4">Anime</span>
        </div>
        <div className="flex flex-row my-16 items-center justify-center">
          <Input className="w-xs rounded-r-none lg:w-lg lg:py-6 focus-visible:ring-0" placeholder="Search for anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearch()}}/>
          <Button className="w-20 rounded-l-none hover:bg-primary/80 lg:py-6" onClick={handleSearch}>Search</Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {results.map((anime: any, index: number) => (
            <Link key={`${anime.mal_id}-${index}`} href={`/anime/${anime.mal_id}`}>
              <AnimeCard anime={anime} index={0} />
            </Link>
            
          ))} 
        </div>
      </div>
    </div>
  )
}

export default search