import { Outlet } from "@remix-run/react"
import NavBar from "~/components/navlink/NavBar"
import { PageWrapper } from "~/styles/Home"

function quran() {
  return (
    <PageWrapper>
       <NavBar />
       <Outlet /> 
    </PageWrapper>
  )
}

export default quran