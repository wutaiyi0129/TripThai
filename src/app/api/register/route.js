import {User} from '/Users/tony/Desktop/food-order/src/models/User.js'
import mongoose from "mongoose"
export async function POST(req){
    const body =await req.json()
    mongoose.connect(process.env.MONGO_URL)
    const createdUser=await User.create(body)
    console.log(createdUser)
    return Response.json(createdUser)
 
} 