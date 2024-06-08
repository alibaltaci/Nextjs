
interface ProductDetailProps{
    params:{
        productID: string
    }
}

const ProductDetail = ( { params }:ProductDetailProps ) => {
  return (
    <div>Product Detail - { params.productID } </div>
  )
}

export default ProductDetail