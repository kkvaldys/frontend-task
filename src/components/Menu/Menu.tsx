import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import styles from "./Menu.module.css";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (values: { search: string }) => {
    setLoading(true);
    try {
      let url = "";
      if (searchType === "name") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${values.search}`;
      } else if (searchType === "firstLetter") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${values.search}`;
      }
      const response = await axios.get(url);
      const meals = response.data.meals;
      setMeals(meals.slice(0, 5));
    } catch ({ message }: any) {
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSearch}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.innerContainer}>
              <Field
                type="input"
                name="search"
                placeholder="Search for meals"
                className={styles.field}
              />
              <ErrorMessage
                name="search"
                component="div"
                className={styles.error}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={styles.mealList}>
          {meals.map((meal) => (
            <li key={meal.idMeal} className={styles.mealItem}>
              <div className={styles.imgContainer}>
                <Image
                  src={`/images/${meal.strMealThumb}`}
                  alt={meal.strMeal}
                  width={200}
                  height={200}
                  className={styles.img}
                />
              </div>
              <h2 className={styles.mealName}>{meal.strMeal}</h2>
              <p className={styles.instructions}>
                <strong>Cooking Instructions:</strong>
                <br />
                {meal.strInstructions}
              </p>
            </li>
          ))}
        </ul>
      )}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
}
