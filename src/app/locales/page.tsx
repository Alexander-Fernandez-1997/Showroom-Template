import { simpleFetch } from "utils/simpleFetch";
import { Banner } from "@/components/utils/Banner";
import { LocalesFilter } from "@/components/stores/LocalesFilter";
import { Locales } from "@/components/stores/Locales";

export default async function Home() {
  const { configuration, franchises } = await simpleFetch("franchises", "ssr");
  const names = franchises.map((franchise) => franchise.name);
  const { storeBanner, storeSlogan } = configuration;

  return (
    <>
      <Banner banner_url={storeBanner} text={storeSlogan}></Banner>
      <LocalesFilter names={names}></LocalesFilter>
      <Locales locales={franchises}></Locales>
    </>
  );
}
