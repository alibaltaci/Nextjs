import { ReactNode } from "react"

interface ProductDetailLayoutProps{
    children: ReactNode
}  

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count)
}

const ProductDetailLayout = ( {children}:ProductDetailLayoutProps ) => {

  const random = getRandomInt(2)

  if( random === 1){
    throw new Error("Error loading product")
  }

  return (
    <div>
        {children}
        <h2>Features Product</h2>
    </div>
  )
}

export default ProductDetailLayout