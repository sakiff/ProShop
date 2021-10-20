import bcryptjs from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('1234',10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@example.com',
        password: bcryptjs.hashSync('1234',10)

    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcryptjs.hashSync('1234',10)

    }
    
]

export default users