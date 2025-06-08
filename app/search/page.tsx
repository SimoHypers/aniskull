import { Input } from "@/components/ui/input"
import { Button } from "../components/ui/button"




const search = () => {
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-center mx-2 lg:text-5xl">
          Search For Your Next <br /><span className="text-primary underline underline-offset-4">Anime</span>
        </div>
        <div className="flex flex-row my-16 items-center justify-center">
          <Input className="w-xs rounded-r-none lg:w-lg lg:py-6 focus-visible:ring-0" placeholder="Search for anime..."/>
          <Button className="w-20 rounded-l-none hover:bg-primary/80 lg:py-6">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default search