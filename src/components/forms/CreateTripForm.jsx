import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { DateField } from "@mui/x-date-pickers/DateField";
import RModal from "../UI/RModal";

const CreateTripForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    dateRange: [null, null],
    budget: "",
    peopleCount: 0,
  });
  const [modelOpen, setModelOpen] = useState(false);
  const handleOpen = () => setModelOpen(true);

  return (
    <>
      <form>
        <div className="form-group">
          <FormTextField label="Trip Name" id="trip-name" />
          <FormTextField label="Destination" id="trip-destination" />
          <DateField
            label="Controlled field"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          {modelOpen ? (
            <RModal
              openState={modelOpen}
              setOpenFn={setModelOpen}
              title="Select Trip Date Range"
              description="Please select a date range for your trip"
            >
              <div className="inner-modal">
                <FormDateRangeField />
              </div>
            </RModal>
          ) : (
            <Button variant="contained" onClick={handleOpen}>
              Select Date Range
            </Button>
          )}
          {/* <FormRadioField label="Budget" id="trip-budget" /> */}
          {/* <FormRadioField label="Number of People" id="trip-people-count" /> */}
        </div>
      </form>
    </>
  );
};

export default CreateTripForm;

const FormTextField = ({ label, id }) => {
  return (
    <div className="form-control">
      <TextField id={id} label={label} variant="filled" />
    </div>
  );
};

const FormDateRangeField = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="form-control">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
};

const FormRadioField = ({ label, id, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <RadioGroup id={id} aria-label={label} defaultValue="1">
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
