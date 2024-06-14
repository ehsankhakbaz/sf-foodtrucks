import { Schema, model } from 'mongoose';

const FacilitySchema = new Schema(
    {
        locationid: { type: Number, required: true },
        Applicant: { type: String, required: true },
        FacilityType: { type: String, required: false },
        Address: { type: String, required: false },
        Latitude: { type: Number, required: false },
        Longitude: { type: Number, required: false },
        FoodItems: { type: String, required: false },
    }
);

export default model('Facility', FacilitySchema);