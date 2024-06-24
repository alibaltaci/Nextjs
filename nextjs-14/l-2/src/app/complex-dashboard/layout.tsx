import { ReactNode } from "react"

type DashboardLayoutProps = {
    children: ReactNode
    users: ReactNode
    revenue: ReactNode
    notifications: ReactNode
    login: ReactNode
}

const DashboardLayout = ( { children, users, revenue, notifications, login }:DashboardLayoutProps ) => {

  const isLoggedIn = true

  return isLoggedIn ? (
    <>
        <div>{children}</div>
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notifications}</div>
    </>
  ):(
    login
  )
}

export default DashboardLayout