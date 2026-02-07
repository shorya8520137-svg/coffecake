import { Link } from 'react-router';
import { ArrowRight, Coffee, UtensilsCrossed, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Home() {
  const heroSlides = [
    {
      image: '/hero/hero1.jpg',
      title: 'Welcome to Big Tree Cafe',
      subtitle: 'Experience flavors from around the world in our cozy atmosphere',
      buttonText: 'View Our Menu',
    },
    {
      image: '/hero/minhero2.jpg',
      title: 'Spice that hits different.',
      subtitle: 'Discover bold flavors and authentic taste',
      buttonText: 'Explore Menu',
    },
  ];
  const promotions = [
    {
      title: 'Happy Hour',
      description: '10% off all drinks',
      time: '3 PM - 5 PM Daily',
      icon: Clock,
    },
    {
      title: 'BOGO Pastries',
      description: 'Buy one, get one free on select items',
      icon: UtensilsCrossed,
    },
    {
      title: 'First-Time Visitor',
      description: '15% off with code: BIGTREE15',
      icon: Star,
    },
  ];

  const featured = [
    {
      name: 'Avocado Toast',
      description: 'Fresh avocado on artisan sourdough with cherry tomatoes',
      image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMzYwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Breakfast',
    },
    {
      name: 'Specialty Latte',
      description: 'Expertly crafted with our signature blend',
      image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzAzNTkxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Coffee',
    },
    {
      name: 'Gourmet Sandwich',
      description: 'Fresh ingredients on house-baked bread',
      image: 'https://images.unsplash.com/photo-1572982270458-ad80e5fcc49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNhZmUlMjBmcmVzaHxlbnwxfHx8fDE3NzA0MDQwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Lunch',
    },
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-[600px]">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-[600px]">
                <div className="relative h-full flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      {slide.subtitle}
                    </p>
                    <Link
                      to="/menu"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold"
                    >
                      {slide.buttonText} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
        </Carousel>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-black">Current Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <promo.icon className="w-12 h-12 text-black mb-4" />
                <h3 className="text-xl mb-2 text-black">{promo.title}</h3>
                <p className="text-gray-700 mb-2">{promo.description}</p>
                {promo.time && <p className="text-sm text-gray-600">{promo.time}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-black">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                  <h3 className="text-xl mb-2 text-black">{item.name}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl mb-4 text-black">Visit Us Today</h2>
          <p className="text-xl text-gray-700 mb-8">
            Located at Golf Course Road, we're open 7 days a week
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg transition-colors"
          >
            Get Directions <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}