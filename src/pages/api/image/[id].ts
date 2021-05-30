import { renderSvg } from '@utils/image';
import { getNftContract } from '@utils/index';
import type { NextApiRequest, NextApiResponse } from 'next';

const contract = getNftContract();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const face = await contract.getFace(id);
    const image = Buffer.from(renderSvg(face));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(image);
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
};
