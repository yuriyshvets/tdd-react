import { Product } from '../../services/products';
import ProductItem from '../Product/Product';
import './Products.sass';

type ProductsProps = {
  products: Product[];
};
const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      {!!products.length ? (
        <div className="products__list" role="list">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="products__no-items">
          <div className="products__no-items-icon">⚠️</div>No items found
        </div>
      )}
    </div>
  );
};

export default Products;
