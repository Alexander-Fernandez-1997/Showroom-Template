import { fetchUrl } from "./fetchUrl";
import storeKey from "./storeKey";

let baseUrl = fetchUrl;
if (typeof window !== "undefined") {
  baseUrl = window.location.origin;
}

const generateOptions = (
  method: string,
  body: string | null = null,
  cache: string | null = null,
  time: string | null = null
) => {
  const headers = {
    "Content-Type": "application/json",
    "store-id": storeKey,
  };

  const options: any = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (cache) {
    options.cache = cache;
  }
  if (time) {
    options.next = { revalidate: time };
  }

  return options;
};

export const staticFetch = async (route) => {
  try {
    const options = generateOptions("GET");
    const data = await fetch(route, options);
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const ssrFetch = async (route) => {
  try {
    const options = generateOptions("GET", null, "no-store");
    const data = await fetch(route, options);
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const isrFetch = async (route, time) => {
  try {
    const options = generateOptions("GET", null, null, time);
    const data = await fetch(route, options);
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const simpleFetch = async (route, type = "static", time = "") => {
  const url = `${baseUrl}/api/${route}`;
  if (type === "static") {
    return await staticFetch(url);
  } else if (type === "ssr") {
    return await ssrFetch(url);
  } else if (type === "isr") {
    return await isrFetch(url, time);
  } else {
    return await staticFetch(url);
  }
};

export const simplePost = async (route: string, body: any) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const options = generateOptions("POST", body, "no-store");
    console.log("options", options);
    const data = await fetch(url, options);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const simplePut = async (route: string, body: any) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const options = generateOptions("PUT", body, "no-store");
    const data = await fetch(url, options);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const simpleDelete = async (route: string) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const options = generateOptions("DELETE", null, "no-store");
    const data = await fetch(url, options);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};
