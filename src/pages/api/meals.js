import meals from "../../meals.json";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const searchQuery = req.query.search;
    const filteredMeals = meals.filter((meal) =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const mealsWithImages = filteredMeals.map((meal) => ({
      ...meal,
      imageUrl: `/images/${meal.image}`,
    }));
    res.status(200).json(mealsWithImages.slice(0, 5));
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
