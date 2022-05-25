const User = require('../models/User')


exports.getUsers = async (req, res) => {
    const users = await User.find()
    res.json({ data: users  })
}


exports.addNewUser = async (req, res) => {
    const { name, age } = req.body
    console.log(req.body)
    await User.create({ username: name, userage: age })

    res.json({ status: 'success', msg: 'User created successfuly' })
    
}


exports.deleteUser = async( req, res ) => {
    const { id } = req.params
    
    await User.findByIdAndDelete(id)
    res.json({ status: 'success', msg: 'User deleted successfully'})
}

