import React from 'react'

function ProductData( { params} : {

  params: {productId: string}
}) {
  return (
    <div> details about product { params.productId}
      
    </div>
  )
}

export default ProductData
