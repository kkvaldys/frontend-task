import { Formik, Form, Field } from "formik";
import css from "./Menu.module.css";
import searchMeals from "@/api";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Meal {
  id: number;
  name: string;
  description: string;
  cooking: string;
  imageUrl: string;
}

interface SearchError {
  message: string;
}

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<SearchError | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const meals = await searchMeals(searchQuery);
      setMeals(meals.slice(0, 5));
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError({ message: error.message });
      } else {
        setError({ message: "An unknown error occurred" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { setSubmitting }) => {
          handleSearch();
          setSubmitting(false);
        }}
      >
        <Form className={css.form}>
          <div className={css.innerContainer}>
            <Field
              type="input"
              name="search"
              className={css.field}
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search for meals"
            />
            <button type="submit" className={css.submitBtn}>
              Search
            </button>
          </div>
        </Form>
      </Formik>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.mealList}>
          {meals.map((meal) => (
            <li key={meal.id}>
              <div className={css.imgContainer}>
                <Image
                  src={`/public/images/${meal.imageUrl}`}
                  alt={meal.name}
                  width={380}
                  height={194}
                  className={css.img}
                />
              </div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <h3>Cooking instructions:</h3>
              <p>{meal.cooking}</p>
            </li>
          ))}
        </ul>
      )}

      {error && <p className={css.error}>{error.message}</p>}
    </div>
  );
}
