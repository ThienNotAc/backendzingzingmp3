import { login } from '../../../controllers/UserController';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  return login(req, res);
}