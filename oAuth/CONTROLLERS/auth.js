const bcrypt = require('bcryptjs');
const User = require('../MODELS/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: 'conf.env' });
const jwtoken = process.env.JWT

module.exports.login = async function(req, res){
    const candidate = await User.findOne({login: req.body.login})
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                login: candidate.login,
                userId: candidate._id,
            }, jwtoken, {expiresIn: 60*60})
            res.status(200).json({ 
                data: {
                    success: true,
                    },
                error: null,
                username: candidate.login
            })
        } else {
            res.status(400).json({
               data: null,
               error: {
                   message: 'Пароль не совпал !!!'
               }
            })
        }
    } else {
        res.status(404).json({
            data: null,
            error: {
                message: 'Пользователь с таким login нету !!!'
            }
        })
    }
}

module.exports.register = async function(req, res){
    const candidate = await User.findOne({login: req.body.login})
    if (candidate) {
        res.status(400).json({
            data: null,
            error: {
                message: 'Пользователь c этим login есть !!!',
            },
        });
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            login: req.body.login,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            //req.redirect('/ts.html')
            res.status(200).json({
                data: {
                    success: true,
                },
                error: null,
            })
        } catch (error) {
            res.status(400).json({
                data: null,
                error: {
                    message: error.message
                },
            })
        }
       
    }
}