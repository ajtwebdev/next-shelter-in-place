import LayoutJs from "../components/layoutJs";
import {
  Section,
  Container,
  HeroBannerPadding,
} from "../components/layoutComponents";
import Seo from "../components/seo";

export default function Custom404() {
  return (
    <LayoutJs>
      <Seo title="404: Not Found | Project Landscape Ltd." />
      <HeroBannerPadding />
      <HeroBannerPadding />
      <Section>
        <Container>
          <center>
            <h1>We're sorry, the page you are looking for does not exist!</h1>
          </center>
        </Container>
      </Section>
    </LayoutJs>
  );
}
