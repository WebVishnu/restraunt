import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

// Menu data
const menuItems = [
  {
    category: "Specials",
    items: [
      { name: "Samosa", price: 20, description: "Crispy pastry filled with spiced potatoes and peas", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "samosa smosa somosa samose punjabi samosa aloo samosa" },
      { name: "Kachori", price: 40, description: "Deep-fried spicy snack filled with lentils", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "kachori kachodi khasta kachori dal kachori" },
      { name: "Khasta", price: 40, description: "Flaky and crispy pastry with spiced filling", searchTerms: "khasta kasta khasta kachori crispy kachori" },
      { name: "Paper Dosa", price: 50, description: "Thin and crispy rice crepe", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "paper dosa paper dose plain dosa plain dose crispy dosa" },
      { name: "Masala Dosa", price: 70, description: "Crispy rice crepe filled with spiced potato mixture", searchTerms: "masala dosa masala dose potato dosa aloo dosa mysore masala dosa" },
      { name: "Paneer Dosa", price: 90, description: "Dosa filled with spiced cottage cheese", searchTerms: "paneer dosa paneer dose cheese dosa cottage cheese dosa" }
    ]
  },
  {
    category: "Street Food Favorites",
    items: [
      { name: "Cheela", price: 60, description: "Savory pancake made from gram flour", searchTerms: "cheela chilla besan cheela besan chilla pudla puda" },
      { name: "Paneer Cheela", price: 80, description: "Gram flour pancake with cottage cheese filling", searchTerms: "paneer cheela paneer chilla cheese cheela cottage cheese cheela" },
      { name: "Tikki", price: 50, description: "Spiced potato patties", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "tikki tiki aloo tikki potato tikki" },
      { name: "Lachha Tikki", price: 60, description: "Layered crispy potato patties", searchTerms: "lachha tikki lacha tikki layered tikki crispy tikki" }
    ]
  },
  {
    category: "Indo-Chinese",
    items: [
      { name: "Chilli Potato", price: 80, description: "Crispy potato strips in spicy sauce", variants: ["Regular: ₹80", "Half: ₹50"], searchTerms: "chilli potato chili potato spicy potato honey chilli potato" },
      { name: "Honey Chilli Potato", price: 100, description: "Crispy potatoes in sweet and spicy sauce", variants: ["Regular: ₹100", "Half: ₹60"], searchTerms: "honey chilli potato honey chili potato sweet chilli potato" },
      { name: "Chowmein", price: 60, description: "Stir-fried noodles with vegetables", variants: ["Regular: ₹60", "Half: ₹40"], searchTerms: "chowmein chaumein noodles veg chowmein chinese noodles" },
      { name: "Paneer Chowmein", price: 90, description: "Noodles with cottage cheese", variants: ["Regular: ₹90", "Half: ₹50"], searchTerms: "paneer chowmein cheese chowmein paneer noodles" }
    ]
  },
  {
    category: "Burgers & Snacks",
    items: [
      { name: "Burger", price: 50, description: "Classic vegetable burger", searchTerms: "burger veg burger vegetable burger aloo tikki burger" },
      { name: "Cheese Slice Burger", price: 80, description: "Burger with cheese slice", searchTerms: "cheese burger cheese slice burger cheeseburger" },
      { name: "Paneer Burger", price: 70, description: "Cottage cheese burger", searchTerms: "paneer burger cottage cheese burger veg paneer burger" },
      { name: "Pow Bhaji", price: 80, description: "Spiced vegetable curry with buttered buns", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "pav bhaji pao bhaji pow bhaji mumbai pav bhaji" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Virgin Mojito", price: 80, description: "Refreshing mint and lime mocktail", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", searchTerms: "virgin mojito lime mojito mint mojito lemon mint drink" },
      { name: "Blue Lagoon Mojito", price: 100, description: "Blue curacao flavored mojito", searchTerms: "blue lagoon mojito blue mojito special mojito" }
    ]
  }
];


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = menuItems.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.searchTerms && item.searchTerms.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  
  return (
    <div className="min-h-screen bg-[#fdf6e9]">
      {/* Hero Section */}
      <div className="bg-[#fdf6e9] py-4">
        <div className="text-center">
          <h1 className="text-5xl font-cursive mb-2" style={{ color: '#FFA500' }}>Balaji Restaurant</h1>
          <div className="flex items-center justify-center mb-2">
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search menu..."
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-[#4a6741] focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <BiSearch className="absolute left-3 top-2.5 text-[#4a6741]" size={20} />
        </div>

        <div className="mt-8">
          {filteredMenu.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#4a6741] border-b-2 border-[#4a6741] pb-2">
                {category.category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {item.image && (
                      <div className="h-48 mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium text-[#4a6741]">{item.name}</h3>
                      <span className="text-lg font-semibold text-[#FFA500]">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;