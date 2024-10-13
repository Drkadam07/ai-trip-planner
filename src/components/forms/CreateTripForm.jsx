import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import { addDays } from "date-fns";
import { budgetOptions, peopleCountOptions } from "./option";
import { generateTrip } from "../../util/generateTrip";
import { toast } from "react-toastify";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Aceternity UI inspired components
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
    className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
      primary
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    } ${loading && "cursor-progress opacity-50"}`}
  >
    {children}
  </button>
);

const Card = ({ children, onClick, active }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg shadow-md transition-all duration-200 cursor-pointer ${
      active
        ? "bg-blue-100 border-2 border-blue-500"
        : "bg-white hover:shadow-lg"
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
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in generating trip!");
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateRangeChange = (item) => {
    setFormData((prev) => ({
      ...prev,
      dateRange: [item.selection.startDate, item.selection.endDate],
    }));
  };

  const handleOptionSelect = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Create Your Trip
      </h1>

      <FormTextField
        label="Trip Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        helperText="Give your adventure a name"
      />

      <FormTextField
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        helperText="Where are you heading?"
      />

      <FormDateRangeField
        dateRange={formData.dateRange}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onDateRangeChange={handleDateRangeChange}
      />

      <FormOptionField
        text="What's your budget?"
        options={budgetOptions}
        activeOption={formData.budget}
        onSelect={(value) => handleOptionSelect("budget", value)}
      />

      <FormOptionField
        text="Who's coming along?"
        options={peopleCountOptions}
        activeOption={formData.peopleCount}
        onSelect={(value) => handleOptionSelect("peopleCount", value)}
      />

      <div className="flex justify-end">
        <Button primary onClick={handleSubmit} loading={loading}>
          Generate Trip
        </Button>
      </div>
    </form>
  );
};

const FormTextField = ({ label, name, value, onChange, helperText }) => (
  <TextField
    fullWidth
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    variant="outlined"
    helperText={helperText}
    className="bg-gray-50"
  />
);

const FormDateRangeField = ({
  dateRange,
  isModalOpen,
  setIsModalOpen,
  onDateRangeChange,
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-700">
      When are you traveling?
    </h3>
    <div className="flex gap-4">
      <TextField
        label="Start Date"
        value={dayjs(dateRange[0]).format("DD-MM-YYYY")}
        readOnly
        fullWidth
      />
      <TextField
        label="End Date"
        value={dayjs(dateRange[1]).format("DD-MM-YYYY")}
        readOnly
        fullWidth
      />
    </div>
    <Button onClick={() => setIsModalOpen(true)}>Select Dates</Button>
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Select Trip Dates"
    >
      <DateRange
        editableDateInputs={true}
        onChange={(item) => onDateRangeChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={[
          { startDate: dateRange[0], endDate: dateRange[1], key: "selection" },
        ]}
        minDate={new Date()}
        maxDate={addDays(new Date(), 100)}
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={() => setIsModalOpen(false)}>Confirm Dates</Button>
      </div>
    </Modal>
  </div>
);

const FormOptionField = ({ text, options, activeOption, onSelect }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-700">{text}</h3>
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <Card
          key={option.label}
          onClick={() => onSelect(option.label)}
          active={activeOption === option.label}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">{option.icon}</span>
            <h4 className="text-xl font-medium mb-1">{option.label}</h4>
            <p className="text-gray-600 text-center text-sm">
              {option.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default CreateTripForm;
