import { useQuery } from '@apollo/client';
import { GET_FACILITIES } from '../queries';

function FacilityList( props ) {
  const {tagInput} = props;
  const { loading, error, data } = useQuery(GET_FACILITIES, {
    variables: { tag: tagInput }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
    
  return (
    <div>
      <h2>Facility List</h2>
      <ul class="facilities">
        {data.facilities.map(facility => (
          <li key={facility.locationid}>
            <strong>{facility.Applicant}</strong><br/>
            {facility.FacilityType}<br/>
            {facility.Address}<br/><br/>
            {facility.FoodItems}<br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacilityList;