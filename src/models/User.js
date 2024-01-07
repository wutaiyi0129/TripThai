import {model,models,Schema} from "mongoose"
import  bcrypt from 'bcrypt'
const UserSchema =new Schema({
    email:{type:String,required:true,uniqle:true},
    password:{type:String,required:true,
    validate: pass =>{
        if(!pass?.length || pass.length<5){
            new Error ('密碼至少需要五個數字或是英文組成')
        }
      
    }
}
},{timestamps:true})
UserSchema.post('validate', function(user){
 const notHashedPassword = user.password
 const salt = bcrypt.genSaltSync(10)
 user.password=bcrypt.hashSync(notHashedPassword,salt) 

})
export const User = models?.User || model('User',UserSchema)