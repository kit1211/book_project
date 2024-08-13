const express = require('express');
const app     = express();
const port    = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/" , (req, res) => {
    res.json({message: "Hello Book CRUD!"});
});

app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
});