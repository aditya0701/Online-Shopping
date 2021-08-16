import { Product } from './product';
import { User } from './user';

export class Cart {
  cartId: number=0;
  quantity: number | undefined;
  addedProduct: Product[] | undefined;
  user: User | undefined;
}
