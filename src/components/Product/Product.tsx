import type { Product } from '../../services/products';
import './Product.sass';

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  return <div className="product"></div>;
};

export default Product;
