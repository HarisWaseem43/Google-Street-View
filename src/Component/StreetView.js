// View 1 with Single Image -------------------------------------------------------------

// import React, { useState } from "react";
// import "./StreetView.css";
// import axios from "axios";

// function StreetView() {
//   const [imageURL, setImageURL] = useState("");
//   const [searchValue, setSearchValue] = useState("");

//   // API request to retrieve the Street View image
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`,
//         {
//           params: {
//             size: "600x400",
//             location: searchValue,
//             // key: "AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8",
//           },
//         }
//       );
//       setImageURL(response.config.url);
//     } catch (error) {
//       console.error("Error fetching Street View image:", error);
//     }
//   };

//   // Render the image
//   return (
//     <div>
//    <div className="Search">
//       <input
//         type="search"
//         placeholder="Search Location"
//         autoFocus
//         id="search"
//         className="searchTerm"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />
//       <button className="searchButton" type="button" onClick={fetchData}>
//         Search
//       </button>
//     </div>
//     <div className="imageContainer">
//       <img className="imageView" src={imageURL} alt="Street View Image" />
//     </div>
//     </div>
//   );
// }

// export default StreetView;

// -------------View 1 Ending ----------------------------------------------------------



// View 2 with 3 Images -----------------------------------------------------------------

// import React, { useState } from "react";
// import "./StreetView.css";
// import axios from "axios";

// function StreetView() {
//   const [imageURLs, setImageURLs] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   // API request to retrieve the Street View images
//   const fetchData = async () => {
//     try {
//       const response1 = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//       );
//       const response2 = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}1&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//       );
//       const response3 = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}2&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//       );

//       setImageURLs([
//         response1.config.url,
//         response2.config.url,
//         response3.config.url,
//       ]);
//     } catch (error) {
//       console.error("Error fetching Street View images:", error);
//     }
//   };

//   // Render the images
//   return (
//     <div>
//       <div className="Search">
//         <input
//           type="search"
//           placeholder="Search Location"
//           autoFocus
//           id="search"
//           className="searchTerm"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//         <button className="searchButton" type="button" onClick={fetchData}>
//           Search
//         </button>
//       </div>
//       <div className="imageContainer">
//         {imageURLs.map((url, index) => (
//           <img className="imageView" key={index} src={url} alt={`Street View ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StreetView;

// ------View 2 Ending -----------------------------------------------------------------------------



// View 3 with 3 different Images ------------------------------------------------------------------

// import React, { useState } from "react";
// import "./StreetView.css";
// import axios from "axios";

// function StreetView() {
//   const [imageURLs, setImageURLs] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   // API request to retrieve the Street View images
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//       );

//       // Generate different search locations
//       const searchLocations = [`${searchValue}1`, `${searchValue}2`, `${searchValue}3`];

//       // Fetch images for each search location
//       const imagePromises = searchLocations.map(async (location) => {
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${location}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//         );
//         return response.config.url;
//       });

//       // Wait for all image promises to resolve
//       const imageURLs = await Promise.all(imagePromises);

//       setImageURLs(imageURLs);
//     } catch (error) {
//       console.error("Error fetching Street View images:", error);
//     }
//   };

//   // Render the images
//   return (
//     <div>
//    <div className="Search">
//       <input
//         type="search"
//         placeholder="Search..."
//         autoFocus
//         id="search"
//         className="searchTerm"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />
//       <button className="searchButton" type="button" onClick={fetchData}>
//         Search
//       </button>
//     </div>
//     <div className="imageContainer">
//       {imageURLs.map((url, index) => (
//         <img className="imageView" key={index} src={url} alt={`Street View ${index + 1}`} />
//       ))}
//     </div>
//     </div>
//   );
//       }

// export default StreetView;

// ------View 3 Ending --------------------------------------------------------------------------



// -------- Street View 4 Starting -------------------------

// import React, { useState } from "react";
// import "./StreetView.css";
// import axios from "axios";

// function StreetView() {
//   const [imageURLs, setImageURLs] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   // API request to retrieve the Street View images
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//       );

//       // Generate different search locations
//       const searchLocations = [searchValue, `${searchValue}1`, `${searchValue}2`];

//       // Fetch unique images for each search location
//       const uniqueImages = new Set();
//       const imagePromises = [];
//       for (let i = 0; i < searchLocations.length; i++) {
//         const location = searchLocations[i];
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${location}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
//         );
//         const imageURL = response.config.url;
//         if (!uniqueImages.has(imageURL)) {
//           uniqueImages.add(imageURL);
//           imagePromises.push(imageURL);
//         }
//         if (imagePromises.length >= 3) {
//           break;
//         }
//       }

//       setImageURLs(imagePromises);
//     } catch (error) {
//       console.error("Error fetching Street View images:", error);
//     }
//   };

//   // Render the images
//   return (
//     <div>
//       <div className="Search">
//         <input
//           type="search"
//           placeholder="Search..."
//           autoFocus
//           id="search"
//           className="searchTerm"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//         <button className="searchButton" type="button" onClick={fetchData}>
//           Search
//         </button>
//       </div>
//       <div className="imageContainer">
//         {imageURLs.map((url, index) => (
//           <img className="imageView" key={index} src={url} alt={`Street View ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StreetView;











import React, { useState } from "react";
import "./StreetView.css";
import axios from "axios";

function StreetView() {
  const [imageURLs, setImageURLs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // API request to retrieve the Street View images
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${searchValue}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
      );

      // Generate different search locations
      const searchLocations = [`${searchValue}1`, `${searchValue}2`, `${searchValue}3`];

      // Fetch up to 3 images for each search location
      const imagePromises = searchLocations.map(async (location) => {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${location}&key=AIzaSyD8lckjetg-0Ojnz7zcs2PLCEEBZzMwsS8`
        );
        return response.config.url;
      });

      // Wait for all image promises to resolve and limit the results to 3 images
      const imageURLs = await Promise.all(imagePromises);
      const limitedImageURLs = imageURLs.slice(0, 3);

      setImageURLs(limitedImageURLs);
    } catch (error) {
      console.error("Error fetching Street View images:", error);
    }
  };

  // Render the images
  return (
    <div>
      <div className="Search">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          id="search"
          className="searchTerm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="searchButton" type="button" onClick={fetchData}>
          Search
        </button>
      </div>
      <div className="imageContainer">
        {imageURLs.map((url, index) => (
          <img className="imageView" key={index} src={url} alt={`Street View ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default StreetView;