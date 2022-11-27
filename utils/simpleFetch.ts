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

    const response = await fetch(`http://localhost:3000/api/${data}`, options);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error(error);
  }
};
