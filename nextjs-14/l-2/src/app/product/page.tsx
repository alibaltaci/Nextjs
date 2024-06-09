import Link from "next/link"

const Product = () => {
  return (
    <div>
        <h1>Product List</h1>
        <h2><Link href="product/1">Product - 1</Link></h2>
        <h2><Link href="product/2">Product - 2</Link></h2>
        <h2><Link href="product/3" replace>Product - 3</Link></h2>
    </div>
  )
}

export default Product