
import {
  TrendingUp,
  Globe,
  Zap,
  Share2,
  QrCode,
  Users,
  MapPin,
  Clock,
  BarChart3
} from 'lucide-react';

const MyHub = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Hub</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back! Rodney
          </h1>
          <p className="text-gray-600">Here's what's happening with your hub today</p>
        </div>

        {/* Main Layout - Grid + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Side - Bento Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* My Hub URL */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-500 mb-2">My Hub URL</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">hub.example.com</h3>
            <p className="text-xs text-gray-400">Last Edited: 2 days ago</p>
          </div>

          {/* Reach */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Reach</h3>
            <p className="text-sm text-gray-500">Your email campaign</p>
          </div>

          {/* Orbit */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Orbit</h3>
            <p className="text-sm text-gray-500">Your lead tracker CRM</p>
          </div>

          {/* Pixel - spans 1 column */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Pixel</h3>
            <p className="text-sm text-gray-500">Heatmap for you</p>
          </div>

          {/* Callix & Project AI - spans 2 columns */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow md:col-span-2 flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Callix & Project AI</h3>
          </div>

          {/* Refer & Earn Growth Program - spans 2 columns */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Refer & Earn Growth Program
            </h3>
            <p className="text-sm text-gray-500 mb-3">You are: Brand Ambassador/Affiliate</p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium">Active Status</span>
            </div>
          </div>

          {/* My Accounts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">My Accounts</h3>
          </div>

          {/* Quick Share */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
              <Share2 className="w-6 h-6 text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Quick Share</h3>
            <p className="text-sm text-gray-500">Your one link with all socials</p>
          </div>

          {/* Scan Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <QrCode className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Scan Card</h3>
            <p className="text-sm text-gray-500">Capture & Connect</p>
          </div>
        </div>

        {/* Right Sidebar - Vertical Stack */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          {/* Hub Statistics */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base font-semibold text-gray-800 mb-3">Hub Statistics</h3>
            
            {/* Total Views */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">2,847</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Chart Icon */}
            <div className="flex justify-end mt-2">
              <BarChart3 className="w-16 h-16 text-blue-100" />
            </div>
          </div>

          {/* Top 5 Cities */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <h4 className="text-sm font-semibold text-gray-800">Top 5 Cities</h4>
            </div>
            <p className="text-xs text-gray-400 mb-3">Watched you</p>
            
            <div className="space-y-2">
              {[
                { city: 'New York', width: '100%' },
                { city: 'Los Angeles', width: '80%' },
                { city: 'Chicago', width: '60%' },
                { city: 'Houston', width: '50%' },
                { city: 'Phoenix', width: '40%' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">{item.city}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: item.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Last 24 Hours */}
          <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-cyan-500" />
              <p className="text-sm text-gray-600">Last 24 Hours</p>
            </div>
            <p className="text-4xl font-bold text-blue-600 mb-1">7</p>
            <p className="text-sm text-gray-500">New leads captured</p>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default MyHub;