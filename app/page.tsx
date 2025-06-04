import Image from "next/image";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="background anime">
        <div className="flex flex-col items-center gap-3 justify-center max-w-3xl mx-auto m-15">
          <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl">Searching Your Next <span className="text-primary underline underline-offset-2">Anime</span> Made Easy</h1>
          <p className="text-lg md:text-xl lg:text:2xl text-white text-center m-2 p-2">Search and discover your favorite anime all in one place.</p>
          <Image src={'/assets/home/frieren.webp'} alt="Anime Photo" width={300} height={300} className=""/>
          <Link href={'/search'}>
            <Button className="text-2xl text-center hover:bg-accent m-10 p-6">
              <Search />
              Search
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
