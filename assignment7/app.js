const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});

mongoose.connect("mongodb+srv://ratiantapurkar001:ratiantapurkar@cluster0.xbjba.mongodb.net/Stu")

app.get("/", (req, res) => {
    res.send("hello world");
}
);

const stuSchema = new mongoose.Schema({
    name: String,
    ph: Number
});

const Stu = mongoose.model("Stu", stuSchema);

app.get("/stu", async (req, res) => {
        const stu = await Stu.find(); 
        res.json(stu);
})

app.post("/stu", async (req, res) => {
    const stu = new Stu({
        name: req.body.name,
        ph: req.body.ph
    });
    await stu.save();
    res.json(stu);
}
);


