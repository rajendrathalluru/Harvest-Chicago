import React, { useState } from 'react';
import uicLogo from '../assets/uic.jpg';
import harvestLogo from '../assets/image.png';
import { MapPin, Users, Truck, Building2, BookOpen, LogOut, ChevronDown, ExternalLink, X } from 'lucide-react';

const HarvestApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '', role: 'participant' });
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [errors, setErrors] = useState({});

  const pillars = [
    {
      id: 'coalition',
      icon: <Users className="w-8 h-8" />,
      title: "Coalition Building",
      color: '#001E62',
      shortDesc: "Multi-sectoral neighborhood hubs",
      content: "Establishing collaborative networks between FQHC clinics and food assistance organizations to create integrated support systems within Chicago neighborhoods. These partnerships enable coordinated care delivery and resource sharing across sectors."
    },
    {
      id: 'referral',
      icon: <MapPin className="w-8 h-8" />,
      title: "Virtual Referral Platform",
      color: '#8BC34A',
      shortDesc: "Food program connections",
      content: "A comprehensive digital platform that connects participants with food assistance programs throughout Chicago. Features include real-time program availability, location mapping, eligibility screening, and streamlined referral processes."
    },
    {
      id: 'delivery',
      icon: <Truck className="w-8 h-8" />,
      title: "Shared Food Delivery",
      color: '#D50032',
      shortDesc: "Coordinated delivery services",
      content: "Logistics coordination system that optimizes food delivery routes and schedules across multiple providers. Reduces transportation barriers and ensures consistent access to nutritious food for underserved communities."
    },
    {
      id: 'fqhc',
      icon: <Building2 className="w-8 h-8" />,
      title: "FQHC Integration",
      color: '#001E62',
      shortDesc: "Health system connectivity",
      content: "Integration capabilities with Federally Qualified Health Center electronic medical record systems. Enables health navigators and providers to coordinate food security interventions with clinical care plans and track health outcomes."
    },
    {
      id: 'dietary',
      icon: <BookOpen className="w-8 h-8" />,
      title: "Dietary Modules",
      color: '#8BC34A',
      shortDesc: "Cancer prevention education",
      content: "Evidence-based digital education modules tailored for dietary-related cancer prevention and survivorship. Content is personalized based on individual risk factors, cultural preferences, and health literacy levels."
    }
  ];

  const validateLogin = () => {
    const newErrors = {};
    if (!loginForm.email) newErrors.email = 'Email is required';
    if (!loginForm.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      setIsLoggedIn(true);
      setUserRole(loginForm.role);
      setShowLoginModal(false);
      setErrors({});
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setSelectedPillar(null);
    setLoginForm({ email: '', password: '', role: 'participant' });
  };

  // Landing Page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slideUp 1s ease-out forwards;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>

        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img 
                  src={uicLogo}
                  alt="UIC Logo"
                  className="h-16 object-contain"
                />
                <div className="h-12 w-px bg-gray-300"></div>
                <img 
                  src={harvestLogo}
                  alt="HARVEST Chicago Logo"
                  className="h-16 object-contain"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="px-6 py-2 rounded-lg text-white font-medium transition hover:opacity-90 hover:scale-105 transform"
                  style={{backgroundColor: '#001E62'}}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="inline-block hover:scale-110 transition-transform duration-300" style={{color: '#001E62'}}>Empowering</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Communities</span>
              <br />
              <span className="inline-block hover:scale-110 transition-transform duration-300" style={{color: '#001E62'}}>Through Food &</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300" style={{color: '#D50032'}}>Health</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 animation-delay-200">
              Connecting Chicago communities to resources that matter—food security, 
              health navigation, and cancer prevention support.
            </p>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="mt-8 px-8 py-4 rounded-lg text-white font-semibold text-lg transition hover:opacity-90 hover:scale-105 transform shadow-lg animate-slide-up opacity-0 animation-delay-400"
              style={{backgroundColor: '#8BC34A'}}
            >
              Get Started
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up opacity-0 animation-delay-200">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center transition-transform hover:scale-110 hover:rotate-6" 
                   style={{backgroundColor: '#8BC34A15'}}>
                <MapPin style={{color: '#8BC34A'}} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#001E62'}}>
                Find Resources
              </h3>
              <p className="text-gray-600">
                Access food assistance programs, community kitchens, and nutrition support across Chicago
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up opacity-0 animation-delay-400">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center transition-transform hover:scale-110 hover:rotate-6" 
                   style={{backgroundColor: '#D5003215'}}>
                <Building2 style={{color: '#D50032'}} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#001E62'}}>
                Health Navigation
              </h3>
              <p className="text-gray-600">
                Connect with health navigators and partnered clinics for coordinated care and support
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up opacity-0 animation-delay-500">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center transition-transform hover:scale-110 hover:rotate-6" 
                   style={{backgroundColor: '#001E6215'}}>
                <BookOpen style={{color: '#001E62'}} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#001E62'}}>
                Learn & Thrive
              </h3>
              <p className="text-gray-600">
                Evidence-based dietary education for cancer prevention and overall wellness
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto animate-slide-up opacity-0 animation-delay-500">
            <h2 className="text-3xl font-bold mb-6 text-center hover:scale-105 transition-transform duration-300 inline-block w-full" style={{color: '#001E62'}}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 text-center leading-relaxed mb-8">
              HARVEST Chicago brings together technology, healthcare, and community partnerships 
              to address food insecurity and reduce dietary-related cancer risks. We're building 
              a platform where access to healthy food and health resources is just a click away.
            </p>
            <div className="flex justify-center items-center gap-6 pt-6 border-t">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <img 
                  src={uicLogo}
                  alt="UIC"
                  className="w-20 h-20 object-contain mx-auto mb-2"
                />
                <p className="text-xs text-gray-500">Partner</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <img 
                  src={harvestLogo}
                  alt="HARVEST"
                  className="w-20 h-20 object-contain mx-auto mb-2"
                />
                <p className="text-xs text-gray-500">Partner</p>
              </div>
            </div>
          </div>
        </main>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold mb-8" style={{color: '#001E62'}}>
                Sign In
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input 
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select 
                    value={loginForm.role}
                    onChange={(e) => setLoginForm({...loginForm, role: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                  >
                    <option value="participant">Participant</option>
                    <option value="navigator">Health Navigator</option>
                    <option value="provider">Healthcare Provider</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                
                <button 
                  onClick={handleLogin}
                  className="w-full py-3 rounded-lg text-white font-semibold transition hover:opacity-90 shadow-md"
                  style={{backgroundColor: '#8BC34A'}}
                >
                  Sign In
                </button>

                <div className="text-center pt-4">
                  <a href="#" className="text-sm hover:underline" style={{color: '#001E62'}}>
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Dashboard (After Login)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={harvestLogo}
                alt="HARVEST Logo"
                className="h-10 object-contain"
              />
              <div>
                <div className="font-bold text-lg" style={{color: '#8BC34A'}}>HARVEST</div>
                <div className="text-xs text-gray-500 capitalize">{userRole}</div>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{color: '#001E62'}}>
            Five Pillars
          </h1>
          <p className="text-lg text-gray-600">
            Explore the core components of HARVEST Chicago's integrated approach to food security and health
          </p>
        </div>

        {/* Pillar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillar(selectedPillar === pillar.id ? null : pillar.id)}
              className={`bg-white rounded-xl p-6 text-left transition-all duration-200 border-2 ${
                selectedPillar === pillar.id 
                  ? 'shadow-lg scale-105' 
                  : 'shadow-sm hover:shadow-md'
              }`}
              style={{
                borderColor: selectedPillar === pillar.id ? pillar.color : 'transparent'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{backgroundColor: pillar.color + '15', color: pillar.color}}
                >
                  {pillar.icon}
                </div>
                <ChevronDown 
                  className={`transition-transform duration-200 ${
                    selectedPillar === pillar.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                  style={{color: pillar.color}}
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#001E62'}}>
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-600">
                {pillar.shortDesc}
              </p>
            </button>
          ))}
        </div>

        {/* Expanded Pillar Content */}
        {selectedPillar && (
          <div 
            className="bg-white rounded-xl shadow-lg p-8 border-l-4"
            style={{borderLeftColor: pillars.find(p => p.id === selectedPillar)?.color}}
          >
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: pillars.find(p => p.id === selectedPillar)?.color + '15',
                  color: pillars.find(p => p.id === selectedPillar)?.color
                }}
              >
                {pillars.find(p => p.id === selectedPillar)?.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{color: '#001E62'}}>
                  {pillars.find(p => p.id === selectedPillar)?.title}
                </h2>
                <p className="text-gray-600">
                  {pillars.find(p => p.id === selectedPillar)?.shortDesc}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {pillars.find(p => p.id === selectedPillar)?.content}
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                className="px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90 shadow-md flex items-center gap-2"
                style={{backgroundColor: pillars.find(p => p.id === selectedPillar)?.color}}
              >
                Access Resources
                <ExternalLink size={18} />
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-medium transition hover:bg-gray-50 border-2"
                style={{
                  borderColor: pillars.find(p => p.id === selectedPillar)?.color,
                  color: pillars.find(p => p.id === selectedPillar)?.color
                }}
              >
                View Documentation
              </button>
            </div>
          </div>
        )}

        {!selectedPillar && (
          <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
            <p className="text-gray-600">
              Select a pillar above to view detailed information and access resources
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HarvestApp;