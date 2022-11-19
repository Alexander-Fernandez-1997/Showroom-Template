export const simpleFetch = async (data: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${data}`);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error(error);
  }
};
