import { Product } from './product';
import { User } from './user';

export class Cart {
  cartId: number | undefined;
  quantity: number | undefined;
  addedProduct: Product[] | undefined;
  user: User | undefined;
}
