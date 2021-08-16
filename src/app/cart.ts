import { Product } from './product';
import { User } from './user';

export class Cart {
  cart_id: number = 0;
  addedProduct: Product[] | undefined;
  user: User | undefined;
}
