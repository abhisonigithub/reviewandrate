const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,  
    },
    state: {
      type: String,
      required: true,
    },
   
   // profilePic : String,
   
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    role :{
      type: String,
      default: "User",
    }
  },

);
 userSchema.set('timestamps',true)
 
module.exports = mongoose.model("users", userSchema);