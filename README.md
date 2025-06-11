# 🔍 AniSkull - Anime Search & Discovery Platform

A modern anime search and discovery website built with Next.js 15, allowing users to explore anime series and movies with detailed information, ratings, and trailers.

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

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SimoHypers/aniskull.git
   cd aniskull
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

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

The project is configured for easy deployment on Vercel:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Next.js project
   - Deploy with default settings

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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
- Project Link: [https://github.com/SimoHypers/aniskull](https://github.com/SimoHypers/aniskull)

---

⭐ **Star this repository if you found it helpful!**