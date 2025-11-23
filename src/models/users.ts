import { Schema, model, models, Document, Model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  isNewUser?: boolean;
  emailAttempts?: number;
  lastAttempt?: Date;
}

export interface IContactDocument extends IContact, Document { }

const contactSchema = new Schema<IContactDocument>(
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

const Contact =
  (models.Contact as Model<IContactDocument>) ||
  model<IContactDocument>("Contact", contactSchema);

export default Contact;

