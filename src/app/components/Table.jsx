import React from "react";

const Table = ({ headers, data }) => {
  return (
    <div className="w-full px-10 overflow-x-hidden">
      <div className=" relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {item.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
