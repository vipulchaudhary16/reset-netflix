const router = require('express').Router();
const NetlixItem = require('../models/NetlixItem');

router.delete('/', async (req, res) => {
    try {
        const data = await NetlixItem.findOne({});

        if (data == null || data.length == 0) {
            res.status(409).json({ error: "No Data" });
        } else {
            NetlixItem.deleteMany({}, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                };
                res.json({ message: "All data deleted successfully" });
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;