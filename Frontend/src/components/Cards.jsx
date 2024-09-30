import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border dark:hover:border-pink-500">
          <figure className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain transition-all duration-300"
            />
            <div className="absolute top-2 left-2 px-3 py-1 bg-pink-500 text-white text-xs rounded-full shadow-lg">
              New
            </div>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title flex justify-between items-center">
              {item.name}
              <div className="badge badge-secondary text-xs">{item.category}</div>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{item.title}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline text-lg font-bold">${item.price}</div>
              <div className="cursor-pointer px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
