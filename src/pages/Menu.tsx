import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Cuisine = 'all' | 'starters' | 'main' | 'snacks' | 'desserts' | 'beverages';

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
    { value: 'all', label: 'All Items' },
    { value: 'starters', label: 'Starters' },
    { value: 'main', label: 'Main Course' },
    { value: 'snacks', label: 'Snacks' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'beverages', label: 'Beverages' },
  ];

  const menuItems: MenuItem[] = [
    {
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese marinated in spices and yogurt',
      price: '₹249',
      cuisine: 'starters',
      category: 'Starters',
      image: '/menu_images/item_1.png',
    },
    {
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with tender chicken and traditional spices',
      price: '₹299',
      cuisine: 'main',
      category: 'Main Course',
      image: '/menu_images/item_2.png',
    },
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato-based curry with tender chicken pieces',
      price: '₹349',
      cuisine: 'main',
      category: 'Main Course',
      image: '/menu_images/item_3.png',
    },
    {
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potato filling',
      price: '₹149',
      cuisine: 'main',
      category: 'Breakfast',
      image: '/menu_images/item_4.png',
    },
    {
      name: 'Veg Thali',
      description: 'Complete meal with dal, sabzi, roti, rice, and dessert',
      price: '₹199',
      cuisine: 'main',
      category: 'Main Course',
      image: '/menu_images/item_5.png',
    },
    {
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry with fluffy fried bread',
      price: '₹179',
      cuisine: 'snacks',
      category: 'Snacks',
      image: '/menu_images/item_6.png',
    },
    {
      name: 'Tandoori Chicken',
      description: 'Clay oven roasted chicken with aromatic spices',
      price: '₹399',
      cuisine: 'main',
      category: 'Main Course',
      image: '/menu_images/item_7.png',
    },
    {
      name: 'Samosa Chaat',
      description: 'Crispy samosas topped with yogurt, chutneys, and spices',
      price: '₹129',
      cuisine: 'snacks',
      category: 'Snacks',
      image: '/menu_images/item_8.png',
    },
    {
      name: 'Gulab Jamun',
      description: 'Sweet milk dumplings soaked in rose-flavored syrup',
      price: '₹99',
      cuisine: 'desserts',
      category: 'Desserts',
      image: '/menu_images/item_9.png',
    },
    {
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea with milk',
      price: '₹49',
      cuisine: 'beverages',
      category: 'Beverages',
      image: '/menu_images/item_10.png',
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
            Authentic Indian flavors crafted with love
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