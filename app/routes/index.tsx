import { Outlet } from "@remix-run/react";
import NavBar from "~/components/navlink/NavBar";
import { PageWrapper } from "~/styles/Home";

export default function Index()  {
  return (
    <PageWrapper >
      <NavBar />
      <Outlet />
    </PageWrapper>
  );
}
