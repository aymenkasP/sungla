import Image from 'next/image';
import React from 'react';
import Link from 'next/link'


export default function ProductCard({items} : any) {
  return (
    <Link href={`/product/${items.slug}`}> 
    <a href="" className="block">
    <div className="flex justify-center">
      <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> {items.brand} </strong>
    </div>
  
    <Image 

      alt="Trainer Product"
      src={items.productImage.url}
      width={550}
      height={250}

      className="object-cover w-full -mt-3 h-96"
    />
  
    <h5 className="mt-4 text-sm text-black/90">
      {items.title}
    </h5>
  
    <div className="flex items-center justify-between mt-4 font-bold">
      <p className="text-lg">
        ${items.price}.00
      </p>
  
      <p className="text-xs tracking-wide uppercase">
       {items.gender}
      </p>
    </div>
  </a>
  </Link>
  )
}
