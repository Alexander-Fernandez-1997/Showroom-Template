import storeKey from "./storeKey";

export const simpleFetch = async (data: string) => {
  try {
    const options: any = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "store-id": storeKey,
      },
    };

    const url = process.env.APK_URL;
    const response = await fetch(`${url}/api/${data}`, options);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error(error);
  }
};
