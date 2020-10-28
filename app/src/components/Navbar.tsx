import Toolbar from 'layouts/Toolbar'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

const Navbar = () => {

  return (
    <Toolbar className="z-10">
      <div className="flex items-center -mx-6">
        <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-3xl font-bold">sTodo</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
          <SearchBox />
          <div className="text-gray-500 hidden lg:flex lg:items-center lg:justify-end xl:w-1/4 px-6">
            <Link
              to="/create"
              className="block flex items-center hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>{' '}
            </Link>
          </div>
        </div>
      </div>
    </Toolbar>
  )
}

export default Navbar
