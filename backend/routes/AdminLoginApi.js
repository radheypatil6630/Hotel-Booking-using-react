const express = require('express');
const router = express.Router();

const {AdminModel} = require('../model')


router.post('/admin_login', async (req, res) => {
    try {
        const { name, password } = req.body;

        const admin = await AdminModel.findOne({ name, password });

        if (admin) {
            res.status(200).json({
                success: true,
                message: "Login Successful"
            })
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

})

module.exports = router;