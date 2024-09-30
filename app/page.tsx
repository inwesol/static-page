import { Main, Section, Container } from "@/components/craft";
import AboutUs from "@/components/home-page/about-us";
import Benefit from "@/components/home-page/benefit";
import CTA from "@/components/home-page/cta";
import FAQ from "@/components/home-page/faq";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import ServiceFour from "@/components/home-page/service-four";
import ServiceOne from "@/components/home-page/service-one";
import ServiceThree from "@/components/home-page/service-three";
import ServiceTwo from "@/components/home-page/service-two";
import Testimonials from "@/components/home-page/testimonials";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <AboutUs />
          <ServiceOne />
          <ServiceTwo />
          <ServiceThree />
          <ServiceFour />
          <Benefit />
          {/* <Testimonials /> */}
          <CTA />
          {/* <FAQ /> */}
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
