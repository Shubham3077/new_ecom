import React from 'react'


const HomePage = () => {
  return (
    <>
     {/* <HomeBanner/> */}
      Home Banner
     <div className='products-heading'>
      <h2>Biggest Headphone sale</h2>
      <p>This is the best selling headphone.</p>
     </div>

     <div className='products-container'>
      {
        ["product1", "product2"].map((products) => (
          products
        )) // Array of products
      }
     </div>
    
    Footer
    {/* <Footer/> */}
    </>
  )
}

export default HomePage;