import Posts from "@/components/Posts";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import React from "react";

export function generateMetadata() {
  return {
    title: "All Posts",
    description: "All Posts are here",
  };
}

export default function AllPosts() {
  return (
    <div className="posts page">
      <h2 className="text-2xl mt-4 mb-0 text-white">All Posts:</h2>
      <Posts />
    </div>
  );
}
