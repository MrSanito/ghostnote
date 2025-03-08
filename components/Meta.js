export function generateMetadata({ title, description }) {
  return {
    title: title
      ? `${title} | Ghost Note`
      : "Ghost Note - Anonymous Confessions",
    description:
      description ||
      "Post confessions anonymously & send self-destructing secret messages.",
  };
}
