import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <p>For logged in users only</p>
    </div>
  );
}
