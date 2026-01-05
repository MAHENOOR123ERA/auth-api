const express =require("express");
const authRoutes = require("./routes/auth.routes");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth API is running");
});


app.use("/" , authRoutes);

const PORT =3000;
app.listen(PORT , ()=> {
    console.log(`server running on port ${PORT}`);
});

