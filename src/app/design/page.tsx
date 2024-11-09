import { DesignGrid } from '@/components/DesignGrid'
import { SearchBar } from '@/components/SearchBar'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#f1f0ef]">
        <div className="w-full px-6 pt-12">
          <div className="flex items-center justify-between mb-24 w-full">
            <h1 className="text-3xl font-semibold text-gray-900">
              What do you want to design today?
            </h1>
            <SearchBar />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full -mr-1 pl-3 px-4">
            <DesignGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
