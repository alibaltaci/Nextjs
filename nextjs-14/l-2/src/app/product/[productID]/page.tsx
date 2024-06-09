import { Metadata } from "next"

interface ProductDetailProps{
  params:{
      productID: string
  }
}

export const generateMetadata = async({params}:ProductDetailProps): Promise<Metadata> => {
  
  const title = await new Promise(resolve => setTimeout(() => resolve(`iPhone ${params.productID}`), 100))

  return{
    // title: `Product ${params.productID}`
    title: `Product ${ title }`
  }
}

const ProductDetail = ( { params }:ProductDetailProps ) => {
  return (
    <div>Product Detail - { params.productID } </div>
  )
}

export default ProductDetail