import { AccountContainer } from "@/components/account/AccountContainer";
import { AccountRecentOrders } from "@/components/account/AccountRecentOrders";
import { simpleFetch } from "utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  console.log(params.id);
  const orders = await simpleFetch(`orders/client/${params.id}`, "ssr");

  return (
    <>
      <div className="container mt-5 pt-5">
        <AccountContainer id={params.id}>
          <AccountRecentOrders tittle={"All orders"} orders={orders} />
        </AccountContainer>
      </div>
    </>
  );
}
