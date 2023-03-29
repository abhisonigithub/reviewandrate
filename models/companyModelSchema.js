const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(

  {
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      default:faise
    },
    city: {
      type: String,
      required: true,
    },
    founded: {
      type: String,
      required: true,  
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    user_id :{
      type:mongoose.Schema.Types.ObjectId,
      ref : 'users'
     },
    comapany_logo:{
        type:string,
    }
  },

);
 companySchema.set('timestamps',true)
 
module.exports = mongoose.model("company", companySchema);