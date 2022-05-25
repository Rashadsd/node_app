const { Router } = require('express')
const { getUsers, addNewUser, deleteUser } = require('../controllers/users-controller')

const router = Router()

router.get('/', getUsers)
router.post('/add', addNewUser)
router.delete('/:id', deleteUser)


module.exports = router