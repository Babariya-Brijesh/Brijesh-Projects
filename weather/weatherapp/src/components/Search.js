import React from "react";
import { useState } from "react";

import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function Search() {
  const [address, setAddress] = useState();
  const [placeinfo, setPlaceinfo] = useState({
    lat:null,
    lng:null
  });
  console.log("---->",placeinfo);
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    const data = await getLatLng(result[0]);
    console.log("---->",data);
    setAddress(value)
    setPlaceinfo(data)
    //   .then((results) => getLatLng(results[0]))
    //   .then((latLng) => console.log("Success", latLng))
    //   .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
