import axios from "axios";

export async function fetchData() {
  const response = await axios.get("https://api.example.com/data");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async delay
  return response.data;
}
