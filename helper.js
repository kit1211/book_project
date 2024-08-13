function getOffset (currentPage = 1, listPerPage){ // ฟังก์ชันที่รับค่า currentPage และ listPerPage แล้วคำนวณหา offset ของข้อมูล
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRow(row){ // ฟังก์ชันที่รับค่า rows และเช็คว่า rows มีค่าหรือไม่ ถ้าไม่มีค่า จะ return ค่าว่าง ถ้ามีค่าจะ return ค่า rows
    if(!row){
        return [];
    }
    return row;
}


function getBangkokTimeISO() {
    const currentDate = new Date();
    const bangkokOffset = 7 * 60; 
    const localOffset = currentDate.getTimezoneOffset(); 
    const bangkokTimeInMillis = currentDate.getTime() + (bangkokOffset - localOffset) * 60 * 1000;
    const bangkokDate = new Date(bangkokTimeInMillis);
    const isoString = bangkokDate.toISOString().slice(0, 19) + '+07:00';
    return isoString;
}

module.exports = {
    getOffset,
    emptyOrRow,
    getBangkokTimeISO
}