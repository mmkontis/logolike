import { SearchBar } from '@/components/SearchBar'
import { Sidebar } from '@/components/Sidebar'

export default function MyDesignsPage() {
  return (
    <div className="min-h-screen bg-[#f1f0ef]">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-semibold text-black">
                My Designs
              </h1>
              <SearchBar />
            </div>
            {/* Add my designs grid/list here */}
            <div className="bg-white rounded-design-lg p-6">
              <p className="text-[#7C766F]">Your designs will appear here...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
