function getOffset (currentPage = 1, listPerPage){ // ฟังก์ชันที่รับค่า currentPage และ listPerPage แล้วคำนวณหา offset ของข้อมูล
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRow(){ // ฟังก์ชันที่รับค่า rows และเช็คว่า rows มีค่าหรือไม่ ถ้าไม่มีค่า จะ return ค่าว่าง ถ้ามีค่าจะ return ค่า rows
    if(!rows){
        return [];
    }
    return rows;
}

module.exports = {
    getOffset,
    emptyOrRow
}