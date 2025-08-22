import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  showOffer?: boolean;
}

export const ProductCard = ({ product, showOffer = false }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const discountPercentage = showOffer ? Math.floor(Math.random() * 30) + 10 : 0;
  const originalPrice = showOffer ? Math.floor(product.price * 1.2) : product.price;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };
  
  return (
    <Link to={`/product/${product.slug}`} className="group">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden relative group">
            <img 
              src={product.images[currentImageIndex]} 
              alt={`${product.name} product image ${currentImageIndex + 1}`} 
              className="h-full w-full object-cover transition-transform group-hover:scale-105" 
              loading="lazy" 
            />
            
            {/* Image navigation arrows - only show if multiple images */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                
                {/* Image dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            
            {showOffer && discountPercentage > 0 && (
              <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>
          <div className="space-y-2 p-4">
            <h3 className="font-medium line-clamp-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                {product.rating} ({product.reviews})
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2">
              <p className="text-primary font-semibold">₹{product.price.toLocaleString()}</p>
              {showOffer && discountPercentage > 0 && (
                <p className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};