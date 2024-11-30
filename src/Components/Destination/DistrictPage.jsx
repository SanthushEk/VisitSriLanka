import React, { useState } from "react";
import { useParams } from "react-router-dom";
import districtData from "../../Mockdata/DistrictData";

const DistrictPage = () => {
  const { name } = useParams(); // Get the district name from the URL
  const district = districtData[name]; // Fetch data for that district
  const [activeSection, setActiveSection] = useState(null); // State to track active collapsible section

  if (!district) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          District not found!
        </h1>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="p-6 mt-20 font-roboto">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={district.image}
            alt={name}
            className="object-cover w-full h-[550px] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Title, Description, and Collapsible Sections */}
        <div className="lg:w-1/2 w-full">
          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">{name}</h1>
          <p className="text-lg text-gray-600 mb-6">{district.description}</p>

          {/* Collapsible Sections */}
          <div className="border-b border-gray-300">
            <button
              className="w-full text-left text-lg font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleSection("travelTips")}
            >
              Travel Tips
              <span className="float-right">
                {activeSection === "travelTips" ? "▲" : "▼"}
              </span>
            </button>
            {activeSection === "travelTips" && (
              <ul className="p-6 list-disc list-inside bg-white">
                {district.travelTips && district.travelTips.length > 0 ? (
                  district.travelTips.map((tip, index) => (
                    <li key={index} className="text-lg text-gray-600 mb-2">
                      {tip}
                    </li>
                  ))
                ) : (
                  <li className="text-lg text-gray-600">
                    No travel tips listed.
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full text-left text-lg font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleSection("nearbyTrips")}
            >
              Nearby Trips
              <span className="float-right">
                {activeSection === "nearbyTrips" ? "▲" : "▼"}
              </span>
            </button>
            {activeSection === "nearbyTrips" && (
              <ul className="p-6 list-disc list-inside bg-white">
                {district.nearbyDayTrips &&
                district.nearbyDayTrips.length > 0 ? (
                  district.nearbyDayTrips.map((trip, index) => (
                    <li key={index} className="text-lg text-gray-600 mb-2">
                      {trip}
                    </li>
                  ))
                ) : (
                  <li className="text-lg text-gray-600">
                    No nearby trips listed.
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full text-left text-lg font-semibold py-4 px-6 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleSection("activities")}
            >
              Activities
              <span className="float-right">
                {activeSection === "activities" ? "▲" : "▼"}
              </span>
            </button>
            {activeSection === "activities" && (
              <ul className="p-6 list-disc list-inside bg-white">
                {district.activities && district.activities.length > 0 ? (
                  district.activities.map((activity, index) => (
                    <li key={index} className="text-lg text-gray-600 mb-2">
                      {activity}
                    </li>
                  ))
                ) : (
                  <li className="text-lg text-gray-600">
                    No activities listed.
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Best Time to Visit Section */}
          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-gray-800">
              Best Time to Visit
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              {district.bestTimeToVisit}
            </p>
          </div>
        </div>
      </div>

      {/* Famous Places Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Famous Places to Visit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {district.famousPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  overflow-hidden transform transition duration-200 hover:scale-105"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictPage;
