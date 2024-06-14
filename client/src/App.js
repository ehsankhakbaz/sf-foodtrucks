import React from "react";
import FacilityList from './components/FacilityList';
import Tags from './components/Tags';

function App() {

  const queryParameters = new URLSearchParams(window.location.search);
  const tag = queryParameters.get("tag");

  return (
    <div>
      <h1>SF Food Trucks</h1>
      <Tags />
      <FacilityList
        tagInput = {tag}
      />
    </div>
  );
}
export default App;
