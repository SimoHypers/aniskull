import { fetchAnime } from "../action"
import AnimeCard, { AnimeProp } from "../components/AnimeCard"

async function Anime() {
  const data = await fetchAnime(1)
  return (

    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.mal_id} anime={item} index={index}/>
        ))}
        
      </section>
    </main>
    
  )
}

export default Anime