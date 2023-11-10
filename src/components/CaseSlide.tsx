import { useEffect, useState } from "react"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Section from "../layout/Section"
import { API_URL } from "../components/config"

interface CaseStudy {
    imageUrl: string;
    description: string;
    title: string;
}

interface ArrowProps {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void
}

const MutationPlugin: KeenSliderPlugin = (slider) => {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
            slider.update()
        })
    })

    const config = { childList: true }
  
    slider.on("created", () => {
        observer.observe(slider.container, config)
    })
    slider.on("destroyed", () => {
        observer.disconnect()
    })
}

const AutoSwitchPlugin: KeenSliderPlugin = (slider) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    function clearNextTimeout() {
        clearTimeout(timeout)
    }

    function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
            slider.next()
        }, 2000)
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
        })
        nextTimeout()
    })

    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
}

function Arrow(props: ArrowProps) {
    const disabeld = props.disabled ? " arrow--disabled" : ""

    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
  }

function Content () {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[] | []>([])
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 3,
                spacing: 15,
            },
            breakpoints: {
                '(max-width: 575px)': {
                    slides: {
                        perView: 1,
                    }
                },
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [AutoSwitchPlugin, MutationPlugin]
    )

    const fetchCaseStudies = () => {
        return fetch(API_URL)
            .then(res => res.json())
            .then(data => setCaseStudies(data))
    }
    
    useEffect(() => {
        fetchCaseStudies()
    }, [])

    return (
        <div className="navigation-wrapper">
            <div className="case-studies keen-slider" ref={sliderRef}>
                { caseStudies.map((caseStudy, idx) => (
                    <div className="keen-slider__slide case-study-item" key={`case-study-${idx}`} style={{backgroundImage: `url(${caseStudy?.imageUrl})`}}>
                        <a href="#" className="case-study-content">
                            <h3>{caseStudy?.title}</h3>
                            <p>{caseStudy?.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
                <>
                    <Arrow left
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev() }
                        disabled={currentSlide === 0} />

                    <Arrow
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next() }
                        disabled={ currentSlide === instanceRef.current.track.details?.slides.length - 1 }
                    />
                </>
            )}
        </div>
    )
}

export default function CaseStudiesSection () {

    return (
        <Section
            id="case-studies-section"
            subtitle="Case studies"
            content={<Content />} />
    )
}