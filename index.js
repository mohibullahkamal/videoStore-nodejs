const Joi = require('joi');
const express = require('express');
const app = express();


const courses = [
    { id: 1, name: 'animation' },
    { id: 2, name: 'crime' },
    { id: 3, name: 'documentary' },
    { id: 4, name: 'drama' },
    { id: 5, name: 'horror' },
];


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});













// PORT - it is unlikely that our hosting port will be 3000... therefore to set it dynamically we use this process.env method... 
const port = process.env.PORT || 3000;
app.listen(port, () => {   // we set a listener... 
    console.log(`Listening on PORT ${port}...`);
});
// module.exports = server;