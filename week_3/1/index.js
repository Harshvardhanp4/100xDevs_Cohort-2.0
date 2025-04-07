const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = Number(req.query.kidneyId); // Convert to number

    if (username !== 'harsh' || password !== 'pass') {
        res.status(400).json({ "msg": "something is wrong." });
        return;
    }

    if (kidneyId !== 1 && kidneyId !== 2) {  // Corrected condition
        res.status(400).json({ "msg": "something is wrong." });
        return;
    }

    res.json({
        msg: "Your kidney is fine!"
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
