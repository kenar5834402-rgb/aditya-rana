import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, directly initialize GoogleGenAI with process.env.API_KEY
// and assume it is always available. Removed redundant checks.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRecyclingTip = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Give me a short, actionable recycling tip for households in India. Keep it under 200 characters.',
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching recycling tip:", error);
    return "Could not fetch a recycling tip at the moment. Please try again later.";
  }
};
