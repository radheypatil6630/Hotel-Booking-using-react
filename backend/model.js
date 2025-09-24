    const {
  Schema,
  model
} = require("mongoose");

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    maxlength: 50
  },
  password:{
    type:Number,
    required:true,
  },

});

const AdminModel = model("admin", adminSchema, "admin_login");

module.exports = AdminModel;