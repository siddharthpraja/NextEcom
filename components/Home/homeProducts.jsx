import React from 'react';
import ProductSlide1 from './ProductSlide1';
import ProductSlide2 from './ProductSlide2';

export default function HomeProduct({ product }) {
  return (
    <div>
      <ProductSlide1 product={product} />
      <ProductSlide2 product={product} />
    </div>
  );
}
