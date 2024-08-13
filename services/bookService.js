const db        = require('./database');
const helper    = require('../helper');
const config    = require('../config');

async function getMulti(page = 1){ // 
    const offset = helper.getOffset(page, config.listPerPage); // คือ การเรียกใช้ function getOffset ที่อยู่ในไฟล์ helper.js โดยส่งค่า page และ listPerPage ไปด้วยเพื่อคำนวณหา offset ของข้อมูล
    const row = await db.query(`SELECT id, title, author, published_year, genre, rating, created_at, updated_at FROM books LIMIT ${offset}, ${config.listPerPage}`);

    const data = helper.emptyOrRow(row);
    const meta = {page}; // คือการสร้าง object ที่มี key ชื่อ page และมี value เป็นค่าของ page ที่รับมา

    return {
        data,
        meta
    }
}


//create
async function create(book){
    const result = await db.query(
        `INSERT INTO books (title, author, published_year, genre, rating) VALUES (?, ?, ?, ?, ?)`,
        [book.title, book.author, book.published_year, book.genre, book.rating]
    );
    
    let msg = "Error in creating book";
    if(result.affectedRows){
        msg = "Book created successfully";
    }
    return {msg};
}


//update
async function update(id, book){
    const result = await db.query(
        `UPDATE books SET title=?, author=?, published_year=?, genre=?, rating=? WHERE id=?`,
        [book.title, book.author, book.published_year, book.genre, book.rating, id]
    );
    
    let msg = "Error in updating book";
    if(result.affectedRows){
        msg = "Book updated successfully";
    }
    return {msg};
}



//delete
async function remove(id){
    const result = await db.query(
        ``, []
    )
}

module.exports ={
    getMulti, create, update
}

