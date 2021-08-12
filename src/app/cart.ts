import { Product } from './product';
import { User } from './user';

export class Cart {
  cartId: number | undefined;
  quantity: number | undefined;
  products: Product[] | undefined;
  user: User|undefined;
}
