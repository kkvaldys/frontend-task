import { Formik, Form, Field } from "formik";
import css from "./Menu.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export default function Menu() {
  const apiEndpoint = "https://www.themealdb.com/api/json/v1/1";

  const fetchMeals = async (searchQuery: string) => {
    const response = await axios.get(
      `${apiEndpoint}/search.php?s=${searchQuery}`
    );
    const meals: Meal[] = response.data.meals;
    return meals;
  };

  const { id } = useRouter().query;
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}/lookup.php?i=${id}`);
        if (response.data.meals) {
          const meal: Meal = response.data.meals[0];
          setMeal(meal);
        } else {
          console.error("No meal found for ID", id);
        }
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };
    fetchMeal();
  }, [id]);

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <div className={css.innerContainer}>
            <Field
              type="input"
              name="search"
              className={css.field}
              onChange={fetchMeals}
            />
            <button type="submit" className={css.submitBtn}>
              Search
            </button>
          </div>
        </Form>
      </Formik>
      <div>
        {meal && (
          <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}
