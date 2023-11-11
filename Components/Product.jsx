
import React from 'react'
import Link from "next/link"
import { urlFor } from '../lib/client'

const Product = ({product : {slug, price, image, name}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} className='product-image' width={250} height={250} alt="" />
          <p>{name}</p>
          <p>₹{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product