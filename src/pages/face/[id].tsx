import { Card, Container } from '@components/common';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  return { props: { id } };
};

export default function FacePage({
  id,
}: IParams): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <Container>
      <Card>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Faces #{id}</h2>
          <img
            className="shadow-superiority my-6 bg-black"
            src="https://dummyimage.com/350x350/000/fff"
            height={350}
            width={350}
            alt=""
          />
          <h3 className="mb-4">Owned By 0x</h3>
          <button
            type="button"
            className="bg-mandarin shadow-superiority px-4 py-2 hover:outline-none"
          >
            View on Opensea
          </button>
        </div>
      </Card>
    </Container>
  );
}
