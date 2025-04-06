import { getUser } from '../../../controllers/UserController';
import { authenticateToken } from '../../../middleware/Authencation';

export default async function handler(req, res) {
  await authenticateToken(req, res, () => getUser(req, res));
}
