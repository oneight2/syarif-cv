import {
  Hero,
  Navbar,
  Projects,
  Contact,
  Footer,
  BottomNav,
} from "../components";
export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl px-2 md:px-1 md:block lg:block hidden">
        <Navbar />
      </div>
      <div className="mx-auto max-w-5xl px-2 md:px-1 md:hidden lg:hidden">
        <BottomNav />
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
