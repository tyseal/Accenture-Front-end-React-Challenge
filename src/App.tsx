import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection"
import './App.scss'
import ServicesSection from "./components/ServicesSection";
import CaseSlide from "./components/CaseSlide"
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<MainSection />
			<ServicesSection />
			<CaseSlide/>
			<BrandsSection />
			<Footer />
		</>
	)
}

export default App
