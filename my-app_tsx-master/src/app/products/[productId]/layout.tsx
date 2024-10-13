import React from 'react'

function ProductLayour({
    children,
}: {
    children: React.ReactNode;
}) {
  return (

   <>

   <h2>this is inner layou</h2>
   { children}
   <h2>this is the footer</h2>
   </>
  )
}

export default ProductLayour
