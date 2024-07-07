// src/app/api/claim/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  // Update the product status in your database here

  res.status(200).json({ success: true });
};
