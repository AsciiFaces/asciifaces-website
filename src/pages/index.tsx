import { Card, Container } from "@components/common";
import { Content } from "@components/home/Content";
import { MintButton } from "@components/home/MintButton";
import { Showcase } from "@components/home/Showcase";

export default function Home() {
  return (
    <Container>
      <Card>
        <h2 className="text-3xl mb-4 font-semibold">
          ~ What is this? ~|◕o◕|~{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
      <Showcase />
      <MintButton />
      <Content />
      <MintButton />
    </Container>
  );
}
