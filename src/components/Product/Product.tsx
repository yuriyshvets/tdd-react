import clsx from 'clsx';
import type { Product } from '../../services/products';
import './Product.sass';

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div
      className={clsx('product', {
        'product--unavailable': !product.available,
      })}
      role="listitem"
    >
      <div className="product__image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className='product__no-image'>No image</div>
        )}

        {!product.available && (
          <div className="product__label">Product is out of stock</div>
        )}
      </div>

      <div className="product__details">
        <h2 className="product__title">{product.name}</h2>

        <div className="product__price">${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
