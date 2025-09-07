import "./App.css";

export default function App() {
  return (
    <> <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex flex-col">
      {/* Header */}
      <header className="px-6 py-3 flex items-center justify-between backdrop-blur-md bg-black/30 border-b border-blue-500/20 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-white">D</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DeployPro
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-gray-300 hover:text-blue-400 transition-colors text-sm" href="#features">Features</a>
          <a className="text-gray-300 hover:text-blue-400 transition-colors text-sm" href="#architecture">Architecture</a>
          <a className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all text-sm" href="#deploy">
            Deploy Now
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Deploy at
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Lightning Speed
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Enterprise deployment platform with Cloudflare R2, Docker, Kubernetes on Digital Ocean, and Postman testing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#deploy" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                Start Deploying
              </a>
              <a href="#demo" className="px-6 py-3 border-2 border-blue-400/50 text-blue-400 rounded-full font-medium hover:border-blue-400 hover:bg-blue-400/10 transition-all">
                Live Demo
              </a>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-5 gap-3 pt-6">
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-sm">☁️</span>
                </div>
                <div className="text-xs text-gray-400">R2</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-sm">🐳</span>
                </div>
                <div className="text-xs text-gray-400">Docker</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-sm">☸️</span>
                </div>
                <div className="text-xs text-gray-400">K8s</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-sm">🌊</span>
                </div>
                <div className="text-xs text-gray-400">DO</div>
              </div>
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-sm">📮</span>
                </div>
                <div className="text-xs text-gray-400">API</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">⚡</span>
              </div>
              <h4 className="text-sm font-semibold mb-2">Lightning Fast</h4>
              <p className="text-xs text-gray-300">Deploy in seconds with optimized containers</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">🔒</span>
              </div>
              <h4 className="text-sm font-semibold mb-2">Enterprise Security</h4>
              <p className="text-xs text-gray-300">Built-in K8s security and encrypted storage</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:border-green-400/40 transition-all">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">📊</span>
              </div>
              <h4 className="text-sm font-semibold mb-2">Real-time Monitoring</h4>
              <p className="text-xs text-gray-300">Comprehensive metrics and analytics</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20 hover:border-orange-400/40 transition-all">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">🌍</span>
              </div>
              <h4 className="text-sm font-semibold mb-2">Global Network</h4>
              <p className="text-xs text-gray-300">Cloudflare's edge network worldwide</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all col-span-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🔄</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Auto-scaling & API Testing</h4>
                  <p className="text-xs text-gray-300">Kubernetes auto-scaling with integrated Postman testing suite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-3 border-t border-blue-500/20 flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <span className="text-sm font-semibold">DeployPro</span>
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Docs</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Status</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
          </div>
          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} DeployPro - Enterprise Deployment Platform
          </div>
        </div>
      </footer>
    </div>
  );
}

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="text-sm text-gray-400">Cloudflare R2</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐳</span>
                </div>
                <div className="text-sm text-gray-400">Docker</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">☸️</span>
                </div>
                <div className="text-sm text-gray-400">Kubernetes</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌊</span>
                </div>
                <div className="text-sm text-gray-400">Digital Ocean</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📮</span>
                </div>
                <div className="text-sm text-gray-400">Postman API</div>
              </div>
            </div>
          </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center border-t border-blue-500/20 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-lg font-semibold">DeployPro</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Docs</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Status</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-500/20 text-gray-400">
          <p>&copy; {new Date().getFullYear()} DeployPro. Enterprise deployment platform powered by Kubernetes, Docker, and Cloudflare R2.</p>
        </div>
      </footer>
    </div>
    </>
  );
}