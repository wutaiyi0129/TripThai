// SearchResults.js
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">搜尋結果</h2>

      {results.map((result, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{result.airline}</h3>
              <p className="text-gray-600">{result.departure} - {result.destination}</p>
            </div>
            <p className="text-blue-500">{result.price}</p>
          </div>
          <div className="mt-2 text-gray-700">
            <p>Departure Time: {result.departureTime}</p>
            <p>Arrival Time: {result.arrivalTime}</p>
            <p>Duration: {result.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
