import Hero from "@/sections/Hero";
import AboutUs from "@/sections/AboutUs";
import Work from "@/sections/Work";
import Services from "@/sections/Services";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
export default function Home() {
    return (
        <div>
           <Hero />
           <AboutUs />
           <Work />
           <Services />
           <CallToAction />
           <Footer />
        </div>
    );
}