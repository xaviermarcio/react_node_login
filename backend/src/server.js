const express = require('express');
const app = express();
const routes = require('./routes.js');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.get('/',(req,res)=>{
    res.send("Welcome to the API");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    //console.log(`Server is running on port http://192.168.0.209:${PORT}`);
})