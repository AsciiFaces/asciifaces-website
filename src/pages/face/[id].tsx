import { useRouter } from "next/router";
import { Card, Container } from "@components/common";

export default function FacePage() {
  const {
    query: { id },
  } = useRouter();

  return (
    <Container>
      <Card>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Faces #{id}</h2>
          <img
            className="shadow-superiority my-6"
            src={`https://dummyimage.com/350x350/000/fff`}
            alt=""
          />
          <h3 className="mb-4">Owned By 0x</h3>
          <button className="bg-mandarin shadow-superiority px-4 py-2 hover:outline-none">
            View on Opensea
          </button>
        </div>
      </Card>
    </Container>
  );
}
