import axios from "axios";

const searchMeals = async (searchQuery: string) => {
  const response = await axios.get("/api/meals", {
    params: { search: searchQuery },
  });
  return response.data;
};

export default searchMeals;
