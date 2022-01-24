import React from 'react';
import ProductCard from './ProductCard';

export default function ProductSection({products , title } : any) {
  return (
  <>
        <section className="container mx-auto px-4  m-auto" id="products">
            <h2 className=" text-5xl font-bold m-8 text-center " >{title}</h2>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                
                {
                    products.map((product : any) => <ProductCard  key={product.title} items={product}/>)
                    } 

                </div>
            </div>
            </section>
  </>
  );
}
