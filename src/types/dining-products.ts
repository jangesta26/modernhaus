export type DiningProductsProps = {
      id: number,
      name: string,
      price: number,
      image: string,
      category: string,
      rating: number,
      isNew: boolean,
      style: string,
      material: string
};

export type DiningCollectionProps = {
      id: number,
      name: string,
      image: string,
      startingPrice: number
};

export type DiningInspirationProps = {
      id: number,
      title: string,
      image: string,
      description: string
};