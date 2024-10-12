import CreateTripForm from "../../components/forms/CreateTripForm";

function CreateTrip() {
  return (
    <div className="create-trip px-4 lg:px-72 flex flex-col items-center gap-4 lg:gap-4">
      <div className="heading-div flex flex-col gap-4 lg:py-8">
        <h1 className="lg:text-4xl">Tell us about your trip</h1>
        <p className="lg:text-xl text-neutral-600">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
      </div>
      <div className="form-div w-full">
        <CreateTripForm />
      </div>
    </div>
  );
}

export default CreateTrip;
