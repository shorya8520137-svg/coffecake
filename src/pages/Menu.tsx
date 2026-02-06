import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Cuisine = 'all' | 'american' | 'italian' | 'asian' | 'mexican' | 'french';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  cuisine: Cuisine;
  image: string;
  category: string;
}

export function Menu() {
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>('all');

  const cuisines: { value: Cuisine; label: string }[] = [
    { value: 'all', label: 'All Cuisines' },
    { value: 'american', label: 'American' },
    { value: 'italian', label: 'Italian' },
    { value: 'asian', label: 'Asian' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'french', label: 'French' },
  ];

  const menuItems: MenuItem[] = [
    {
      name: 'Avocado Toast',
      description: 'Smashed avocado on sourdough with cherry tomatoes, feta, and microgreens',
      price: '$12.99',
      cuisine: 'american',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwMzYwNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, chorizo, cheese, beans, and salsa in a flour tortilla',
      price: '$11.99',
      cuisine: 'mexican',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1688845465690-e5ea24774fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBmb29kfGVufDF8fHx8MTc3MDMyMzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Croissant & Coffee',
      description: 'Buttery French croissant served with espresso or latte',
      price: '$8.99',
      cuisine: 'french',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1679449223735-444c4f71f0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzcwNDAyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Club Sandwich',
      description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo',
      price: '$13.99',
      cuisine: 'american',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1572982270458-ad80e5fcc49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNhZmUlMjBmcmVzaHxlbnwxfHx8fDE3NzA0MDQwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Pasta Carbonara',
      description: 'Creamy Italian pasta with pancetta, egg, and parmesan',
      price: '$16.99',
      cuisine: 'italian',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1739417083034-4e9118f487be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc3MDI4MDQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Ramen Bowl',
      description: 'Rich pork broth with noodles, egg, bamboo shoots, and green onions',
      price: '$14.99',
      cuisine: 'asian',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1652937917404-37f06dcb0964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsfGVufDF8fHx8MTc3MDM0NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Tacos Al Pastor',
      description: 'Three soft tacos with marinated pork, pineapple, cilantro, and onions',
      price: '$12.99',
      cuisine: 'mexican',
      category: 'Dinner',
      image: 'https://images.unsplash.com/photo-1688845465690-e5ea24774fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBmb29kfGVufDF8fHx8MTc3MDMyMzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Specialty Latte',
      description: 'Choose from vanilla, caramel, hazelnut, or seasonal flavors',
      price: '$5.99',
      cuisine: 'american',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NzAzNTkxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const filteredItems = selectedCuisine === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.cuisine === selectedCuisine);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4 text-black">Our Menu</h1>
          <p className="text-xl text-gray-700">
            Explore our diverse selection of global cuisines
          </p>
        </div>
      </div>

      {/* Cuisine Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.value}
                onClick={() => setSelectedCuisine(cuisine.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCuisine === cuisine.value
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {cuisine.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group border border-gray-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{item.category}</div>
                    <h3 className="text-xl text-black">{item.name}</h3>
                  </div>
                  <span className="text-black font-medium">{item.price}</span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <p className="text-xl">No items found for this cuisine.</p>
          </div>
        )}
      </div>
    </div>
  );
}