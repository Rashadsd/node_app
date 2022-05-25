const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
//const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
const analyticsRoutes = require('./ROUTES/analytics')
const authRoutes = require('./ROUTES/auth')
const categoryRoutes = require('./ROUTES/category')
const orderRoutes = require('./ROUTES/order')
const positionRoutes = require('./ROUTES/position')


dotenv.config({ path: 'conf.env' });
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);



const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL


async function startApp() {
    try {
        await mongoose.connect(DB_URL)

        app.listen(PORT, () => {
            console.log('Server running on port ' + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();

//app.use(passport.initialize())

