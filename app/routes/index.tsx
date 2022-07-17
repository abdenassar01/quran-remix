import NavBar from "~/components/navlink/NavBar"
import { CentredContent, HeadContent, Heading, PageWrapper } from "~/styles/Home";

export default function Index()  {
  return (
    <PageWrapper >
      <NavBar />
      <CentredContent>
        <HeadContent>
          <Heading>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Heading>
        </HeadContent>
      </CentredContent>   
    </PageWrapper>
  );
}
