import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useCitySearch } from "@/hooks/useCitySearch";

interface SearchBarProps {
  onSearch: (cityOrCoords: string) => void;
  isLoading?: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const {
    data: suggestions = [],
    isFetching,
  } = useCitySearch(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // manual search → city name
      onSearch(query.trim());
      setShowSuggestions(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto relative"
    >
      <div className="glass-input flex items-center gap-3 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-primary/50">
        <MapPin className="w-5 h-5 text-muted-foreground" />

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder="Search for a city..."
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
        />

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Search className="w-5 h-5" />
        </motion.button>
      </div>

      {/* 🔽 Suggestions dropdown */}
      {showSuggestions && query.length >= 2 && (
        <ul className="absolute z-50 mt-2 w-full rounded-xl bg-black/70 backdrop-blur-md border border-white/10 overflow-hidden">
          {isFetching && (
            <li className="px-4 py-2 text-sm text-muted-foreground">
              Searching…
            </li>
          )}

          {suggestions.map((city) => (
            <li
              key={`${city.name}-${city.lat}`}
              className="px-4 py-2 cursor-pointer hover:bg-white/10 text-sm"
              onClick={() => {
                const label = `${city.name}${
                  city.state ? ", " + city.state : ""
                }`;

                setQuery(label);
                setShowSuggestions(false);

                // ✅ FIX: pass structured coords, not "lat,lon"
                onSearch(
                  JSON.stringify({
                    lat: city.lat,
                    lon: city.lon,
                  })
                );
              }}
            >
              <span className="font-medium">{city.name}</span>
              {city.state && `, ${city.state}`} ({city.country})
            </li>
          ))}

          {!isFetching && suggestions.length === 0 && (
            <li className="px-4 py-2 text-sm text-muted-foreground">
              No results found
            </li>
          )}
        </ul>
      )}
    </motion.form>
  );
};

export default SearchBar;

