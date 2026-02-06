import { Coffee, Heart, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source the finest ingredients and brew the best coffee to ensure every bite and sip is exceptional.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Our team puts passion and care into every dish we prepare, treating each customer like family.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We believe in building connections and creating a welcoming space for everyone.',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized by Travel + Leisure and Eater as one of the best cafes in the city.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc3MDM4ODMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Big Tree Cafe"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-xl">A passion for great coffee and global cuisine</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed mb-6">
            Founded in 2015 on Golf Course Road, Big Tree Cafe began with a simple vision: 
            to create a warm, inviting space where people could enjoy exceptional coffee and 
            delicious food from around the world.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Our name comes from the majestic oak tree that stands in front of our cafe, 
            a beloved landmark in the neighborhood for over 100 years. Like that tree, 
            we've grown deep roots in our community, becoming a gathering place for friends, 
            families, and coffee lovers.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Today, we're proud to serve a diverse menu that celebrates flavors from American 
            classics to Italian pasta, Asian bowls, Mexican favorites, and French pastries. 
            Every dish is prepared with care using fresh, quality ingredients.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-black">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-3 text-black">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8 text-black">Press & Recognition</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-2 text-black">"10 Best Cafes in the City"</h3>
              <p className="text-gray-700 mb-2">
                Big Tree Cafe ranked in the top 5 cafes for its cozy atmosphere and diverse menu.
              </p>
              <p className="text-sm text-gray-600">— Travel + Leisure, 2020</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-2 text-black">"Where to Get the Best Coffee"</h3>
              <p className="text-gray-700 mb-2">
                Highlights Big Tree Cafe's expertly brewed coffee and welcoming environment.
              </p>
              <p className="text-sm text-gray-600">— Eater, 2019</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-black">Come Visit Us</h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the Big Tree Cafe difference for yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Menu
            </a>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-black border-2 border-black px-8 py-3 rounded-lg transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}