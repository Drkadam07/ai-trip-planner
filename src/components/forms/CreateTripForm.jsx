import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import { addDays } from "date-fns";
import { budgetOptions, peopleCountOptions } from "./option";
import { generateTrip } from "../../gemini/generateTrip.js";
import { toast } from "react-toastify";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Button = ({ children, onClick, primary, loading }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
      primary
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    type="button"
  >
    {loading ? "Loading..." : children}
  </button>
);

const Card = ({ children, onClick, active }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg shadow transition-all duration-200 cursor-pointer ${
      active
        ? "bg-blue-100 border-2 border-blue-500"
        : "bg-white hover:shadow-md"
    }`}
  >
    {children}
  </div>
);

const CreateTripForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    dateRange: [new Date(), addDays(new Date(), 3)],
    budget: "",
    peopleCount: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const trip = generateTrip(formData);
      if (trip) {
        console.log(trip);
        toast.success("Trip generated successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in generating trip!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateRangeChange = (item) => {
    const { startDate, endDate } = item.selection;
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 7) {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + 6);
      setFormData((prev) => ({
        ...prev,
        dateRange: [startDate, newEndDate],
      }));
      toast.error("You can only select up to 7 days");
    } else {
      setFormData((prev) => ({
        ...prev,
        dateRange: [startDate, endDate],
      }));
    }
  };

  const handleOptionSelect = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white rounded-xl shadow-lg p-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Create Your Trip
        </h1>

        <div className="space-y-4">
          <TextField
            fullWidth
            label="Trip Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            helperText="Give your adventure a name"
          />

          <TextField
            fullWidth
            label="Destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            variant="outlined"
            helperText="Where are you heading?"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">
            When are you traveling? (Max 7 days)
          </h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <TextField
              label="Start Date"
              value={dayjs(formData.dateRange[0]).format("DD-MM-YYYY")}
              readOnly
              fullWidth
            />
            <TextField
              label="End Date"
              value={dayjs(formData.dateRange[1]).format("DD-MM-YYYY")}
              readOnly
              fullWidth
            />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Select Dates</Button>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">
            What's your budget?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {budgetOptions.map((option) => (
              <Card
                key={option.label}
                onClick={() => handleOptionSelect("budget", option.label)}
                active={formData.budget === option.label}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">
            Who's coming along?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {peopleCountOptions.map((option) => (
              <Card
                key={option.label}
                onClick={() => handleOptionSelect("peopleCount", option.label)}
                active={formData.peopleCount === option.label}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button primary onClick={handleSubmit} loading={loading}>
            Generate Trip
          </Button>
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select Trip Dates (Max 7 days)"
      >
        <div className="max-w-full overflow-x-auto">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => handleDateRangeChange(item)}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: formData.dateRange[0],
                endDate: formData.dateRange[1],
                key: "selection",
              },
            ]}
            minDate={new Date()}
            maxDate={addDays(new Date(), 100)}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => setIsModalOpen(false)}>Confirm Dates</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTripForm;
