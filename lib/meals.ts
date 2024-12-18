import { MealItemProps } from "@/components/meals-item/meals-item";
import sql from "better-sqlite3";

const db = sql("meals.db");

type MealsResponse = {
  meals: MealItemProps[];
};

type mealSlug = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export async function getMeals(): Promise<MealsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const result = db.prepare("SELECT * FROM meals").all() as MealItemProps[];

  return { meals: result };
}

export function getMealsSlug(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug) as mealSlug;
}
