import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Good day?</h1>
      <br />
      <Link href="/sub">Go to Sub</Link>
      <br />
      <Link href="/sec">Go to Sec</Link>
    </div>
  );
}
