const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node_api_db');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number 
});

const saveInDB = async () => {
    const UsersData = mongoose.model('user_data', userSchema);
    let data = new UsersData({
        name: "max 200",
        email: "m100@test.com",
        mobile: 9999999999
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('user_data', userSchema);
    let data =await  Product.updateOne(
        { name: "max 100" },
        {
            $set: { email: "m100@gmail.com", mobile: 9898989898 }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('user_data', userSchema);
    let data = await Product.deleteOne({name:'max 200'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('user_data', userSchema);
    let data = await Product.find({name:'max 100'})
    console.log(data);
}

findInDB();
