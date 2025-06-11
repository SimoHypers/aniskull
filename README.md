# 🔍 AniSkull - Anime Search & Discovery Platform

A modern anime search and discovery website built with Next.js 15, allowing users to explore anime series and movies with detailed information, ratings, and trailers.

![logo](public/assets/logo/aniskull_logo.png)

## ✨ Features

- **🔍 Search Functionality**: Search through thousands of anime titles
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎬 Detailed Anime Information**: 
  - Anime scores and ratings
  - Status (Airing, Completed, Upcoming)
  - Detailed synopsis
  - Episode count and duration
  - Genres and themes
- **🎥 YouTube Trailers**: Watch official trailers directly on the site
- **🔗 MyAnimeList Integration**: Direct links to MAL pages for more information
- **📄 Pagination**: Browse through anime collections with smooth pagination
- **⚡ Fast Performance**: Built with Next.js 15 for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: Jikan API (MyAnimeList API)
- **Deployment**: Vercel

## 🚀 Live Demo

**🌐 Visit the live application**: [https://aniskull.vercel.app/](https://aniskull.vercel.app/)

Start exploring anime right away - no installation required!

## 🎯 How to Use

### Searching for Anime
1. Use the search bar on the homepage
2. Type the name of the anime you're looking for
3. Browse through the search results
4. Click on any anime card to view detailed information

### Viewing Anime Details
- **Basic Info**: View title, score, rating, and status
- **Synopsis**: Read the full plot description
- **Trailer**: Watch the official YouTube trailer (if available)
- **External Links**: Visit the MyAnimeList page for additional information
- **Technical Details**: See episode count, duration, genres, and more

### Browsing Collections
- Navigate through different pages using the pagination controls
- Discover new anime through the browse functionality

## 📁 Project Structure

```
aniskull/
├── app/
│   ├── components/         # Reusable UI components
│   │   ├── AnimeCard.tsx  # Individual anime display card
│   │   └── AnimeDetails.tsx # Detailed anime information page
│   ├── anime/
│   │   ├── [id]/          # Dynamic anime detail pages
│   │   └── page/[page]/   # Pagination pages
│   ├── action.ts          # Server actions for data fetching
│   └── layout.tsx         # Root layout component
├── components/ui/         # shadcn/ui components
├── public/               # Static assets
└── README.md
```

## 🌐 API Integration

This project uses the [Jikan API](https://jikan.moe/), which provides access to MyAnimeList data:
- Anime search and details
- Character and staff information
- Reviews and recommendations
- No authentication required

## 🚀 Deployment

This project is deployed and hosted on Vercel for optimal performance and reliability.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Jikan API](https://jikan.moe/) for providing free access to MyAnimeList data
- [MyAnimeList](https://myanimelist.net/) for the comprehensive anime database
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@SimoHypers](https://github.com/SimoHypers)
- Project Link: [https://aniskull.vercel.app/](https://aniskull.vercel.app/)

---

⭐ **Star this repository if you found it helpful!**