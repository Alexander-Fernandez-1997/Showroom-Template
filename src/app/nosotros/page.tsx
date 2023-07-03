import { simpleFetch } from "utils/simpleFetch";
import { Banner } from "@/components/utils/Banner";
import { AboutContent } from "@/components/about/AboutContent";
import { Faq } from "@/components/about/Faq";

export default async function Home() {
  const { configuration, notes } = await simpleFetch("about", "isr", "60");
  const { aboutBanner, aboutSlogan, aboutHtml } = configuration;

  return (
    <>
      <Banner banner_url={aboutBanner} text={aboutSlogan}></Banner>
      <AboutContent content={aboutHtml}></AboutContent>
      <Faq notes={notes}></Faq>
    </>
  );
}
