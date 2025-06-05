import Link from "next/link"
import { fetchAnime } from "../action"
import AnimeCard, { AnimeProp } from "../components/AnimeCard"

async function Anime() {
  const page = 1
  const data = await fetchAnime(page)
  return (

    <main className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.map((item: AnimeProp, index: number) => (
            <Link key={item.mal_id} href={`/anime/${item.mal_id}`}><AnimeCard anime={item} index={index}/></Link>
          ))}
        </div>  
      </div>
    </main>
    
  )
}

export default Anime