import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sifat',
    email: 'sifat@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sakirul',
    email: 'sakirul@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
