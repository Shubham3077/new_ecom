"use client"
import HeroBanner from '../../Components/HeroBanner';
import {client} from "../../lib/client"
import Product from '../../Components/Product'
import FooterBanner from '../../Components/FooterBanner';

export const getProductData = async () => {
  const query = '*[_type == "products"]'
  const product = await client.fetch(query);

  return product;
}

export const getBannerData = async () => {
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  
  return bannerData;
}

const HomePage = async () => {
  const products = await getProductData();

  const banners = await getBannerData();
  console.log(products);

  return (
    <>
    <HeroBanner heroBanner={banners.length && banners[0]}/>

     <div className='products-heading'>
      <h2>Biggest Headphone sale</h2>
      <p>This is the best selling headphone.</p>
     </div>

     <div className='products-container'>
      {products.map((product: any) => <Product key={product._id} product={product} />)}
     </div>
    <FooterBanner footerBanner={banners && banners[0]}/>
    </>
  )
}

export default HomePage;