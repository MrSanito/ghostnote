import Link from "next/link";
import { generateMetadata } from "@/components/Meta";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Welcome to Ghost Note - Share anonymous confessions and messages.",
});

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-semibold mt-8">
        Share Your Secrets Anonymously
      </h2>
      <p className="text-gray-600 mt-2">
        Write a confession and let it disappear forever.
      </p>
      <Link
        href="/confess"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded text-lg"
      >
        Make a Confession
      </Link>
    </div>
  );
};

export default Home;
