import { Banner } from "@/components/utils/Banner";
import { simpleFetch } from "utils/simpleFetch";
import { ContactContent } from "@/components/contact/ContactContent";
import { ContactMap } from "@/components/contact/ContactMap";

export default async function Home() {
  const { configuration, store } = await simpleFetch("contact", "ssr");
  const { contactBanner, contactSlogan } = configuration;

  return (
    <>
      <Banner banner_url={contactBanner} text={contactSlogan}></Banner>
      <ContactContent store={store}></ContactContent>
      <ContactMap address={store}></ContactMap>
    </>
  );
}
