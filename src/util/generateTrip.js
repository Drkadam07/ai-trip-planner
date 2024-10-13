import { z } from "zod";
import { chatSession } from "../gemini/gemini";

export const generateTrip = async (formData) => {
  const tripSchema = z.object({
    name: z.string(),
    destination: z.string(),
    dateRange: z.array(z.date()),
    budget: z.string(),
    peopleCount: z.string(),
  });

  const result = tripSchema.safeParse(formData);
  if (result.success) {
    const { name, destination, dateRange, budget, peopleCount } = result.data;
    const prompt = promptTemplete({
      destination,
      dateRange,
      budget,
      peopleCount,
    });
    console.log(prompt);

    // ⚠️ DANGER ZONE ⚠️
    // !!! DO NOT TOUCH UNLESS YOU WANT TO TEST THE PROMPT
    /* const genReqResult = await chatSession.sendMessage(prompt); */
    // UNNECESSARY REQUESTS WILL EXHAUST THE TOKENS
    // 🚧 DANGER ZONE END 🚧

    console.log(genReqResult.response.text());
  } else {
    console.log(result.error);
    throw new Error("Invalid form data");
  }
};

export const promptTemplete = ({
  destination,
  dateRange,
  budget,
  peopleCount,
}) => {
  return `Generate Travel Plan for Location: ${destination}, from date ${dateRange[0].toLocaleDateString()} to date ${dateRange[1].toLocaleDateString()} for ${peopleCount} with a ${budget} Budget, Give me Hotel options list with Hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, time t travel each of the location for 3 days with each day plan with best time to visit in, all of your response must be in JSON format`;
};
