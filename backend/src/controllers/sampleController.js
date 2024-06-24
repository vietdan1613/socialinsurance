const { executeQuery } = require('../services/db');

exports.getSample = async (req, res) => {
    try {
        const query = 'SELECT TOP 1 * FROM YEUCAULT ORDER BY MAPHIEU DESC';
        const result = await executeQuery(query);
        const row = result.recordsets[0][0]
        const giocap = row.GIOCAP.getTime()
        const maphieu = row.MAPHIEU
        const now = new Date().getTime();

        res.json({ submit: maphieu, submitTime: giocap, return: '2043', returnTime: now });
    } catch (err) {
        res.json({ message: `${err}` });
    }
};