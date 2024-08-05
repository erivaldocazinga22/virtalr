import { FeatureSection } from "./components/FeatureSection"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { NavBar } from "./components/NavBar"
import { Pricing } from "./components/Pricing"
import { Testimonials } from "./components/Testimonials"
import { Workflow } from "./components/Workflow"

export default function App() {
  	return (
    	<div>
      		<NavBar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSection />
				<FeatureSection />
				<Workflow />
				<Pricing />
				<Testimonials />
				<Footer />
			</div>
    	</div>
  )
}
