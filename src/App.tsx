import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/30 sticky top-0 z-50 border-b border-blue-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">D</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DeployPro
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-gray-300 hover:text-blue-400 transition-colors" href="#features">Features</a>
          <a className="text-gray-300 hover:text-blue-400 transition-colors" href="#architecture">Architecture</a>
          <a className="text-gray-300 hover:text-blue-400 transition-colors" href="#docs">Documentation</a>
          <a className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105" href="#deploy">
            Deploy Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="text-center mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                Deploy at
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Lightning Speed
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Experience the next generation of deployment platform. Built with Cloudflare R2, Docker containers, 
                and Kubernetes on Digital Ocean. Deploy React apps with enterprise-grade reliability.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#deploy" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                Start Deploying
              </a>
              <a href="#demo" className="px-10 py-4 border-2 border-blue-400/50 text-blue-400 rounded-full font-medium hover:border-blue-400 hover:bg-blue-400/10 transition-all">
                Live Demo
              </a>
            </div>

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
        </section>

        {/* Features Section */}
        <section id="features" className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Why Choose DeployPro?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade deployment platform with cutting-edge technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Lightning Fast Deployments</h4>
              <p className="text-gray-300">
                Deploy your React applications in seconds with our optimized containerization pipeline and global CDN distribution.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Enterprise Security</h4>
              <p className="text-gray-300">
                Built-in security with Kubernetes RBAC, encrypted storage with R2, and comprehensive API authentication.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Real-time Monitoring</h4>
              <p className="text-gray-300">
                Comprehensive monitoring dashboard with real-time metrics, logs, and performance analytics for your deployments.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Global Edge Network</h4>
              <p className="text-gray-300">
                Leverage Cloudflare's global network with R2 storage for ultra-fast content delivery worldwide.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Auto-scaling Infrastructure</h4>
              <p className="text-gray-300">
                Kubernetes-powered auto-scaling ensures your applications handle any traffic load seamlessly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">API-First Testing</h4>
              <p className="text-gray-300">
                Integrated Postman testing suite with automated API validation and comprehensive test reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Modern Architecture</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on proven cloud-native technologies for maximum reliability and performance
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Source Code Upload</h4>
                    <p className="text-gray-300">Push your React code to our platform via Git integration or direct upload</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Docker Containerization</h4>
                    <p className="text-gray-300">Automatic containerization with optimized Docker images and multi-stage builds</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Kubernetes Deployment</h4>
                    <p className="text-gray-300">Deploy to Digital Ocean Kubernetes cluster with auto-scaling and load balancing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">R2 Static Assets</h4>
                    <p className="text-gray-300">Static assets served via Cloudflare R2 for lightning-fast global delivery</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/30">
                  <div className="text-center space-y-4">
                    <div className="text-6xl mb-4">🏗️</div>
                    <h4 className="text-xl font-semibold">Deployment Pipeline</h4>
                    <p className="text-gray-300">
                      Experience the power of modern DevOps with our fully automated deployment pipeline
                    </p>
                    <div className="flex justify-center space-x-2 pt-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="deploy" className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Deploy?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the next generation of developers using enterprise-grade deployment infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="px-10 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Start Free Trial
            </a>
            <a href="#" className="px-10 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all">
              View Documentation
            </a>
          </div>
        </section>
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
  );
}