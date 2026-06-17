// app/page.js (Next.js 13+ App Router)

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Ad Banner */}
      
      <div className="w-full flex justify-center">
        <img
          src="/top_banner.png"
          alt="Music"
          className="h-auto"
        />
      </div>

      <div className="w-full  text-white flex items-center justify-between px-6 py-3">
        
        {/* Left - Search */}
        <div className="flex items-center gap-2 w-1/3">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
          />
        </div>

        {/* Center - Logo */}
        <div className=" flex justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className=" object-contain"
          />
        </div>

        {/* Right - Buttons */}
        <div className="w-1/3 flex justify-end gap-3">
          <button className="bg-red-600 px-4 py-2 text-sm font-semibold">
            SUBSCRIBE
          </button>
          <button className="border border-gray-200 text-black px-4 py-2 text-sm">
            SIGN IN
          </button>
        </div>

      </div>

      <div className="w-full text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Left - Menu Icon */}
          <div className="w-1/4 flex items-center ">
            <button className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-500"></span>
              <span className="block w-6 h-[2px] bg-gray-500"></span>
              <span className="block w-6 h-[2px] bg-gray-500"></span>
            </button>
          </div>

          {/* Center - Navigation */}
          <div className="w-3/4 flex justify-center gap-8 text-sm font-medium">
            <a href="#" className="text-red-500 text-lg">Home</a>
            <a href="#" className="hover:text-red-500 text-lg">Categories</a>
            <a href="#" className="hover:text-red-500 text-lg">IR Prime</a>
            <a href="#" className="hover:text-red-500 text-lg">Events</a>
            <a href="#" className="hover:text-red-500 text-lg">Bookstore</a>
            <a href="#" className="hover:text-red-500 text-lg">Newsletter</a>
            <a href="#" className="hover:text-red-500 text-lg">Video</a>
          </div>

          {/* Right - Date */}
          <div className="w-1/4 flex justify-end items-center gap-2 text-sm text-gray-500">
            <span>☀️</span>
            <span>Friday, 30 June 2023</span>
          </div>

          

        </div>
      </div>

      <div className="w-full bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          
          {/* Card 1 */}
          <div className="flex items-center bg-white rounded-lg p-4 gap-4 shadow-sm">
            <img
              src="/card.png"
              alt="Hotspots"
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="text-red-500 text-xs font-semibold">HOTSPOTS</p>
              <p className="text-sm text-gray-800">
                Luxury hotspots: 5 most expensive high streets in the..
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-white rounded-lg p-4 gap-4 shadow-sm">
            <img
              src="/card.png"
              alt="AI"
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="text-red-500 text-xs font-semibold">AI</p>
              <p className="text-sm text-gray-800">
                5 ways to leverage the power of ChatGPT in retail
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-white rounded-lg p-4 gap-4 shadow-sm">
            <img
              src="/card.png"
              alt="Shipping"
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="text-red-500 text-xs font-semibold">SHIPPING</p>
              <p className="text-sm text-gray-800">
                Reliance to open 250 Azorte stores in 2-3 years
              </p>
            </div>
          </div>

        </div>
      </div>

     
      <div className="max-w-4xl mx-8 px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - BIG FEATURE */}
        <div className="lg:col-span-2 relative rounded overflow-hidden">
          <img
            src="/main.png"
            alt="Main News"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
            <span className="bg-red-600 text-xs px-3 py-1 w-fit font-semibold">
              IN FOCUS
            </span>

            <h2 className="text-2xl font-bold mt-3 leading-snug">
              Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
            </h2>

            <p className="text-sm text-gray-300 mt-1">Rahul Gandhi</p>
          </div>
        </div>

        {/* RIGHT SIDE NEWS */}
        <div className="space-y-6">
          
          {/* CARD 1 */}
          <div className="bg-black rounded overflow-hidden">
            <img
              src="/one.png"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-sm font-semibold">
                Unwrapping the Archies' reinvention plan
              </h3>
            </div>
          </div>
          

          {/* CARD 2 */}
          <div className="bg-black rounded overflow-hidden">
            <img
              src="/two.png"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold">
                How AI is enhancing stores, How AI is enhancing stores
              </h3>
            </div>
          </div>

        </div>

      </div>


      {/* LOWER NEWS LIST */}
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT LIST */}
        <div className="lg:col-span-2 space-y-6">

          {[1,2,3].map((item) => (
            <div key={item} className="flex gap-4 border-b border-gray-700 pb-4">

              <img
                src={`/three.png`}
                className="w-32 h-20 object-cover rounded"
              />

              <div>
                <p className="text-red-500 text-xs font-semibold">
                  {item === 2 ? "FOOD & BEVERAGE" : "SELECT CITYWALK"}
                </p>

                <h4 className="text-sm font-semibold leading-snug mt-1">
                  {item === 2
                    ? "KFC opens another outlet in Punjab"
                    : item === 3
                    ? "FNP (Ferns N Petals) appoints Ashish Goel"
                    : "Wow! Momo Foods enters Bhopal with Wow!"}
                </h4>

                <p className="text-xs text-gray-400 mt-1">
                  # retail  # stories  # podcast
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SMALL TEXT LIST */}
        <div className="space-y-6">
          {[1,2,3].map((item) => (
            <div key={item} className="border-b border-gray-700 pb-4">
              <p className="text-sm text-gray-300">
                These companies created a lot of hype when they listed on the...
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* WEB SPECIALS SECTION */}
      <div className="w-full text-white py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <h2 className="text-black text-lg font-semibold">Web Specials</h2>
          </div>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="/main.png"
                className="w-full h-[260px] object-cover rounded"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-sm font-semibold leading-snug">
                  Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
                </h3>
                <p className="text-xs text-gray-300 mt-1">Rahul Gandhi</p>
              </div>
            </div>

            {/* MIDDLE BULLET LIST */}
            <div className="flex flex-col justify-between py-2">
              {[1,2,3,4].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <div className="text-black flex-1 border-b border-gray-600">lorem</div>
                </div>
              ))}
            </div>

            {/* RIGHT AD */}
            <div className=" p-2 flex flex-col justify-between">
              <p className="text-xs text-center text-gray-400 mb-2">
                - Advertisement -
              </p>
              <img
                src="/bike.png"
                className="w-full object-cover rounded"
              />
            </div>

          </div>

          {/* SCROLL TEXT ROW */}
          <div className="flex items-center gap-6 mt-6 text-xs text-gray-300 overflow-x-auto">
            {[1,2,3,4].map((item) => (
              <div key={item} className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <p>B2B managed marketplace The Yarn</p>
                <span className="h-4 w-[1px] bg-gray-600 mx-3"></span>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* CARD GRID SECTION */}
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {[1,2,3,4,5].map((item) => (
            <div key={item} className="bg-white rounded overflow-hidden shadow-sm">

              <div className="relative">
                <img
                  src={`/bottom.png`}
                  className="w-full h-40 object-cover"
                />

                {/* small bars icon */}
                <div className="absolute bottom-2 left-2 flex gap-[2px]">
                  <span className="w-1 h-3 bg-white"></span>
                  <span className="w-1 h-5 bg-white"></span>
                  <span className="w-1 h-2 bg-white"></span>
                </div>
              </div>

              <div className="p-3">
                <p className="text-xs text-gray-700 leading-snug">
                  {item === 1 && "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions"}
                  {item === 2 && "DLF creating new retail space in Delhi for France's Galeries Lafayette"}
                  {item === 3 && "PE firm Carlyle offloads entire stake through its special-purpose"}
                  {item === 4 && "How AI is enhancing stores, How AI is enhancing stores"}
                  {item === 5 && "Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore"}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      
      
    </div>
  );
}





