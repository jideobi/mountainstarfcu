import Header from "../component/Header";
import Navbar from "../component/Navbar";
import HeroSlider from "../component/HeroSlider";
import ServiceGride from "../component/ServiceGride";
import AppDownload from "../component/AppDownload";
import Footer from "../component/Footer";


export default function Home() {
    return (
        <>


            <Header />
            <Navbar />
            <HeroSlider />
            <ServiceGride />
            <AppDownload />
            <Footer />
        </>
    );
}