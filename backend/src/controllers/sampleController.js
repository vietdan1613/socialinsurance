const { executeQuery } = require('../services/db');

exports.getSample = async (req, res) => {
    try {
        const query = 'SELECT MAPHIEU FROM XULYYC';
        const result = await executeQuery(query);
        const row = result.recordsets[0].map(item => item["MAPHIEU"]);
        let sub = maxNumberStartingWith(row, '1')
        let ret = maxNumberStartingWith(row, '2')
        const now = new Date().getTime();
        res.json({ submit: sub, submitTime: now, return: ret, returnTime: now });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};

function maxNumberStartingWith(numbers, startChar) {
    // Convert the start character to a string (in case it's not already)
    startChar = String(startChar);

    // Filter the list to include only numbers that start with the specified character
    const filteredNumbers = numbers.filter(num => String(num).startsWith(startChar));

    // Find and return the maximum number from the filtered list
    if (filteredNumbers.length > 0) {
        return Math.max(...filteredNumbers);
    } else {
        return null;  // Return null if no numbers start with the specified character
    }
}