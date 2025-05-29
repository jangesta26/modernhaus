import { CartItem } from "@/types/cartItem";
import { CatergoryItems } from "@/types/categories";
import { DiningCollectionProps, DiningInspirationProps, DiningProductsProps } from "@/types/dining-products";
import { FeaturedProducts } from "@/types/featured-products";
import { HeroSlides } from "@/types/heroSlides";
import { ValueProps } from "@/types/value-propositions";


async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}


export const fetchCartItems = () => fetchData<CartItem[]>('/api/cart');
export const fetchHeroSlides = () => fetchData<HeroSlides[]>('/api/hero-slides');
export const fetchCategoryItems = () => fetchData<CatergoryItems[]>('/api/categories');
export const fetchFeaturedProducts = () => fetchData<FeaturedProducts[]>('/api/featured-products');
export const fetchValuePropositions = () => fetchData<ValueProps[]>('/api/value-propositions');
export const fetchDiningProducts = () => fetchData<DiningProductsProps[]>('/api/dining-products');
export const fetchDiningCollections = () => fetchData<DiningCollectionProps[]>('/api/dining-collection');
export const fetchDiningInspiration = () => fetchData<DiningInspirationProps[]>('/api/dining-inspiration');