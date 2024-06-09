"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import "./styles.css"

interface AuthLayoutProps{
    children: ReactNode
}

const NavLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
]

const AuthLayout = ( {children}:AuthLayoutProps ) => {

  const pathname = usePathname()
  return (
    <div>
        {
          NavLinks.map( (link) => {
            const isActive = pathname.startsWith(link.href)
            return <Link key={link.href} href={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} >
              {link.name}
            </Link>
          })
        }
        {children}
    </div>
  )
}

export default AuthLayout