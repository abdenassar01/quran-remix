import NavBar from "~/components/navlink/NavBar";
import { CentredContent, PageWrapper, CurvedLinkElement, HeadContent, 
  Heading, LinkElement, LinksWrapper 
} from "~/styles/Home";

export default function Index()  {
  return (
    <PageWrapper >
      <CentredContent>
        <HeadContent>
          <Heading>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Heading>
          <LinksWrapper>
            <CurvedLinkElement>Surah</CurvedLinkElement>
            <LinkElement>Juz</LinkElement>
          </LinksWrapper>
        </HeadContent>
      </CentredContent>   
    </PageWrapper>
  );
}
