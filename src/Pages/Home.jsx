import { useEffect } from "react"
import { Copy } from "lucide-react"

const Home = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.target.getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  const handleCopyAddress = () => {
    const address = "0x91f68e145d8E45d45bE4365c3766Eb56f6d"
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied to clipboard!")
    })
  }

  return (
    <main className="bg-[#1A1500] text-white p-12">
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <p className="bg-amber-400 w-fit font-light mb-2 px-2">Hi I'm</p>
              <span className="font-extrabold text-5xl sm:text-6xl lg:text-7xl">$OP_CAT</span>
            </h1>
            <p className="mb-6 text-base sm:text-lg">
              OP_CAT is an opcode which stands for operation code that was part of the original Bitcoin scripting
              system. It took care of concatenating two strings together, but was removed from Bitcoin in 2010 to
              prevent possible stack overflow.
            </p>
            <div className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-full sm:w-fit">
              <span className="font-mono text-sm sm:text-base truncate">0x91f68e145d8E45d45bE4365c3766Eb56f6d</span>
              <button onClick={handleCopyAddress} className="text-yellow-500 flex-shrink-0" aria-label="Copy address">
                <Copy size={20} />
              </button>
            </div>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold">BUY $OPCAT</button>
          </div>

          <img
            src="https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg"
            alt="OP CAT Hero"
            className="w-full max-w-sm mx-auto rounded-lg"
          />
        </div>
      </section>

      <section id="tokenomics" className="py-16 bg-[#1C1805] px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-0">Tokenomics</h2>
      <div className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg flex items-center gap-4 mb-6 w-fit">
        Total supply: 1,000,000,000 ($OPCAT)
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
      {/* Burnt Card */}
      <div className="bg-[#2A2510] rounded-lg p-5 flex flex-col items-center text-center transform sm:translate-y-2">
        <div className="w-14 h-14 mb-3">
          <img
            src={`https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg`}
            alt="Burnt Token"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">Burnt</h3>
        <p className="text-amber-400 text-sm">50% of tokens supply burned,</p>
        <p className="text-amber-400 text-sm">More information</p>
      </div>

      {/* Distribution Card */}
      <div className="bg-yellow-500 rounded-lg p-6 flex flex-col items-center text-center transform -translate-y-2 shadow-lg border-2 border-[#2A2510]">
        <div className="w-16 h-16 mb-4">
          <img
            src={`https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg`}
            alt="Distribution Token"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-[#2A2510] text-xl font-bold mb-3">Distribution</h3>
        <p className="text-[#2A2510] text-base font-semibold mb-1">35% Presale</p>
        <p className="text-[#2A2510] text-base font-semibold mb-1">5% Dex Listing</p>
        <p className="text-[#2A2510] text-base font-semibold">10% Liquidity</p>
      </div>

      {/* Marketing Card */}
      <div className="bg-[#2A2510] rounded-lg p-5 flex flex-col items-center text-center transform sm:translate-y-2">
        <div className="w-14 h-14 mb-3">
          <img
            src={`https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg`}
            alt="Marketing Token"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">Marketing</h3>
        <p className="text-amber-400 text-sm">Great marketing strategy</p>
        <p className="text-amber-400 text-sm">collaboration with influencers</p>
      </div>
    </div>
  </div>
</section>


      <section id="about" className="container mx-auto px-4 py-16 bg-[#2A2000] rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg"
            alt="OpCat About"
            className="max-w-full h-auto w-full md:w-80 mx-auto md:ml-0"
          />

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What is $OPCAT?</h2>
            <p className="text-gray-400 mb-6">
              This decision by the mining community represents what they have in common to help secure this big step.
              OP_CAT was disabled by Satoshi Nakamoto in 2010, due to concerns about potential vulnerabilities. Now,
              after extensive testing and research by using OP_CAT right after taproot to create better smart contracts.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-3xl">BUY NOW</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 md:mb-16">
              Some of our <br /> features
            </h2>
            <div className="space-y-4">
              {["Influencer Awareness", "Future Staking", "Trending everywhere"].map((feature, i) => (
                <div
                  key={i}
                  className={`p-4 sm:p-7 w-full md:w-4/5 rounded-lg ${i === 1 ? "bg-[#F0B90B]" : "bg-[#3C3420]"}`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 md:mt-0">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 md:mb-16">$OPCAT THE BNB</h3>
            <img
              src="https://i.pinimg.com/474x/27/83/cf/2783cfef3fdcbc766ac5096511a565c0.jpg"
              alt="OpCat BNB"
              className="mx-auto h-48 w-48 sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

