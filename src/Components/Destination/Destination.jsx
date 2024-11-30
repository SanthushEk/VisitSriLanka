import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import SrilankaMap from '../../assets/SrilankaMap.jpg';

const Destination = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Districts grouped by provinces
  const districts = [
    { province: 'Western Province', names: ['Colombo', 'Gampaha', 'Kalutara'] },
    { province: 'Central Province', names: ['Kandy', 'Matale', 'NuwaraEliya'] },
    { province: 'Southern Province', names: ['Galle', 'Matara', 'Hambantota'] },
    { province: 'Northern Province', names: ['Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya', 'Mullaitivu'] },
    { province: 'Eastern Province', names: ['Trincomalee', 'Batticaloa', 'Ampara'] },
    { province: 'North Western Province', names: ['Kurunegala', 'Puttalam'] },
    { province: 'North Central Province', names: ['Anuradhapura', 'Polonnaruwa'] },
    { province: 'Uva Province', names: ['Badulla', 'Monaragala'] },
    { province: 'Sabaragamuwa Province', names: ['Ratnapura', 'Kegalle'] },
  ];

  // Function to handle the district button click and navigate
  const handleDistrictClick = (district) => {
    navigate(`/destination/${district}`); // Navigate to the district page dynamically
  };

  return (
    <div className="flex flex-col lg:flex-row items-center mt-20 lg:items-start gap-6 lg:gap-12 p-6 font-roboto">
      {/* Left Sector: Image */}
      <div className="flex-1">
        <img
          src={SrilankaMap}
          alt="Sri Lanka Map"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Right Sector: Text and Buttons */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500">
          Destinations
        </h1>
        {/* Districts by Province */}
        <div className="mt-6 space-y-8">
          {districts.map((province) => (
            <div key={province.province}>
              {/* Province Name */}
              <h2 className="text-[20px] font-semibold text-yellow-500">
                {province.province}
              </h2>
              <hr className=" border-t-2 border-gray-300 w-3/4" />
              {/* District Buttons */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {province.names.map((district) => (
                  <button
                    key={`${province.province}-${district}`}
                    onClick={() => handleDistrictClick(district)} // Trigger navigation
                    className="px-4 py-2 bg-[#002147] text-white rounded hover:text-yellow-500 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    {district}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
