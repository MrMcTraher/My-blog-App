import { IPost } from "../types/types";

export async function fetchData() {
  try {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/?limit=11"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
