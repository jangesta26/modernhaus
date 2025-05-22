import { CartItem } from "@/types/cartItem";
import { CatergoryItems } from "@/types/categories";
import { FeaturedProducts } from "@/types/featured-products";
import { HeroSlides } from "@/types/heroSlides";
import { ValueProps } from "@/types/value-propositions";

export const fetchCartItems = async (): Promise<CartItem[]> => {
  try {
    const res = await fetch('/api/cart');

    if (!res.ok) {
      throw new Error('Failed to fetch cart items');
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchCartItems:', error);
    throw error;
  }
};



export const fetchHeroSlides = async (): Promise<HeroSlides[]> => {
  try {
    const res = await fetch('/api/hero-slides');

    if (!res.ok) {
      throw new Error('Failed to fetch hero-slides');
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchHeroSlides:', error);
    throw error;
  }
};



export const fetchCategoryItems = async (): Promise<CatergoryItems[]> => {
  try {
    const res = await fetch('/api/categories');

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchCategories:', error);
    throw error;
  }
};


export const fetchFeaturedProducts = async (): Promise<FeaturedProducts[]> => {
  try {
    const res = await fetch('/api/featured-products');

    if (!res.ok) {
      throw new Error('Failed to fetch featured-products');
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchFeaturedProducts:', error);
    throw error;
  }
};


export const fetchValuePropositions = async (): Promise<ValueProps[]> => {
  try {
    const res = await fetch('/api/value-propositions');

    if (!res.ok) {
      throw new Error('Failed to fetch value-propositions');
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchValuePropositions:', error);
    throw error;
  }
};