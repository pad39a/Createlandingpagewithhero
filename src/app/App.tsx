import heroImage from "../imports/lunar_rover.jpg";

export default function App() {
  return (
    <div className="size-full bg-black text-white overflow-auto">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Lunar Rover on Moon Surface"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Lunarnavi<sup className="text-2xl">TM</sup>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            is the precision lunar navigation system designed from defense proven software and hardware
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="mailto:info@lunarnavi.com"
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors inline-block text-center"
            >
              Learn More
            </a>
            <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-800 hover:bg-zinc-750 transition-colors">
              <h3 className="text-2xl mb-4">Defense Proven</h3>
              <p className="text-gray-400">Built on technology tested in the most demanding environments</p>
            </div>
            <div className="p-8 bg-zinc-800 hover:bg-zinc-750 transition-colors">
              <h3 className="text-2xl mb-4">Precision Navigation</h3>
              <p className="text-gray-400">Accurate positioning for lunar exploration and operations</p>
            </div>
            <div className="p-8 bg-zinc-800 hover:bg-zinc-750 transition-colors">
              <h3 className="text-2xl mb-4">Reliable Hardware</h3>
              <p className="text-gray-400">Engineered to withstand extreme lunar conditions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}