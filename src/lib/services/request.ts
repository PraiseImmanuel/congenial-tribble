import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// Create an instance of axios with baseURL
const api: AxiosInstance = axios.create({
  baseURL: "https://verbose-umbrella-production-71c3.up.railway.app/",
});

export const sendPdf = async (data: { email: string }) => {
  try {
    const response: AxiosResponse = await api.post(
      "api/email/send-email",
      data
    );
    console.log(response);
    return { success: true }; // Return both success status and message
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Handle error with response from the server
        const message = error.response.data.message;
        console.log(message);
        return { success: false }; // Return both failure status and message
      } else if (error.request) {
        // Handle network-related error (no response received)
        console.log("Something went wrong");
      }
    } else {
      // Handle other types of errors
      console.error("Non-Axios error:", error);
      return { success: false }; // Return other error
    }
  }
};
