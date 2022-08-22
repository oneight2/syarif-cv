import { Hero, Navbar, Projects, Contact, Footer } from "../components";
export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl px-2 md:px-1">
        <Navbar />
      </div>
      <div className="layout-container">
        <Hero />
      </div>
      <div className="layout-container my-10">
        <Projects />
      </div>
      <div className="layout-container my-10">
        <Contact />
      </div>
      <div className="layout-container my-10">
        <Footer />
      </div>
    </div>
  );
}
