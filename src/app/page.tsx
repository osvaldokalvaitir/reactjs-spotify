import { Footer } from '@/components/Footer'
import { PlaylistItem } from '@/components/PlaylistItem'
import { RecentPlaylistItem } from '@/components/RecentPlaylistItem'
import { Sidebar } from '@/components/Sidebar'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
          <RecentPlaylistItem title="Ghost Stories" cover_source="/album-ghost-stories.jpg" />
          <RecentPlaylistItem title="Everyday Life" cover_source="/album-everyday-life.jpg" />
          <RecentPlaylistItem title="Kaleidoscope" cover_source="/album-kaleidoscope.jpg" />
          <RecentPlaylistItem title="Music Of The Spheres" cover_source="/album-music-of-the-spheres.jpg" />
          <RecentPlaylistItem title="Parachutes" cover_source="/album-parachutes.jpg" />
          <RecentPlaylistItem title="A Head Full Of Dreams" cover_source="/album-a-head-full-of-dreams.jpg" />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Osvaldo Kalvaitir Filho</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <PlaylistItem title="A Head Full Of Dreams" description="Wallows, COIN, girl in red and more" cover_source="/album-a-head-full-of-dreams.jpg" />
            <PlaylistItem title="Parachutes" description="Wallows, COIN, girl in red and more" cover_source="/album-parachutes.jpg" />
            <PlaylistItem title="Music Of The Spheres" description="Wallows, COIN, girl in red and more" cover_source="/album-music-of-the-spheres.jpg" />
            <PlaylistItem title="Kaleidoscope" description="Wallows, COIN, girl in red and more" cover_source="/album-kaleidoscope.jpg" />
            <PlaylistItem title="Everyday Life" description="Wallows, COIN, girl in red and more" cover_source="/album-everyday-life.jpg" />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
