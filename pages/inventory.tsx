import { useRouter } from "next/router";
import { Card, Container, Face } from "@components/common";

export default function FacePage() {
  const faceIds = [...Array(8).keys()].map((id) => id + 1);

  return (
    <Container>
      <Card>
        <div className="flex justify-between mb-6">
          <h3 className="font-bold">Inventory</h3>
          <h3 className="font-bold">10 Faces</h3>
        </div>

        <div className="w-full">
          <div className="w-full grid grid-cols-5 gap-4">
            {faceIds.map((id) => (
              <Face id={id} key={id} />
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
}
