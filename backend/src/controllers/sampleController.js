const { executeQuery } = require('../services/db');

exports.getTest = async (req, res) => {
    res.json({ message: `update 22/8` });
}

exports.getSample = async (req, res) => {
    try {
        const query = `SELECT MAPHIEU, DATEDIFF(SECOND, '1970-01-01', GGIAODICH) AS UnixTimestamp FROM XULYYC WHERE GGIAODICH IS NOT NULL`;
        const result = await executeQuery(query);
        let sub = maxNumberStartingWith(result.recordsets[0], '1')
        let ret = maxNumberStartingWith(result.recordsets[0], '2')
        res.json({ sttNHS: sub.MAPHIEU, thoiGianNHS: sub.UnixTimestamp * 1000, sttTKQ: ret.MAPHIEU, thoigianTKQ: ret.UnixTimestamp * 1000 });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};

exports.postRegister = async (req, res) => {
    try {
        // check cccd acquired ticket
        const data = req.body;
        const { cccd, datekey, start } = data
        let query = `select * from DATLICHHEN where MANGAYLAYPHIEU = '${datekey}' and CCCD = '${cccd}'`;
        let result = await executeQuery(query);
        let parsedData = result.recordset.map(row => {
            return {
                id: row.ID,
                cccd: row.CCCD,
                maphieu: row.MAPHIEU
            };
        });
        if (parsedData.length > 0) {
            res.json({ isSuccess: false, message: `Bạn đã đặt lịch vào hôm nay. Mã phiếu: ${parsedData[0].maphieu}`, maphieu: parsedData[0].maphieu })
            return
        }

        // get new number
        query = `select MAPHIEU, STT from XULYYC`;
        result = await executeQuery(query);
        const records = result.recordsets[0];
        const num = records[records.length - 1].STT + 1;
        let maphieu = maxNumberStartingWith(result.recordsets[0], start).MAPHIEU + 1
        let currentDateTime = getCurrentDate()

        // update YEUCAU, XULYYC, 
        query = `INSERT INTO YEUCAU(MAPHIEU,MADV,GIOCAP,MATT) VALUES (${maphieu}, ${parseInt(start)}, '${currentDateTime}', 'CHOXL')`;
        await executeQuery(query);
        query = `INSERT INTO XULYYC(STT, MAPHIEU, MANVU, MANVUT, NB,GLAYPHIEU,GDENQUAY,MATT) VALUES (${num}, ${maphieu}, ${1},${1},${0},'${currentDateTime}','${currentDateTime}','CHOXL')`;
        await executeQuery(query);
        query = `insert into DATLICHHEN(CCCD, NGAYLAYPHIEU, MANGAYLAYPHIEU, MAPHIEU) values('${cccd}', '${currentDateTime}', '${datekey}', ${maphieu})`
        await executeQuery(query);
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

function getCurrentDate() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offset).toISOString().replace('T', ' ').substring(0, 23);
}