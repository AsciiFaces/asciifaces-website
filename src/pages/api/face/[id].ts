import { getNftContract } from '@utils/index';
import type { NextApiRequest, NextApiResponse } from 'next';

const contract = getNftContract();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const face = await contract.getFace(id);
    return res.status(200).json({
      name: `ASCII Faces #${id}`,
      description: '',
      image: `http://localhost:3000/image/${id}`,
      attributes: [],
      background_color: '000000',
      face,
    });
  } catch (err) {
    return res.status(404).json({ message: 'token is not exist' });
  }
};
