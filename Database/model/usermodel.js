import { Schema, model, models } from 'mongoose';

const Userschema = new Schema({
  name: '',
  email: '',
  password: '',
});

const Users = models.user || model('user', Userschema);

export default Users;
