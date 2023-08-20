const { Schema, trusted, model } = require("mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        unique :[true , 'Email already exists!'],
        require:[true,'Email is required!']
    },
    username:{
        type:String,
        require:[true,"username is required!"],
        match:[/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "usernam invalid, it should contain 6-20 alphanumeric letters and be unique!"]
    },
    image:{
        type:String
    }
})
const User = model('User',userSchema);
export default User