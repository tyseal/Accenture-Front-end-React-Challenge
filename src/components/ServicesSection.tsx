import Section from "../layout/Section"
import webDevIcon from "../assets/services-icons/web-dev-icon.svg"
import uxIcon from "../assets/services-icons/ux-icon.svg"
import appDevIcon from "../assets/services-icons/app-dev-icon.svg"
import blockchainIcon from "../assets/services-icons/blockchain-icon.svg"

export default function ServicesSection () {
    const Content = () => {
        const servicesList = [
            {
                icon: webDevIcon,
                title: "Web Development",
                desc: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
            },
            {
                icon: appDevIcon,
                title: "User experience & design",
                desc: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
            },
            {
                icon: uxIcon,
                title: "Mobile app development",
                desc: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
            },
            {
                icon: blockchainIcon,
                title: "Blockchain solutions",
                desc: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
            }
        ]

        return (
            <div className="services">
                {servicesList.map((service, idx) => (
                    <div className="service-item" key={`service-${idx}`}>
                        <img src={service.icon} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
                
            </div>
        )
    }

    return (
        <Section
            id="services-section"
            title="We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces"
            subtitle="What we do"
            content={<Content /> } />
    )
}