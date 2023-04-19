import {
  Home,
  Library,
  Search,
} from 'lucide-react'
import { SavedPlaylistItem } from './SavedPlaylistItem'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Home />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <SavedPlaylistItem title="Hot Hits Brasil" />
        <SavedPlaylistItem title="Daily Mix 1" />
        <SavedPlaylistItem title="Pop Up" />
        <SavedPlaylistItem title="Top Brasil" />
        <SavedPlaylistItem title="Viral Hits" />
        <SavedPlaylistItem title="Daily Mix 2" />
        <SavedPlaylistItem title="Heavy Ballads" />
        <SavedPlaylistItem title="Today's Top Hits" />
        <SavedPlaylistItem title="Metal Essentials" />
        <SavedPlaylistItem title="On Repeat" />
        <SavedPlaylistItem title="Daily Mix 3" />
        <SavedPlaylistItem title="Viral Hits" />
        <SavedPlaylistItem title="Discover Weekly" />
        <SavedPlaylistItem title="Release Radar" />
        <SavedPlaylistItem title="Daily Mix 4" />
        <SavedPlaylistItem title="Yesterday Hits" />
        <SavedPlaylistItem title="Nine Music" />
      </nav>
    </aside>
  )
}