export const simpleFetch = async (data: string) => {
  const response = await fetch(`http://localhost:3000/api/${data}`);
  return response.json();
};
