// TicketSearchForm.js
import React from 'react';

const TicketSearchForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md bg-gray-300">
      <h2 className="text-2xl font-semibold mb-4">機票搜尋</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departure">
          出發地
        </label>
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          id="departure"
          placeholder="請輸入出發地"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
          抵達地
        </label>
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          id="destination"
          placeholder="請輸入抵達地"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          日期
        </label>
        <input
          className="w-full border p-2 rounded-md"
          type="date"
          id="date"
          placeholder="請選擇日期"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
          人數
        </label>
        <input
          className="w-full border p-2 rounded-md"
          type="number"
          id="passengers"
          placeholder="請輸入人數"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="directFlight">
          是否直飛
        </label>
        <select className="w-full border p-2 rounded-md" id="directFlight">
          <option value="yes">是</option>
          <option value="no">否</option>
        </select>
      </div>

      <button className="bg-blue-500 text-white p-2 rounded-md w-full">
        搜尋
      </button>
    </div>
  );
};

export default TicketSearchForm;
