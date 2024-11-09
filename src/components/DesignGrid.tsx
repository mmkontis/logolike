import { designCategories } from '@/types/creations'
import Image from 'next/image'
import Link from 'next/link'

export const DesignGrid = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
      <li className="w-full">
        <button type="button" className="w-full text-left">
          <div className="rounded-3xl p-5 text-black active:scale-99 transition-all duration-75 flex flex-col gap-1 relative overflow-hidden aspect-[14/10] group cursor-pointer bg-white">
            <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold">
              <span className="flex">What do you want to design today?</span>
            </h1>
            <div className="border-[3px] border-dashed rounded-2xl border-[#E6E4E1] group-hover:border-[#7C766F] h-full">
              <div className="flex w-full h-full items-center justify-center text-[#7C766F]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.306 8.456l6.83-.747a7.708 7.708 0 0 0 5.348 4.206l.758 6.926a1.5 1.5 0 0 1-1.199 1.494l-10.314 1.127a1.5 1.5 0 0 1-1.493-1.199L5.107 9.95a1.5 1.5 0 0 1 1.199-1.493zm15.09 10.15l-.783-7.154a7.708 7.708 0 1 0-8.328-5.917L6.07 6.302a4.5 4.5 0 0 0-3.117 3.883l1.128 10.314a4.5 4.5 0 0 0 3.883 3.117l10.314-1.127a4.5 4.5 0 0 0 3.117-3.883z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </li>
      {designCategories.map((category, index) => (
        <li key={`${category.title}-${index}`} className="w-full">
          <Link
            href={category.href}
            data-testid={`design-category-${category.id}`}
            className="block"
          >
            <div className="rounded-3xl p-5 bg-white text-black active:scale-[99%] transition-all duration-75 flex flex-col gap-1 relative overflow-hidden aspect-[14/10] group">
              <div className="absolute inset-0 p-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-top h-full w-full object-cover rounded-2xl blur-xl opacity-20"
                />
              </div>
              <h2 className="relative font-semibold inline-flex items-center gap-2 text-black">
                {category.title}
              </h2>
              <div className="absolute top-16 rotate-[6deg] left-1/2 -translate-x-1/2 w-1/2 flex items-center justify-center aspect-[10/14] rounded-2xl shadow-sm transition duration-150 md:group-hover:shadow-md md:group-hover:rotate-[5deg] md:group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="pointer-events-none object-top h-full object-cover w-full rounded-2xl aspect-[10/14]"
                />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
