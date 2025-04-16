import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

// Menu data
const menuItems = [
  {
    category: "Specials",
    items: [
      { 
        name: "Samosa", 
        price: 20, 
        description: "Crispy pastry filled with spiced potatoes and peas", 
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
        searchTerms: "samosa smosa somosa samose punjabi samosa aloo samosa tea snack fried" 
      },
      { 
        name: "Kachori", 
        price: 40, 
        description: "Deep-fried spicy snack filled with lentils", 
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
        searchTerms: "kachori kachodi khasta kachori dal kachori pyaz kachori fried snack" 
      },
      { 
        name: "Khasta", 
        price: 40, 
        description: "Flaky and crispy pastry with spiced filling", 
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC08208-1300x731.jpg?v=1699513010", // Added image
        searchTerms: "khasta kasta khasta kachori crispy kachori mathri snack flaky" 
      },
      { 
        name: "Paper Dosa", 
        price: 50, 
        description: "Thin and crispy rice crepe", 
        image: "https://www.yummyfoodrecipes.com/resources/picture/org/Crispy-Paper-Dosa.jpg", 
        searchTerms: "paper dosa paper dose plain dosa plain dose crispy dosa south indian" 
      },
      { 
        name: "Masala Dosa", 
        price: 70, 
        description: "Crispy rice crepe filled with spiced potato mixture", 
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg", // Added image
        searchTerms: "masala dosa masala dose potato dosa aloo dosa mysore masala dosa stuffed" 
      },
      { 
        name: "Paneer Dosa", 
        price: 90, 
        description: "Dosa filled with spiced cottage cheese", 
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Added image
        searchTerms: "paneer dosa paneer dose cheese dosa cottage cheese dosa stuffed cheese" 
      }
    ]
  },
  {
    category: "Street Food Favorites",
    items: [
      { 
        name: "Cheela", 
        price: 60, 
        description: "Savory pancake made from gram flour", 
        image: "https://c.ndtvimg.com/2021-01/crhdlpg8_cheela_625x300_05_January_21.jpg", // Added image
        searchTerms: "cheela chilla besan cheela besan chilla pudla puda pancake breakfast" 
      },
      { 
        name: "Paneer Cheela", 
        price: 80, 
        description: "Gram flour pancake with cottage cheese filling", 
        image: "https://aartimadan.com/wp-content/uploads/2020/08/paneer-stuffed-moong-dal-chilla.jpg", // Added image
        searchTerms: "paneer cheela paneer chilla cheese cheela cottage cheese cheela stuffed" 
      },
      { 
        name: "Tikki", 
        price: 50, 
        description: "Spiced potato patties", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kUw_BNJGbFM6PAvwNLKnAjSBspmnAfvqcmmEfwGeeh3SISpAut1v1NX6VVL4Jmbfuhk&usqp=CAU", 
        searchTerms: "tikki tiki aloo tikki potato tikki cutlet street food" 
      },
      { 
        name: "Lachha Tikki", 
        price: 60, 
        description: "Layered crispy potato patties", 
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/10/Laccha-Aloo-TIkki-Chaat-scaled.jpg?v=1634267777", // Added image
        searchTerms: "lachha tikki lacha tikki layered tikki crispy tikki spiral" 
      }
    ]
  },
  {
    category: "Indo-Chinese",
    items: [
      { 
        name: "Chilli Potato", 
        price: 80, 
        description: "Crispy potato strips in spicy sauce", 
        variants: ["Regular: ₹80", "Half: ₹50"], 
        image: "https://img-global.cpcdn.com/recipes/447b31c5dba6b27e/1200x630cq70/photo.jpg", // Added image
        searchTerms: "chilli potato chili potato spicy potato honey chilli potato starter" 
      },
      { 
        name: "Honey Chilli Potato", 
        price: 100, 
        description: "Crispy potatoes in sweet and spicy sauce", 
        variants: ["Regular: ₹100", "Half: ₹60"], 
        image: "https://static.toiimg.com/thumb/52532656.cms?width=1200&height=900", 
        searchTerms: "honey chilli potato honey chili potato sweet chilli potato chinese" 
      },
      { 
        name: "Chowmein", 
        price: 60, 
        description: "Stir-fried noodles with vegetables", 
        variants: ["Regular: ₹60", "Half: ₹40"], 
        image: "https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&", // Added image
        searchTerms: "chowmein chaumein noodles veg chowmein chinese noodles hakka" 
      },
      { 
        name: "Paneer Chowmein", 
        price: 90, 
        description: "Noodles with cottage cheese", 
        variants: ["Regular: ₹90", "Half: ₹50"], 
        image: "https://i.ytimg.com/vi/rcR1owkn9s8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAh_o6hARjTNSC26V6L6DRM_8zZQ", // Added image
        searchTerms: "paneer chowmein cheese chowmein paneer noodles veg chinese" 
      }
    ]
  },
  {
    category: "Burgers & Snacks",
    items: [
      { 
        name: "Burger", 
        price: 50, 
        description: "Classic vegetable burger", 
        image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg", // Added image
        searchTerms: "burger veg burger vegetable burger aloo tikki burger fast food" 
      },
      { 
        name: "Cheese Slice Burger", 
        price: 80, 
        description: "Burger with cheese slice", 
        image: "https://news.cgtn.com/news/77496a4d33597a6333566d54/img/5ebf85b9-9e5f-4121-a02a-d3cf5699960b.jpg", 
        searchTerms: "cheese burger cheese slice burger cheeseburger american burger" 
      },
      { 
        name: "Paneer Burger", 
        price: 70, 
        description: "Cottage cheese burger", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQyGzYxppJuITXLPqPgwqGkx_jmnYghJtYA&s", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Pow Bhaji", 
        price: 80, 
        description: "Spiced vegetable curry with buttered buns", 
        image: "https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900", 
        searchTerms: "pav bhaji pao bhaji pow bhaji mumbai pav bhaji spicy curry" 
      },
      { 
        name: "Chole Bhature", 
        price: 60, 
        description: "Cottage cheese burger", 
        image: "https://i.ytimg.com/vi/wAv-mFU7eus/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4QzhyIzsn3bEMvu2NXaXRKS7qgg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Chole Chawal", 
        price: 50, 
        description: "Cottage cheese burger", 
        image: "https://भारतीयउत्पादन.com/wp-content/uploads/2020/11/chole-chawal.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Plane Maggie", 
        price: 60, 
        description: "Cottage cheese burger", 
        image: "https://thumbs.dreamstime.com/b/maggie-noodles-instant-served-bowl-over-rustic-wooden-background-selective-focus-224001458.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Veg Maggie", 
        price: 80, 
        description: "Cottage cheese burger", 
        image: "https://images.raasakarts.com/insecure/fit/1000/1000/ce/0/plain/https://rasakart-assets.s3.ap-south-1.amazonaws.com/3fa229/prods/DhrV9EcjXVmTTlwDsoHKFIRR7KzWKPhG40s1SS7B.png@webp", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "French Fries", 
        price: 80, 
        description: "Cottage cheese burger", 
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Peri Peri French Fries", 
        price: 100, 
        description: "Cottage cheese burger", 
        image: "https://cookingwithparita.com/wp-content/uploads/2022/10/image-of-baked-crispy-peri-peri-fries-recipe-2.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Steam Momos", 
        price: 70, 
        description: "Cottage cheese burger", 
        image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Fried Momos", 
        price: 90, 
        description: "Cottage cheese burger", 
        image: "https://salasdaily.com/cdn/shop/products/chicken_fried_momos.webp?v=1667534046", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Chilli Momos", 
        price: 120, 
        description: "Cottage cheese burger", 
        image: "https://i.ytimg.com/vi/tpsQksHbtAI/maxresdefault.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },
      { 
        name: "Chilli Paneer", 
        price: 120, 
        description: "Cottage cheese burger", 
        image: "https://www.cookwithmanali.com/wp-content/uploads/2016/01/Chilli-Paneer-Restaurant-Style-500x500.jpg", // Added image
        searchTerms: "paneer burger cottage cheese burger veg paneer burger grilled" 
      },

    ]
  },
  {
    category: "Beverages",
    items: [
      { 
        name: "Virgin Mojito", 
        price: 80, 
        description: "Refreshing mint and lime mocktail", 
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80", 
        searchTerms: "virgin mojito lime mojito mint mojito lemon mint drink summer cool" 
      },
      { 
        name: "Blue Lagoon Mojito", 
        price: 100, 
        description: "Blue curacao flavored mojito", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0QAT645fifw_1o45H2zBa980BWIRNk3ydQ&s", // Added image
        searchTerms: "blue lagoon mojito blue mojito special mojito cocktail mocktail tropical" 
      }
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
