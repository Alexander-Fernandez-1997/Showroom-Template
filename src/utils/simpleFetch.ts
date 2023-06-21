import { fetchUrl } from "./fetchUrl";
import storeKey from "./storeKey";

export const simpleFetch = async (data: string) => {
  try {
    const options: any = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "store-id": storeKey,
      },
      cache: "no-store",
    };

    let url = fetchUrl;
    if (typeof window !== "undefined") {
      url = window.location.origin;
    }
    const response = await fetch(`${url}/api/${data}`, options);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error(error);
  }
};
