import { refreshToken } from '../../../controllers/UserController';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  return refreshToken(req, res);
}