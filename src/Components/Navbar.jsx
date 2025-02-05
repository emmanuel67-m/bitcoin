import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#1A1500] py-4 px-4 sm:px-6 lg:px-8 p-12">
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg"
            alt="$OP_CAT Logo"
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
          />
          <h2 className="text-white text-xl sm:text-2xl font-bold">$OP_CAT</h2>
        </div>

        <button className="lg:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`w-full lg:w-auto lg:flex flex-col lg:flex-row gap-4 lg:gap-8 text-white mt-4 lg:mt-0 ${isMenuOpen ? "flex" : "hidden"}`}
        >
          <a href="#home" className="hover:text-yellow-500 py-2 lg:py-0">
            Home
          </a>
          <a href="#tokenomics" className="hover:text-yellow-500 py-2 lg:py-0">
            Tokenomics
          </a>
          <a href="#about" className="hover:text-yellow-500 py-2 lg:py-0">
            About
          </a>
          <a href="#features" className="hover:text-yellow-500 py-2 lg:py-0">
            Features
          </a>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-3xl font-bold mt-4 lg:mt-0">Buy Now</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

