import React from 'react'

const SearchBox = () => {
  return (
    <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
      <div className="relative">
        <button className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200">
          Search{' '}
          <span className="hidden sm:inline">
            the docs (Press "/" to focus)
          </span>
        </button>
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
          <svg
            className="fill-current pointer-events-none text-gray-600 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
