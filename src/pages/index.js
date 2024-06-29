import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World -Team Raket :) {" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
