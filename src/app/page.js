import Categories from "../components/Categories";
import CTASections from "../components/CTASections";
import EventSection from "../components/EventSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TopEvents from "../components/TopEvents";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TopEvents />

      <div className="event_bg">
        <EventSection type="recommended" />
        <EventSection type="near" />
        <EventSection type="week" />
      </div>

      <Categories />
      <FAQ />
      <CTASections />
      <Footer />
    </>
  );
}
