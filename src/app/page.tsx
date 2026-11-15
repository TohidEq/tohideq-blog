import Posts from "@/components/Posts";
import WelcomeImg from "@/components/WelcomeImg";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export const revalidate = 10;

export function generateMetadata() {
  return {
    title: "TohidEq's Blog",
    description: "Tohid Eghdami's Personal Blog"
  };
}

export default function Home() {
  return (
    <main className="home page">
      <WelcomeImg />
      <div className="links">
        <Link href={"/posts"}>
          All Posts <AiOutlineLink className={"h-full ml-1"} />
        </Link>

      </div>
      <div className="posts page">
        <Posts />
      </div>
    </main>
  );
}
