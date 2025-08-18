import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { categories, brands } from "@/data/products";

export interface FilterState {
  category: string;
  brand: string;
  sortBy: string;
  minPrice: string;
  maxPrice: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  productCount: number;
}

export const ProductFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  productCount 
}: ProductFiltersProps) => {
  const hasActiveFilters = Object.values(filters).some(value => value && value !== "all");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Select value={filters.category} onValueChange={(value) => onFilterChange("category", value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.brand} onValueChange={(value) => onFilterChange("brand", value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.sortBy} onValueChange={(value) => onFilterChange("sortBy", value)}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="name-asc">Name A-Z</SelectItem>
              <SelectItem value="name-desc">Name Z-A</SelectItem>
              <SelectItem value="price-asc">Price Low to High</SelectItem>
              <SelectItem value="price-desc">Price High to Low</SelectItem>
              <SelectItem value="rating-desc">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {productCount} products
          </span>
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={onClearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min price"
          value={filters.minPrice}
          onChange={(e) => onFilterChange("minPrice", e.target.value)}
          className="w-24 rounded-md border px-3 py-1 text-sm"
        />
        <span className="text-muted-foreground">to</span>
        <input
          type="number"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={(e) => onFilterChange("maxPrice", e.target.value)}
          className="w-24 rounded-md border px-3 py-1 text-sm"
        />
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.category && filters.category !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Category: {filters.category}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange("category", "all")}
              />
            </Badge>
          )}
          {filters.brand && filters.brand !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Brand: {filters.brand}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange("brand", "all")}
              />
            </Badge>
          )}
          {filters.minPrice && (
            <Badge variant="secondary" className="gap-1">
              Min: ₹{filters.minPrice}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange("minPrice", "")}
              />
            </Badge>
          )}
          {filters.maxPrice && (
            <Badge variant="secondary" className="gap-1">
              Max: ₹{filters.maxPrice}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange("maxPrice", "")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};