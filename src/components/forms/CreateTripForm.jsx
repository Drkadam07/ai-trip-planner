import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";
import RModal from "../UI/RModal";
import { addDays } from "date-fns";
import { budgetOptions, peopleCountOptions } from "./option.js";

const CreateTripForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    dateRange: [new Date(), addDays(new Date(), 3)],
    duration: 3,
    budget: "",
    peopleCount: 0,
  });
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <form>
        <div className="form-group flex flex-col gap-4">
          <FormTextField
            text="Name your trip"
            label="Trip Name"
            id="trip-name"
          />
          <FormTextField
            text="What is destination of choice?"
            label="Destination"
            id="trip-destination"
          />
          <FormDateRangeField
            dateRange={formData.dateRange}
            setFormData={setFormData}
            modelOpen={modelOpen}
            setModelOpen={setModelOpen}
          />
          <FormRadioField
            name="Budget"
            description="Select your budget"
            options={budgetOptions}
          />
          {/* <FormRadioField label="Number of People" id="trip-people-count" /> */}
        </div>
      </form>
    </>
  );
};

export default CreateTripForm;

const FormTextField = ({ label, id, text }) => {
  return (
    <div className="form-control flex items-center rounded-lg border-2 p-4 gap-4">
      <p className="min-w-fit">{text}</p>
      <TextField id={id} label={label} variant="filled" fullWidth />
    </div>
  );
};

const DateRangePickerC = ({ dateRange, setFormData }) => {
  const [state, setState] = useState([
    {
      startDate: dateRange[0],
      endDate: dateRange[1],
      key: "selection",
    },
  ]);

  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      dateRange: [state[0].startDate, state[0].endDate],
    }));
  }, [state]);

  return (
    <div className="form-control">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction="horizontal"
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 100)}
      />
    </div>
  );
};

const FormDateRangeField = ({
  dateRange,
  setFormData,
  modelOpen,
  setModelOpen,
}) => {
  const handleOpen = () => setModelOpen(true);

  return (
    <div className="form-control flex flex-col gap-4 justify-center items-center rounded-lg border-2 p-4">
      <p className="self-start">Select a date range for your trip</p>
      <div className="select-div flex gap-4 justify-center items-center w-full">
        <div className="flex gap-4 flex-grow">
          <DateField
            label="Start Date"
            value={dayjs(dateRange[0])}
            variant="filled"
            readOnly
            disablePast
            defaultValue={dayjs()}
            color="primary"
            format="DD-MM-YYYY"
            fullWidth
          />
          <DateField
            label="End Date"
            value={dayjs(dateRange[1] ? dateRange[1] : undefined)}
            variant="filled"
            readOnly
            disablePast
            defaultValue={dayjs()}
            color="primary"
            format="DD-MM-YYYY"
            fullWidth
          />
        </div>
        <div className="select-btn">
          {modelOpen ? (
            <RModal
              openState={modelOpen}
              setOpenFn={setModelOpen}
              title="Select Trip Date Range"
              description="Please select a date range for your trip"
            >
              <div className="inner-modal">
                <DateRangePickerC
                  dateRange={dateRange}
                  setFormData={setFormData}
                />
              </div>
            </RModal>
          ) : (
            <Button
              size="large"
              fullWidth
              variant="contained"
              onClick={handleOpen}
            >
              Select Date Range
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const FormRadioField = ({ name, description, options }) => {
  return (
    <div className="form-control flex flex-col items-center rounded-lg border-2 p-4 gap-4">
      <p>{name}</p>
      <p>{description}</p>
      <div className="radio-grp-div">
        {options.map((option, index) => (
          <div className="radio-grp-item" key={index}>
            <input
              className="invisible"
              type="radio"
              name={name}
              id={option.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
