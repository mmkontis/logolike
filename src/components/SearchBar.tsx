export const SearchBar = () => {
  return (
    <div className="flex max-w-[350px] flex-grow">
      <form className="p-2 relative w-full flex items-center bg-white group outline-[3px] hover:outline hover:outline-bg-secondary focus-within:outline focus-within:!outline-action-primary h-12 min-h-[48px] rounded-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="ml-1 text-fg-tertiary w-8 h-8 min-w-[2rem] min-h-[2rem] p-1"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M10.9839 16.0764C13.8125 16.0764 16.1055 13.7834 16.1055 10.9549C16.1055 8.12632 13.8125 5.83333 10.9839 5.83333C8.15537 5.83333 5.86238 8.12632 5.86238 10.9549C5.86238 13.7834 8.15537 16.0764 10.9839 16.0764ZM10.9839 17.9388C14.841 17.9388 17.9678 14.812 17.9678 10.9549C17.9678 7.09776 14.841 3.97095 10.9839 3.97095C7.12681 3.97095 4 7.09776 4 10.9549C4 14.812 7.12681 17.9388 10.9839 17.9388Z" 
            fill="currentColor"
          />
          <path 
            d="M14.0739 15.827L15.3908 14.5101L19.3415 18.4608C19.7052 18.8245 19.7052 19.4141 19.3415 19.7777C18.9779 20.1414 18.3883 20.1414 18.0246 19.7777L14.0739 15.827Z" 
            fill="currentColor"
          />
        </svg>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search Poster, Logo, or anything"
          className="bg-transparent border-none placeholder-fg-tertiary text-fg-tertiary focus:text-fg-primary focus:outline-none w-full ml-2 text-[18px]"
          autoComplete="off"
        />
        <input type="submit" hidden />
      </form>
    </div>
  )
}
