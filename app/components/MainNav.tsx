import Image from "next/image"
import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const MainNav = () => {
  return (
    <nav className="bg-primary border-2">
        <div className="flex flex-row items-center gap-4 p-4 justify-between">
            <Link href={'/'}>
              <Image src={'/assets/logo/aniskull_logo.png'} alt="AniSkull Logo" width={200} height={150}/>
            </Link>
            <Link href={'/anime'} className="lg:hidden">
              <Button className="bg-accent hover:bg-accent cursor-pointer">Anime</Button>
            </Link>
            <Link href={'/search'} className="p-2.5 rounded-md hover:bg-accent cursor-pointer transition duration-450 ease-in-out">
                <Search/>
            </Link>
        </div>
    </nav>
  )
}

export default MainNav