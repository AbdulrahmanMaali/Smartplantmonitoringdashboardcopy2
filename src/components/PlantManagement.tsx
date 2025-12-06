import { useState } from "react";
import { PlantCard } from "./PlantCard";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import {
  Search,
  Plus,
  Filter,
  Leaf,
  Carrot,
  Flower2,
  TreePine,
  X,
} from "lucide-react";

// Mock plant data
const mockPlants = [
  {
    id: 1,
    name: "Basil Supreme",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1619805640532-21cce5fe542b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNpbCUyMHBsYW50fGVufDF8fHx8MTc2MDkwMjM4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    health: "excellent",
    moisture: 68,
    temperature: 22,
    light: "8500 lux",
    growthStage: "Mature",
  },
  {
    id: 2,
    name: "Cherry Tomato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1657637912205-f23e055b92c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjB0b21hdG8lMjBwbGFudHxlbnwxfHx8fDE3NjA5MDIzODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "good",
    moisture: 72,
    temperature: 24,
    light: "9200 lux",
    growthStage: "Flowering",
  },
  {
    id: 3,
    name: "Lavender Blue",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1534974576697-331d2db9c9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnxlbnwxfHx8fDE3NjA4MzQ5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "good",
    moisture: 55,
    temperature: 21,
    light: "7800 lux",
    growthStage: "Mature",
  },
  {
    id: 4,
    name: "Mint Fresh",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1656501020056-1c631268e3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwcGxhbnR8ZW58MXx8fHwxNzYwOTAyMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "excellent",
    moisture: 70,
    temperature: 20,
    light: "8000 lux",
    growthStage: "Growing",
  },
  {
    id: 5,
    name: "Bell Pepper",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1710147717248-72ca4dab644b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVyJTIwcGxhbnR8ZW58MXx8fHwxNzYwOTAyMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "warning",
    moisture: 45,
    temperature: 26,
    light: "10500 lux",
    growthStage: "Flowering",
  },
  {
    id: 6,
    name: "Sunflower Giant",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1662063750260-902358f85d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBwbGFudHxlbnwxfHx8fDE3NjA5MDIzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "good",
    moisture: 62,
    temperature: 23,
    light: "11000 lux",
    growthStage: "Growing",
  },
  {
    id: 7,
    name: "Rosemary",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1702131193140-703fb886b194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlbWFyeSUyMGhlcmJ8ZW58MXx8fHwxNzYwOTAyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "good",
    moisture: 58,
    temperature: 22,
    light: "8200 lux",
    growthStage: "Mature",
  },
  {
    id: 8,
    name: "Lettuce Green",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1687878269800-c92f8d327aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwcGxhbnR8ZW58MXx8fHwxNzYwOTAyMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "excellent",
    moisture: 75,
    temperature: 19,
    light: "7500 lux",
    growthStage: "Harvest Ready",
  },
  {
    id: 9,
    name: "Orchid Pink",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBmbG93ZXJ8ZW58MXx8fHwxNzYwODk1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: "critical",
    moisture: 38,
    temperature: 18,
    light: "6500 lux",
    growthStage: "Mature",
  },
];

const categories = [
  { name: "All Plants", icon: Leaf, count: 9 },
  { name: "Herbs", icon: Leaf, count: 3 },
  { name: "Vegetables", icon: Carrot, count: 3 },
  { name: "Flowers", icon: Flower2, count: 3 },
];

const healthFilters = ["All", "Excellent", "Good", "Warning", "Critical"];
const growthStages = ["All", "Growing", "Flowering", "Mature", "Harvest Ready"];

export function PlantManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Plants");
  const [selectedHealth, setSelectedHealth] = useState("All");
  const [selectedGrowth, setSelectedGrowth] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPlants = mockPlants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Plants" || plant.category === selectedCategory;
    const matchesHealth = selectedHealth === "All" || plant.health === selectedHealth.toLowerCase();
    const matchesGrowth = selectedGrowth === "All" || plant.growthStage === selectedGrowth;
    return matchesSearch && matchesCategory && matchesHealth && matchesGrowth;
  });

  const handleViewDetails = (plant) => {
    console.log("View details:", plant);
  };

  const handleEdit = (plant) => {
    console.log("Edit plant:", plant);
  };

  const handleAddPlant = () => {
    console.log("Add new plant");
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="glass-card border-white/10 p-4 sticky top-6">
              <h2 className="text-lg text-white/90 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-emerald-500/20 border border-emerald-400/30"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-5 w-5 ${
                            selectedCategory === category.name
                              ? "text-emerald-400"
                              : "text-white/60"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            selectedCategory === category.name
                              ? "text-emerald-300"
                              : "text-white/80"
                          }`}
                        >
                          {category.name}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-sm bg-white/10 text-white/80"
                      >
                        {category.count}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="glass-card p-6 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Agridome
                  </h1>
                  <p className="text-white/60 mt-1">Plant Management System</p>
                </div>
                <Badge variant="secondary" className="backdrop-blur-sm bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                  {filteredPlants.length} Plants
                </Badge>
              </div>

              {/* Search and Filters */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      placeholder="Search plants..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 glass border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-white/30"
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>

                {/* Filter Pills */}
                {showFilters && (
                  <Card className="glass border-white/10 p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-white/60 mb-2 block">
                          Health Status
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {healthFilters.map((filter) => (
                            <Badge
                              key={filter}
                              variant={selectedHealth === filter ? "default" : "outline"}
                              className={`cursor-pointer transition-all duration-300 ${
                                selectedHealth === filter
                                  ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                                  : "border-white/20 hover:border-white/30 text-white/70"
                              } backdrop-blur-sm`}
                              onClick={() => setSelectedHealth(filter)}
                            >
                              {filter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-white/60 mb-2 block">
                          Growth Stage
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {growthStages.map((stage) => (
                            <Badge
                              key={stage}
                              variant={selectedGrowth === stage ? "default" : "outline"}
                              className={`cursor-pointer transition-all duration-300 ${
                                selectedGrowth === stage
                                  ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                                  : "border-white/20 hover:border-white/30 text-white/70"
                              } backdrop-blur-sm`}
                              onClick={() => setSelectedGrowth(stage)}
                            >
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedHealth("All");
                          setSelectedGrowth("All");
                        }}
                        className="glass border-white/20 hover:border-white/30 text-white/80 backdrop-blur-sm"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear Filters
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {/* Plant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onViewDetails={handleViewDetails}
                  onEdit={handleEdit}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredPlants.length === 0 && (
              <div className="glass-card border-white/10 p-12 text-center">
                <Leaf className="h-16 w-16 text-white/20 mx-auto mb-4" />
                <h3 className="text-xl text-white/70 mb-2">No plants found</h3>
                <p className="text-white/50">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Floating Add Button */}
        <button
          onClick={handleAddPlant}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
          style={{
            boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
          }}
        >
          <Plus className="h-6 w-6 text-white" />
          <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full group-hover:bg-emerald-400/30 transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
}
