interface DateFormatOptions {
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  year?: "numeric" | "2-digit";
}

export const formatDate = (dateString: string | undefined) => {
  const options: DateFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
