import { CentredContent, CurvedLinkElement, HeadContent, 
  Heading, LinkElement, LinksWrapper, PageWrapper 
} from "~/styles/Home";

const Quran = () => {
  return (
    <CentredContent>
      <HeadContent>
        <Heading>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Heading>
        <LinksWrapper>
          <CurvedLinkElement>Surah</CurvedLinkElement>
          <LinkElement>Juz</LinkElement>
        </LinksWrapper>
      </HeadContent>
    </CentredContent>   
  )
}

export default Quran