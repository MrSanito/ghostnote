import { generateMetadata } from "@/components/Meta";

export const metadata = generateMetadata({
  title: "Message",
  description: "Send a secret message that self-destructs after being read.",
});

export default function MessageLayout({ children }) {
  return <>{children}</>;
}
