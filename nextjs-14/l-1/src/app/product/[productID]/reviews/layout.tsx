import { ReactNode } from "react"

interface ProductDetailLayoutProps{
    children: ReactNode
}  

const ProductDetailLayout = ( {children}:ProductDetailLayoutProps ) => {
  return (
    <div>
        {children}
        <h2>Features Product</h2>
    </div>
  )
}

export default ProductDetailLayout