import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-600">ClipCraft 🎬</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
        <Link to="/upload" className="text-gray-700 hover:text-purple-600 font-medium">upload</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 font-medium">Dashboard</Link>
      </nav>
    </header>
  )
}

export default Header