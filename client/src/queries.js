import { gql } from '@apollo/client';

export const GET_FACILITIES = gql`
    query Facility($tag: String) {
        facilities(tag: $tag) {
            locationid
            Applicant
            FacilityType
            Address
            Latitude
            Longitude
            FoodItems
        }
    }
`;