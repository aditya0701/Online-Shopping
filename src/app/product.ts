import { Supplier } from "./supplier";

export class Product {
  prodid: number = 0;
  prodName: string | undefined;
  price: number = 0;
  category: string | undefined;
  description: string | undefined;
  inStock: number | undefined;
  brand: string | undefined;
  url:string|undefined;
  supplier: Supplier = {
    supplier_id: 1,
    supplier_name: 'Prince Logistic',
    phone: '9856325645',
    email: 'pl@gmail.com',
    password: 'admin123',
  };
}
