import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showOffer?: boolean;
}

export const ProductCard = ({ product, showOffer = false }: ProductCardProps) => {
  const discountPercentage = showOffer ? Math.floor(Math.random() * 30) + 10 : 0;
  const originalPrice = showOffer ? Math.floor(product.price * 1.2) : product.price;
  
  return (
    <Link to={`/product/${product.slug}`} className="group">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden relative">
            <img 
              src={product.images[0]} 
              alt={`${product.name} product image`} 
              className="h-full w-full object-cover transition-transform group-hover:scale-105" 
              loading="lazy" 
            />
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