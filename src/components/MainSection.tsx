import mainImage from '../assets/main-image.png'

export default function MainSection() {
    return (
        <section className="hero-section" style={{backgroundImage: `url(${mainImage})`}}>
            <div className='container'>
                <div className='hero-content'>
                    <h1>Live with Confidence</h1>
                    <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                    <a href='#'>View project</a>
                </div>
            </div>
        </section>
    )
}
