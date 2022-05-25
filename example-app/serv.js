const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

async function load(url) {
    const filepath = path.join(process.cwd(), url);
    const isExists = await fs.promises.access(filepath, fs.constants.F_OK).then(() => true).catch(() => false);
    
    if (!isExists) {
        return {
            data: null,
            contentType: null,
            isExists,
        }
    }
    const data = await fs.promises.readFile(filepath);
    
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
    }[path.extname(filepath)] || 'text/plain';

    return {
        data,
        contentType,
        isExists,
    };
}

app.get('/*', (req, res) => {
     
    const url = req.url.replace(/^\/$/, '/index.html');
    
    load(url).then((result) => {
        const { data, contentType, isExists } = result;
        
        if (!isExists) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.status(404).send('File not found');
        } else {
            res.setHeader('Content-Type', `${contentType}; charset=utf-8`);
            
            res.status(200).send(data);
        }
    });
});

// app.get('/take/:id', (req, res) => {
//     res.send('This is placeholder ' + req.params.id)
// })

app.post('/', (req, res) => {
    
    console.log(req.body);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json({
        status: 'success',
        data: 10,
    })
})


// app.put('/edit', (req, res) => {
//     const {name, speed} = req.body
//     cars = cars.map(el => el.name === name ? ({ ...el, speed }) : el)
//     res.json({ status: 'success' })
// })

// app.delete('/delet', (req, res) => {
//     const {name} = req.body  //
//     cars = cars.filter(el => el.name !== name) 
//     res.json({ status: 'success' })
// })




app.listen(3000, () => {
    console.log('Сервер запущен !!!')
});

