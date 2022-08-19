import { Hero, Navbar } from "../components";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto max-w-5xl px-2 md:px-1">
        <Navbar />
      </div>
      <div className="layout-container my-[150px]">
        <Hero />
      </div>
    </div>
  );
}
