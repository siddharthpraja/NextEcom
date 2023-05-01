import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './responsive';
import Link from 'next/link';

function ProductSlide2({ product }) {
  return (
    <div>
      <Link href={`/products`}>
        <div className="text-center">
          <h1
            className="inline-block text-transparent bg-[linear-gradient(180deg,#ffb6ff,#b344ff)] bg-clip-text text-5xl font-semibold mt-4 mb-[18px] pt-[0.5px];
        -webkit-background-clip: text"
          >
            Male T-Shirt
          </h1>
          <h2 className="text-[#86868b] text-[17px] font-normal tracking-[-0.022em] mb-0 text">
            Best Quatily products as usual
          </h2>
        </div>
        <Carousel showDots={false} responsive={responsive}>
          {product?.map((props) => (
            <div className="mb-5 block rounded-lg border-gray-200 shadow-md p-4">
              <img
                src={props.url}
                alt={props.name}
                className="object-cover h-60 w-96"
              />
              <div className="flex flex-col items-center justify-center p-5">
                <h2 className="text-lg">{props.name}</h2>
                <p className="mb-2">{props.brand}</p>
                <p>{props.price}</p>
                <button
                  className="rounded bg-purple-400 py-2 px-4 shadow outline-none hover:bg-purple-500 active:bg-purple-600"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </Link>
    </div>
  );
}

export default ProductSlide2;
