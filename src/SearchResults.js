import React from "react";
import CostumerRow from "./CostumerRow";
//Each booking will have an id, title, first name, surname,email, room id, check in date and check out date.
const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in</th>
          <th scope="col">check out</th>
        </tr>
      </thead>
      <tbody>
        <CostumerRow />
      </tbody>
    </table>
  );
};
export default SearchResults;
