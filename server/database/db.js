import mongoose from "mongoose";

const Connection = async() =>{
    const URL = 'mongodb+srv://20kuntalnaskar01:VsTNYXB8Pq61li9v@cluster0.6tytq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    //const URL ='mongodb+srv://mcagroupproject:1beFiOWz7KTHfwry@cluster0.buhmmvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    //const URL ='mongodb+srv://mcagroupproject:1beFiOWz7KTHfwry@cluster0.em511.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")

    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection