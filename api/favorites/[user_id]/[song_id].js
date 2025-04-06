import { removeFavorite } from '../../../../controllers/favoritesController';
import { authenticateToken } from '../../../../middleware/Authencation';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ message: 'Method not allowed' });
  await authenticateToken(req, res, () => removeFavorite(req, res));
}