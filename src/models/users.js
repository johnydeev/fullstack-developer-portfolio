import { Schema, models, model } from "mongoose";

const contactsSchema = new Schema({
    
    name: {
        type: String,
        required: true,        
        trim: true,
    },    
    email: {
        type: String,
        required: true,  
        unique: true,      
        trim: true,
    },
    message: {
        type:String,
    }
    
},  {
    timestamps: true,
});

const Contact = models.contact || model('contact', contactsSchema);

export default Contact;