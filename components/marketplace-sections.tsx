import { Star } from 'lucide-react';

export const FeaturedCategories = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center">Featured Categories</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {[
        { name: 'Smart Farming', products: 245, icon: '🤖', color: 'from-blue-500 to-cyan-500' },
        { name: 'Organic Products', products: 189, icon: '🌿', color: 'from-green-500 to-emerald-500' },
        { name: 'Livestock Care', products: 156, icon: '🐄', color: 'from-orange-500 to-red-500' },
        { name: 'Irrigation Systems', products: 134, icon: '💧', color: 'from-cyan-500 to-blue-500' },
      ].map((category, i) => (
        <div key={i} className="glass p-6 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform cursor-pointer">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.color} mx-auto flex items-center justify-center text-white text-3xl`}>
            {category.icon}
          </div>
          <h3 className="font-semibold text-lg">{category.name}</h3>
          <p className="text-foreground/70">{category.products} products</p>
        </div>
      ))}
    </div>
  </div>
);

export const SeasonalOffers = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Seasonal Offers</h2>
    <div className="grid lg:grid-cols-2 gap-8">
      {[
        { title: 'Monsoon Special', discount: '30% OFF', description: 'On all irrigation equipment and waterproof gear', code: 'RAIN30', color: 'from-blue-500/20 to-cyan-500/20' },
        { title: 'Summer Harvest Sale', discount: '25% OFF', description: 'Great deals on harvesting tools and storage solutions', code: 'SUN25', color: 'from-orange-500/20 to-yellow-500/20' },
      ].map((offer, i) => (
        <div key={i} className={`glass p-8 rounded-2xl bg-gradient-to-r ${offer.color} relative overflow-hidden`}>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
            <p className="text-4xl font-bold text-accent mb-2">{offer.discount}</p>
            <p className="text-foreground/70 mb-4">{offer.description}</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-accent text-white rounded-lg font-semibold">Use code: {offer.code}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export const TopBrands = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Top Brands</h2>
    <div className="grid md:grid-cols-6 gap-6">
      {[
        { name: 'AgriTech', logo: '🚜', products: 89 },
        { name: 'GreenLife', logo: '🌱', products: 156 },
        { name: 'FarmPro', logo: '⚒️', products: 134 },
        { name: 'OrganicPlus', logo: '🍃', products: 178 },
        { name: 'HydroGrow', logo: '💧', products: 112 },
        { name: 'CropMaster', logo: '🌾', products: 145 },
      ].map((brand, i) => (
        <div key={i} className="glass p-6 rounded-2xl text-center space-y-3 hover:shadow-lg transition-all cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto flex items-center justify-center text-white text-2xl">
            {brand.logo}
          </div>
          <h3 className="font-semibold">{brand.name}</h3>
          <p className="text-sm text-foreground/70">{brand.products} products</p>
        </div>
      ))}
    </div>
  </div>
);

export const FarmerTestimonials = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center">Success Stories</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { 
          name: 'Rajesh Kumar', 
          farm: 'Kumar Farms, Punjab', 
          story: 'Increased yield by 40% using smart sensors and organic fertilizers from this marketplace.',
          image: '👨‍🌾',
          improvement: '40% Yield Increase'
        },
        { 
          name: 'Sunita Patel', 
          farm: 'Patel Organic Farm, Maharashtra', 
          story: 'The irrigation systems helped reduce water consumption by 60% while improving crop quality.',
          image: '👩‍🌾',
          improvement: '60% Water Saved'
        },
        { 
          name: 'Amit Singh', 
          farm: 'Singh Dairy Farm, Uttar Pradesh', 
          story: 'Livestock products from this platform improved our milk production by 25%.',
          image: '👨‍💼',
          improvement: '25% More Milk'
        },
      ].map((farmer, i) => (
        <div key={i} className="glass p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl">
              {farmer.image}
            </div>
            <div>
              <h3 className="font-semibold">{farmer.name}</h3>
              <p className="text-sm text-foreground/70">{farmer.farm}</p>
            </div>
          </div>
          <p className="text-foreground/70">{farmer.story}</p>
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold text-center">
            {farmer.improvement}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const FarmingTips = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Expert Farming Tips</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { tip: 'Soil Testing', description: 'Test your soil every season for optimal nutrient management', icon: '🧪' },
        { tip: 'Water Management', description: 'Use drip irrigation to save up to 60% water', icon: '💧' },
        { tip: 'Crop Rotation', description: 'Rotate crops to prevent soil depletion and pest buildup', icon: '🔄' },
        { tip: 'Organic Pest Control', description: 'Use neem-based solutions for safe pest management', icon: '🐜' },
      ].map((item, i) => (
        <div key={i} className="glass p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
          <div className="text-3xl mb-2">{item.icon}</div>
          <h3 className="font-semibold">{item.tip}</h3>
          <p className="text-sm text-foreground/70">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export const BulkOrderSection = () => (
  <div className="glass p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-center space-y-6">
    <h2 className="text-3xl font-bold">Bulk Order Benefits</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {[
        { benefit: 'Volume Discount', value: 'Up to 25% OFF', icon: '💰' },
        { benefit: 'Free Shipping', value: 'Orders over $500', icon: '🚚' },
        { benefit: 'Priority Support', value: 'Dedicated Manager', icon: '👨‍💼' },
        { benefit: 'Custom Solutions', value: 'Tailored Products', icon: '⚙️' },
      ].map((item, i) => (
        <div key={i} className="space-y-3">
          <div className="text-3xl">{item.icon}</div>
          <h3 className="font-semibold">{item.benefit}</h3>
          <p className="text-accent font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
    <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all">
      Contact Bulk Sales Team
    </button>
  </div>
);

export const MonthlyDeals = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Deal of the Month</h2>
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="glass p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🔥</div>
          <div>
            <h3 className="text-2xl font-bold">Smart Farming Starter Kit</h3>
            <p className="text-foreground/70">Complete setup for modern farming</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-accent">$499</span>
          <span className="text-lg line-through text-foreground/50">$799</span>
          <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">Save $300</span>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-foreground/70">(128 reviews)</span>
        </div>
      </div>
      
      <div className="glass p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-6xl">💧</div>
          <div>
            <h3 className="text-2xl font-bold">Irrigation System Pro</h3>
            <p className="text-foreground/70">Advanced water management solution</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-accent">$349</span>
          <span className="text-lg line-through text-foreground/50">$499</span>
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">Save $150</span>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-foreground/70">(96 reviews)</span>
        </div>
      </div>
    </div>
  </div>
);