import { ReactNode } from "react"

interface AuthLayoutProps{
    children: ReactNode
}

const AuthLayout = ( {children}:AuthLayoutProps ) => {
  return (
    <div>
        <h2>Inner Layout</h2>
        {children}
    </div>
  )
}

export default AuthLayout