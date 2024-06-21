const { executeQuery } = require('../services/db');

exports.getSample = async (req, res) => {
    try {
        // const query = 'SELECT * FROM YEUCAULT';
        // const result = await executeQuery(query);
        const now = new Date().getTime();
        res.json({ submit: '1043', submitTime: now, return: '2043', returnTime: now });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};

function getCurrentDateTimeInt() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Concatenate and convert to an integer
    const dateTimeInt = parseInt(`${year}${month}${day}${hours}${minutes}${seconds}`, 10);
    
    return dateTimeInt;
  }