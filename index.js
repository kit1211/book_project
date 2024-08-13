const express = require('express');
const app     = express();
const port    = 3000;

//import route
const bookRoute = require('./routes/bookRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/" , (req, res) => {
    res.json({message: "Hello Book CRUD!"});
});

// เรียกใช้ route
app.use('/books', bookRoute);


app.use((err, req, res, next) => { // middleware ที่ใช้ในการจัดการ error ระหว่างทาง
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    return res.status(statusCode).json({ msg: err.message });
});

app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
});