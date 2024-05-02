const zod  = require("zod");
 

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
  });

  const signinBody = zod.object({
    username:zod.string(),
    password:zod.string()
  });



  module.exports = {
    signinBody,
    signupBody
  }