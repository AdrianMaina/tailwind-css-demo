import React from "react";

function Card({ title, description, image }) {
    return (
      <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  