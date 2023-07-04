import { AccountContainer } from "@/components/account/AccountContainer";

interface Props {
  params: {
    id: string;
  };
}

export default async function Home({ params }: Props) {
  console.log(params.id);

  return (
    <>
      <div className="container mt-5 pt-5">
        <AccountContainer id={params.id}>
          <h1>Profile</h1>
        </AccountContainer>
      </div>
    </>
  );
}
