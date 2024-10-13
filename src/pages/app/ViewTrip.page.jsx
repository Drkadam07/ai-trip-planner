import React from "react";
import { PiMapPinLineFill as MapPin } from "react-icons/pi";
import { SlCalender as Calendar } from "react-icons/sl";
import { FaDollarSign as DollarSign, FaStar as Star } from "react-icons/fa";
import travelPlan from "../../gemini/demoData.json";

const ViewTrip = ({}) => {
  const { destination, dates, budget, hotels, itinerary } =
    travelPlan.travel_plan;

  const openGoogleMaps = (lat, lng) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Trip to {destination}
        </h1>

        {/* Trip Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="mr-2 text-blue-500" />
              <p className="text-lg">
                {dates.start_date} - {dates.end_date}
              </p>
            </div>
            <div className="flex items-center">
              <DollarSign className="mr-2 text-green-500" />
              <p className="text-lg capitalize">{budget} budget</p>
            </div>
          </div>
        </div>

        {/* Hotels */}
        <h2 className="text-2xl font-semibold mb-4">Recommended Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={hotel.image_url}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{hotel.address}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">
                    {hotel.price}
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    openGoogleMaps(
                      hotel.geo_coordinates.latitude,
                      hotel.geo_coordinates.longitude
                    )
                  }
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <h2 className="text-2xl font-semibold mb-4">Your Itinerary</h2>
        {Object.entries(itinerary).map(([day, dayPlan]) => (
          <div key={day} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {day.replace("_", " ")}
            </h3>
            <div className="space-y-6">
              {dayPlan.plan.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex"
                >
                  <img
                    src={activity.image_url}
                    alt={activity.place}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h4 className="text-lg font-semibold mb-2">
                      {activity.place}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {activity.details}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-blue-600 font-semibold">
                        {activity.time}
                      </p>
                      <p className="text-gray-600">
                        Duration: {activity.time_to_travel}
                      </p>
                      <p className="text-green-600 font-semibold">
                        Ticket: {activity.ticket_pricing}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        openGoogleMaps(
                          activity.geo_coordinates.latitude,
                          activity.geo_coordinates.longitude
                        )
                      }
                      className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      View on Map
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTrip;
