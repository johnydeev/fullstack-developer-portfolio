import { Schema, models, model } from "mongoose";

const contactsSchema = new Schema(
  {
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
    isNewUser: {
      type: Boolean,
      default: true,
    },
    emailAttempts: {
      type: Number,
      default: 0,
    },
    lastAttempt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = models.contact || model("contact", contactsSchema);

export default Contact;
