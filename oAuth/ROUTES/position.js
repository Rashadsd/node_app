const express = require('express');
const router = express.Router();
const controller = require('../CONTROLLERS/position')

router.get('/:categoryId', controller.getByCategoryId)
router.post('/', controller.create)
router.patch('/:id',controller.remove)
router.delete('/:id', controller.update)
module.exports = router;