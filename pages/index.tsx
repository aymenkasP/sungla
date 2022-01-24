import Head from 'next/head'
import {getAllProductsForHome} from '../lib/api';
import { GetStaticProps} from 'next'
import { Hero } from '../Components/Hero';
import ProductSection from '../Components/ProductSection';


export default function Home({products } : any) {

  return (
    <div className="">
        <Hero />
        <ProductSection products={products} title="New arrivals" />
    </div>
  )
}




export const getStaticProps: GetStaticProps = async  () => {
    const products = await getAllProductsForHome() ?? null;
  return {
      props:{
        products
      }
  }
}


/* 
export const getStaticPaths = async () => {

  return {
      paths:[],
      fallback:false
  }
} */