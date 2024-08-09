const { executeQuery } = require('../services/db');

exports.getSample = async (req, res) => {
    try {
        const query = `SELECT MAPHIEU, DATEDIFF(SECOND, '1970-01-01', GGIAODICH) AS UnixTimestamp FROM XULYYC WHERE GGIAODICH IS NOT NULL`;
        const result = await executeQuery(query);
        let sub = maxNumberStartingWith(result.recordsets[0], '1')
        let ret = maxNumberStartingWith(result.recordsets[0], '2')
        res.json({ submit: sub.MAPHIEU, submitTime: sub.UnixTimestamp * 1000, return: ret.MAPHIEU, returnTime: ret.UnixTimestamp * 1000 });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};


exports.postRegister = async (req, res) => {
    try {
        const query = `select MAPHIEU, STT from XULYYC`;
        const result = await executeQuery(query);
        const records = result.recordsets[0];
        const num = records[records.length - 1].STT + 1;
        let sub = maxNumberStartingWith(result.recordsets[0], '1')
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const currentDateTime = new Date(now.getTime() - offset).toISOString().replace('T', ' ').substring(0, 23);
        let maphieu = sub.MAPHIEU + 1;
        const query1 = `INSERT INTO YEUCAU(MAPHIEU,MADV,GIOCAP,MATT) VALUES (${maphieu}, ${1}, '${currentDateTime}', 'CHOXL')`;
        const result1 = await executeQuery(query1);
        const query2 = `INSERT INTO XULYYC(STT, MAPHIEU, MANVU, MANVUT, NB,GLAYPHIEU,GDENQUAY,MATT) VALUES (${num}, ${maphieu}, ${1},${1},${0},'${currentDateTime}','${currentDateTime}','CHOXL')`;
        const result2 = await executeQuery(query2);
        res.json({ isSuccess: true, message: "Lấy số thành công, mã phiếu của bạn là: " + maphieu, maphieu: maphieu });
    } catch (err) {
        res.json({ isSuccess: false, message: "Lấy số thất bại" });
    }
}

exports.postRegister2 = async (req, res) => {
    try {
        const query = `select MAPHIEU, STT from XULYYC`;
        const result = await executeQuery(query);
        const records = result.recordsets[0];
        const num = records[records.length - 1].STT + 1;
        let sub = maxNumberStartingWith(result.recordsets[0], '2')
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const currentDateTime = new Date(now.getTime() - offset).toISOString().replace('T', ' ').substring(0, 23);
        let maphieu = sub.MAPHIEU + 1;
        const query1 = `INSERT INTO YEUCAU(MAPHIEU,MADV,GIOCAP,MATT) VALUES (${maphieu}, ${2}, '${currentDateTime}', 'CHOXL')`;
        const result1 = await executeQuery(query1);
        const query2 = `INSERT INTO XULYYC(STT, MAPHIEU, MANVU, MANVUT, NB,GLAYPHIEU,GDENQUAY,MATT) VALUES (${num}, ${maphieu}, ${2},${2},${0},'${currentDateTime}','${currentDateTime}','CHOXL')`;
        const result2 = await executeQuery(query2);
        res.json({ isSuccess: true, message: "Lấy số thành công, mã phiếu của bạn là: " + maphieu, maphieu: maphieu });
    } catch (err) {
        res.json({ isSuccess: false, message: "Lấy số thất bại" });
    }
}

function maxNumberStartingWith(result, startChar) {
    // Convert the start character to a string (in case it's not already)
    startChar = String(startChar);

    // Filter the list to include only numbers that start with the specified character
    const filteredNumbers = result.filter(num => String(num.MAPHIEU).startsWith(startChar));

    // Find and return the maximum number from the filtered list
    if (filteredNumbers.length > 0) {
        return filteredNumbers[filteredNumbers.length - 1];
    } else {
        return null;  // Return null if no numbers start with the specified character
    }
}