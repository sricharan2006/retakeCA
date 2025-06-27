const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.post("/Sign-up", (req, res) => {
    const {username, email, password, dateOfBirth} = req.body;

    if(!username) {
        return res.status(400).json({message: "Username cannot be empty"});
    }
    if(!email) {
        return res.status(400).json({message: "Email cannot be empty"});
    }

    if(!password || password.length<=8 || password.length>16) {
        return res.status(400).json({message: "Password length should be greter than 8 or less than or eqaul to 16"});
    }

    res.json({
        message: "User Signed up",
        user: {username, email, dateOfBirth}
    });
});

app.get("/", (req, res) => {
    res.send("Server is running!!!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})