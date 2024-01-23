import { Schema, models, model } from "mongoose";
import usersModel from "@/models/users";

const contactsSchema = new Schema(
    usersModel
);

const Contact = models.contact || model("contact", contactsSchema);

export default Contact;
