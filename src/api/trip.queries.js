import { useMutation } from "react-query";
import { fetchMyTrips, generateTrip } from "../firebase/trip.service";

export const useGeneratetrip = () => {
  return useMutation((tripData) => generateTrip(tripData));
};

export const useFetchMyTrips = (userId) => {
  return useQuery(["trips", userId], () => fetchMyTrips(userId));
};

/* 
const generateTripMutation = useGenerateTrip();
generateTripMutation.mutate(tripData);

const { data: trips, isLoading } = useFetchMyTrips(userId);
*/
