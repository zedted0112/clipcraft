const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//load environmnet variables
dotenv.config();

//create express app
const app = express();
const PORT=process.env.PORT || 5050;

//middleware
app.use(cors());
app.use(express.json());

// health check
const healthRoutes = require('./routes/healthRoutes');
app.use('/api', healthRoutes);;

//ROUTES
const shortsRoutes= require('./routes/shortsRoutes');
app.use('/api',shortsRoutes);
//Test routes


app.get('/',(req,res) =>{
    res.send("backend is alive");
});

//start server

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})