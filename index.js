const express = require("express");
const User = require("./db");
const { JWT_SECRET } = require("./config");
const zod  =  require("zod");
const jwt  = require("jsonwebtoken");
const { signupBody, signinBody } = require("./zod");
const { authMiddleware } = require("./middleware");
const app = express();
app.use(express.json()); 


 
  
app.post("/signup", async function(req, res) {
    const { success } = signupBody.safeParse(req.body);
  
    if (!success) {
      return res.status(411).json({
        message: "Email already taken/incorrect inputs"
      });
   }
  
    const existingUser = await User.findOne({
      username: req.body.username
    });
  
    if (existingUser) {
      return res.status(411).json({
        message: "username already exists"
      });
    }
  
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
  
    const userId = user._id;
    
     
  
    const token = jwt.sign({
      userId
    }, JWT_SECRET);
  
    res.json({
      message: "User created successfully",
      token: token
    });
  });




  
  

  app.post("/signin", async function(req, res) {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "incorrect inputs"
      });
    }
  
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });
    if (user) {
      const token = jwt.sign({
        userid: user._id
      }, JWT_SECRET);
      res.json({
        token: token
      });
      return;
    }
  
    res.status(411).json({
      message: "Error while logging in"
    });
  });



  app.post("/forgot-password", authMiddleware, async function(req, res) {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        return res.status(400).json({
            message: "Please provide both current and new password"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: currentPassword
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found or current password incorrect"
        });
    }

    user.password = newPassword;
    await user.save();

    res.json({
        message: "Password updated successfully"
    });
});


 
  app.listen(3000);

