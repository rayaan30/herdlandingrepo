import React from 'react';
import { Calendar, Users, ArrowRight, School, Share2, Zap, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">Herd</span>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition">Testimonials</a>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Get Early Access
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Campus Events,
            <span className="text-green-600"> Simplified</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with your campus community like never before. Discover, create, and join events that matter to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition flex items-center justify-center space-x-2">
              <span>Launch Your Event</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute -bottom-1/2 -right-1/4 w-2/3 h-[800px] bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute -top-1/4 -left-1/4 w-2/3 h-[800px] bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Students Love Herd</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-green-600" />}
              title="Smart Discovery"
              description="Find events that match your interests using our AI-powered recommendation engine"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Social Planning"
              description="Coordinate with friends and create group events effortlessly"
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8 text-green-600" />}
              title="Exclusive Access"
              description="Get early access to the hottest campus events and special deals"
            />
          </div>
        </div>
      </section>

      {/* Launch Date Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Expected Launch</h2>
          <p className="text-3xl font-light">05/2025</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How Herd Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard
              icon={<School className="h-8 w-8 text-green-600" />}
              number="1"
              title="Join Your Campus"
              description="Connect with your university network using your .edu email"
            />
            <StepCard
              icon={<Share2 className="h-8 w-8 text-green-600" />}
              number="2"
              title="Discover Events"
              description="Browse and join events that match your interests"
            />
            <StepCard
              icon={<Zap className="h-8 w-8 text-green-600" />}
              number="3"
              title="Start Hosting"
              description="Create and manage your own events with powerful tools"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join the Herd?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of campus event planning.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Herd</span>
            <div className="text-sm text-gray-400">
              © 2025 Herd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-green-50 hover:bg-green-100 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ icon, number, title, description }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
        {icon}
      </div>
      <div className="text-green-600 font-bold mb-2">Step {number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;