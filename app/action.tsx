'use server';

const MAX_LIMIT = 25; // Max amount of animes fetched at once
const MAX_SEARCH_LIMIT = 8;


export async function fetchAnime(page: number){
    const response = await fetch(
        `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${MAX_LIMIT}`
    );


    const data = await response.json();

    const simplifiedData = data.data.map((anime: any) => ({
        mal_id: anime.mal_id,
        title: anime.title,
        image_url: anime.images.jpg.image_url,
        episodes: anime.episodes,
        score: anime.score,
        status: anime.status,
        year: anime.year,
    }))

    return data.data;
}


export async function fetchSearchAnime(searchedAnime: string){
    const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchedAnime}&limit=${MAX_SEARCH_LIMIT}`
    )

    const data = await response.json();

    return data.data
}