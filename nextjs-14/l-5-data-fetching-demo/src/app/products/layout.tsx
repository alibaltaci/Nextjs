import { ReactNode } from "react"

const Layout = async({children}:{children: ReactNode}) => {

    const productResponse = await fetch("http://localhost:3001/products")
    const products = await productResponse.json()
    console.log({ products })
    return <>{ children }</>
}

export default Layout