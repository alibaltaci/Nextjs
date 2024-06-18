import { cookies } from "next/headers"

const AboutPage = () => {

  const cookieStore = cookies()
  const theme = cookieStore.get("theme")
  console.log(theme) 

  console.log( "About server components" )

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage