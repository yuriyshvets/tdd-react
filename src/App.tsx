import './App.sass';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import { getProducts, Product } from './services/products.ts';
import ProductForm from './components/ProductForm/ProductForm.tsx';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getProducts();

      setProducts(data);
      if (error) setError('');
    } catch (_err) {
      setError('Cannot fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void getData();
  }, []);
  return (
    <div className="app">
      <div className="app__bar">
        <div className="app__header">
          <h1>Products</h1>
          {!!products.length && (
            <div className="app__header-counter">{products.length} items</div>
          )}
        </div>

        <ProductForm onSubmit={getData} />
      </div>

      {isLoading && <div className="app__state">Loading...</div>}

      {error && !isLoading && (
        <div className="app__state">
          <div className="app__state-icon">😿</div>
          {error}
        </div>
      )}

      {!error && !isLoading && <Products products={products} />}
    </div>
  );
}

export default App;
