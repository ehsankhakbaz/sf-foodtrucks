import { Facility } from '../../../db/models/index.js';

const facilityQueries = {
    facilities: async (_, args) => {
        const { tag }  = args
        const facilities = (tag) ? await Facility.find({ "FoodItems": { "$regex": tag, "$options": "i" } }) : await Facility.find();

        return facilities;
      },
    facility: async (_, args) => {
        const facility = await Facility.findById(id);
    
        return facility;
      },
};

export default facilityQueries;