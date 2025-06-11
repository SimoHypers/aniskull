import { fetchAnime } from "@/app/action";
import AnimeCard, { AnimeProp } from "@/app/components/AnimeCard";
import Link from "next/link";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PageProps {
  params: { page: string };
}

export default async function AnimePage({ params }: PageProps) {
  const currentPage = parseInt(params.page) || 1;
  const data = await fetchAnime(currentPage);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((item: AnimeProp, index: number) => (
          <Link key={`${item.mal_id}-${index}`} href={`/anime/${item.mal_id}`}>
            <AnimeCard anime={item} index={index} />
          </Link>
        ))}
      </div>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem className="text-primary">
            <PaginationPrevious href={`/anime/page/${currentPage - 1}`} />
          </PaginationItem>

          {[...Array(3)].map((_, i) => {
            const page = i + 1;
            return (
              <PaginationItem key={page} className="text-primary">
                <PaginationLink href={`/anime/page/${page}`} isActive={page === currentPage}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem className="text-primary">
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem className="text-primary">
            <PaginationNext href={`/anime/page/${currentPage + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
