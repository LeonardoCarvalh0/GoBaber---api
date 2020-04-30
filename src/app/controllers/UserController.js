import User from '../models/User';

class UserController {
  async store(req, res) {
    const verifyEmail = await User.findOne({
      // verifica se o email informado existe na base de dados
      where: { email: req.body.email },
    });
    if (verifyEmail) {
      // se o email existir entra nesse if
      return res.status(400).json({ error: 'User already exists' });
    }
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
