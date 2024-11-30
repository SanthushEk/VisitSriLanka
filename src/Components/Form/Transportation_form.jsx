import React from "react";
import { useParams } from "react-router-dom";

const RentalForm = () => {
  const { type } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Vehicle rented successfully!`);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 text-center">
        Rent a {type.charAt(0).toUpperCase() + type.slice(1)}
      </h1>
      <form
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
            Rental Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="duration">
            Rental Duration (days)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          Rent Now
        </button>
      </form>
    </div>
  );
};

export default RentalForm;
