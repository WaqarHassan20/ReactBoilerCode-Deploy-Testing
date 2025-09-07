import "./App.css";
import logo from "./assets/react.svg";
import hero from "./assets/vite.svg";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-white/80 sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="w-10 h-10 animate-spin-slow" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ReactLaunch
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#features">Features</a>
          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#about">About</a>
          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
          <a className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105" href="#get-started">
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Build Amazing
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  React Apps
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A modern, fast, and beautiful React boilerplate with Vite, TypeScript, and Tailwind CSS. 
                Start building your next project in minutes, not hours.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#get-started" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Start Building
              </a>
              <a href="#demo" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
                View Demo
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">⚡</div>
                <div className="text-sm text-gray-600 mt-2">Lightning Fast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">🎨</div>
                <div className="text-sm text-gray-600 mt-2">Beautiful UI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">🚀</div>
                <div className="text-sm text-gray-600 mt-2">Easy Deploy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img src={hero} alt="React Application" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Modern Development</h3>
                <p className="text-sm opacity-90">Built with the latest technologies</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse"></div>
          </div>
        </section>

    
        {/* CTA Section */}
        <section id="get-started" className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Start Building?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have chosen ReactLaunch for their next project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105">
              Download Now
            </a>
            <a href="#" className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all">
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center border-t border-gray-200 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-lg font-semibold">ReactLaunch</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-gray-500">
          <p>&copy; {new Date().getFullYear()} ReactLaunch. Built with ❤️ and React.</p>
        </div>
      </footer>
    </div>
  );
}