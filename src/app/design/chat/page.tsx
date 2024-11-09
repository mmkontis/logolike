import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";

export default function ChatDesignerPage() {
  return (
    <div className="min-h-screen bg-[#f1f0ef] w-full h-full">
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex-1 w-full h-full">
          <div className="w-full px-6 pt-6">
            <div className="flex items-center justify-between mb-8 w-full">
              <h1 className="text-3xl font-semibold text-black">
                Chat Designer
              </h1>
              <SearchBar />
            </div>
            {/* Add chat designer specific content here */}
            <div className="bg-white rounded-design-lg p-6 w-full">
              <p className="text-[#7C766F]">Chat designer content coming soon...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
