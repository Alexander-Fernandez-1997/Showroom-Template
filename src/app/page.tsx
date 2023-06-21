import { simpleFetch } from "../utils/simpleFetch";

export default async function Home() {
  const clothesJson = await simpleFetch("clothes/limit");
  // const categoriesJson = await simpleFetch("categories");
  // const storeJson = await simpleFetch("store");
  return (
    <>
      <h1>Hola mundo</h1>
      <pre>{JSON.stringify(clothesJson, null, 2)}</pre>
      {/* <pre>{JSON.stringify(categoriesJson, null, 2)}</pre>
      <pre>{JSON.stringify(storeJson, null, 2)}</pre> */}
    </>
  );
}
