import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyUs from "@/components/WhyUs";
const Home = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
      <div className="text-center text-2xl">
        <HeroSection />
        <FeaturedCourses />
        <WhyUs />
        <Testimonial />
        <UpcomingWebinars />
        <Instructors />
      </div>
    </main>
  );
};
export default Home;
