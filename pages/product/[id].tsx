import {GetStaticPaths,GetStaticProps} from 'next';
import { getAllProductsForHome, getOtherProduct, getProduct } from '../../lib/api';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';
import Image from 'next/image';
import ProductSection from '../../Components/ProductSection';


const productPage = ({TheProduct, OtherProducts} : any) => {
    const description = documentToHtmlString(TheProduct[0]?.description?.json)

    return (
        <div className=" mt-20 ">
                  <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative ">
                    <Image src={TheProduct[0]?.productImage.url} className="w-full relative z-10" alt={TheProduct[0]?.title} layout='responsive' priority={true} width={TheProduct[0]?.productImage?.width} height={TheProduct[0]?.productImage?.height}  />
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5"><span>{TheProduct[0]?.brand}</span><br/>{TheProduct[0]?.title}</h1>
                    <h2 className="font-bold uppercase text-xl" >Product Details</h2>
                    <div className="text-sm mt-2">{parse(description)}</div>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{TheProduct[0]?.price}</span>
                        <span className="text-2xl leading-none align-baseline">.00</span>
                    </div>
                    <div className="inline-block align-bottom">
                        <button
                         className=" snipcart-add-item bg-black  hover:opacity-90 text-white hover:text-gray-300 rounded-md px-10 py-2 font-semibold"
                         data-item-id={TheProduct[0]?.title}
                        data-item-price={TheProduct[0]?.price}
                        data-item-url={`/products/${TheProduct[0]?.slug}`}
                        data-item-description={parse(description)}
                        data-item-image={TheProduct[0]?.productImage.url}
                        data-item-name={TheProduct[0]?.title} >
                         

                        <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mt-20">

        <ProductSection products={OtherProducts} title="You Might Also Like" />
    </div>
        </div>
    );
}

export const getStaticPaths:GetStaticPaths = async () => {
        const Products= await getAllProductsForHome() 


    return {
        paths:Products?.map((product : any) => `/product/${product.slug}`) ?? [],
        fallback:false
    }
}
export const getStaticProps:GetStaticProps = async ({params} : any) => {
        const TheProduct = await getProduct(params.id) ?? [];
        const OtherProducts = await getOtherProduct(params.id) ?? [];

    return {
        props:{
            TheProduct,
            OtherProducts
        }
    }
}

export default productPage;