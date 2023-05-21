// models/CrimeReport.js
import mongoose, { Schema } from "mongoose";

const crimeReportSchema = new Schema({
  crimeType: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const CrimeReportDispatcher = mongoose.model('CrimeReportDispatcher', crimeReportSchema);

export { CrimeReportDispatcher};
