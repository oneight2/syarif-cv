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
    <div className="w-[100%] scroll-smooth mx-auto">
      <div className="mx-auto max-w-5xl px-2 md:px-1 md:block lg:block hidden sticky top-0 z-[99]">
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
