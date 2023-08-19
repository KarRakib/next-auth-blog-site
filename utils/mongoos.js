const { default: mongoose } = require("mongoose");

const connectTodb = async () =>{
    try {
        await mongoose.connet(process.env.MONGOOSE_URL)
        console.log('connect database');
    } catch (error) {
        console.log(error);
    }

}
export default connectTodb;