const { executeQuery } = require('../services/db');

exports.getSample = async (req, res) => {
    try {
        const query = `SELECT MAPHIEU, DATEDIFF(SECOND, '1970-01-01', GGIAODICH) AS UnixTimestamp FROM XULYYC WHERE GGIAODICH IS NOT NULL`;
        const result = await executeQuery(query);
        let sub = maxNumberStartingWith(result.recordsets[0], '1')
        let ret = maxNumberStartingWith(result.recordsets[0], '2')
        res.json({ submit: sub.MAPHIEU, submitTime: sub.UnixTimestamp  * 1000, return: ret.MAPHIEU, returnTime: ret.UnixTimestamp  * 1000 });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};

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