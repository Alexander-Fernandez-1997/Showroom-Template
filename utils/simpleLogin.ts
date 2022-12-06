export interface User {
  email: string;
  password: string;
  store_id: number;
}

const simpleLogin = async (client: User, url: string) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client }),
    });
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default simpleLogin;
