interface User {
  email: string;
  password: string;
  store_id: number;
}

const simpleLogin = async (client: User) => {
  try {
    const res = await fetch("http://localhost:3000/api/clients", {
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
