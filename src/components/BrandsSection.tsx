import Section from "../layout/Section";
import visaLogo from '../assets/brands-logos/visa-black.png'
import tymeBankLogo from '../assets/brands-logos/tyme-bank-black.png'
import distellLogo from '../assets/brands-logos/distell-black.png'
import spotifyLogo from '../assets/brands-logos/spotify-black.png'
import microsoftLogo from '../assets/brands-logos/microsoft-black.png'
import engenLogo from '../assets/brands-logos/engen-black.png'
import nikeLogo from '../assets/brands-logos/nike-black.png'
import wesgroLogo from '../assets/brands-logos/wesgrow-black.png'
import multichoiceLogo from '../assets/brands-logos/multichoice-black.png'
import pnpLogo from '../assets/brands-logos/pnp-black.png'
import liquidLogo from '../assets/brands-logos/liquid-black.png'
import tfgLogo from '../assets/brands-logos/tfg-black.png'
import sanlamLogo from '../assets/brands-logos/sanlam-black.png'
import santamLogo from '../assets/brands-logos/santam-black.png'
import bbcLogo from '../assets/brands-logos/bbc-black.png'

export default function BrandsSection () {
    const Content = () => {
        const brands = [
            {
                logo: visaLogo,
                name: "Visa"
            },
            {
                logo: tymeBankLogo,
                name: "TymeBank"
            },
            {
                logo: distellLogo,
                name: "Distell"
            },
            {
                logo: spotifyLogo,
                name: "Spotify"
            },
            {
                logo: microsoftLogo,
                name: "Microsoft"
            },
            {
                logo: engenLogo,
                name: "Engen"
            },
            {
                logo: nikeLogo,
                name: "Nike"
            },
            {
                logo: wesgroLogo,
                name: "Wesgro"
            },
            {
                logo: multichoiceLogo,
                name: "Multichoice"
            },
            {
                logo: pnpLogo,
                name: "PnP"
            },
            {
                logo: liquidLogo,
                name: "Liquid"
            },
            {
                logo: tfgLogo,
                name: "TFG"
            },
            {
                logo: sanlamLogo,
                name: "Sanlam"
            },
            {
                logo: santamLogo,
                name: "Santam"
            },
            {
                logo: bbcLogo,
                name: "BBC"
            }
        ]

        return (
            <div className="brands">
                { brands.map((brand, idx) => (
                    <div className="brand-item" key={`brand-${idx}`}>
                        <img src={brand.logo} alt={brand.name} />
                    </div>
                ) )}
            </div>
        )
    }
    return (
        <Section
            id="brands-section"
            title="Trusted by leading brands"
            subtitle="You&apos;ll be in good company"
            content={<Content />}
            />
    )
}
