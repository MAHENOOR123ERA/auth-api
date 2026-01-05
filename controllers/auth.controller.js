const users = require("../data/users");
const authschema = require("../validators/auth.validator");

const register = (req, res)=> {
    const {error}= authschema.validate(req.body);
    if (error){
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    const { email,password}= req.body;

    const existingUser = users.find(user => user.email === email);

    if(existingUser){
        return res.status(409).json({
            message: "Email already exists"
        });
    }

    users.push({email,password });

    res.status(201).json({
        message: "user registered suessfully"
    });
};

const login = (req, res) => {
    const user = users.find(
        user => user.email === email && user.password === password
    );
    if (!user) {
        return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.json({
    message: "Login successful"
  });
};

module.exports = { register, login };
