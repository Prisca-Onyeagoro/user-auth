import baseconn from '@/Database/baseconn';
import Users from '@/Database/model/usermodel';
import { hash } from 'bcryptjs';

const HttpHandler = async (req, res) => {
  baseconn().catch((error) =>
    res.status(500).json({ error: 'connection failed' })
  );
  if (req.method === 'POST') {
    if (!req.body)
      return res
        .status(400)
        .json({ message: 'Missing Field, Kindly fill them up' });
    const { name, email, password } = req.body;
    // check if user exits
    const userexits = await Users.findOne({ email });
    if (userexits)
      return res.status(400).json({ message: 'User already exists' });

    //   store the user in  the database
    const createuser = await Users.create({
      name,
      email,
      password: await hash(password, 10),
    });
    return res.status(201).json({ createuser });
  } else {
    res.status(404).json({ message: 'Bad http request' });
  }
};

export default HttpHandler;
