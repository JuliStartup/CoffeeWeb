"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const TestimonialSectionGsapCentered = () => {
  const testimonials = [
    {
      company: "TechSphere",
      logo: "/cardicons/bill.png",
      quote:
        "TechSphere helped us revolutionize our cloud infrastructure, saving both time and money.",
      author: "Alex Turner",
      role: "CTO, TechSphere",
      image: "/aa.jpg",
    },
    {
      company: "Innovex",
      logo: "/cardicons/idle.png",
      quote:
        "With Innovex, we scaled our business seamlessly while optimizing our cloud costs.",
      author: "Samantha Lee",
      role: "Head of Engineering, Innovex",
      image: "/bb.jpg",
    },
    {
      company: "Cloudify",
      logo: "/cardicons/t4.png",
      quote:
        "Cloudify’s solutions were exactly what we needed to improve our operations and cut costs.",
      author: "Michael Davis",
      role: "Lead Developer, Cloudify",
      image: "/cc.jpg",
    },
  ];

  // Track which card is currently "active"
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for DOM elements
  const slidesContainerRef = useRef(null);
  const slideRefs = useRef([]);    // each slide card
  const textRefs = useRef([]);     // each slide’s text wrapper
  const headingRef = useRef(null); // "Why [company] loves CoffeeStore" text span

  // X-values that will center each slide in the viewport
  const [centerPositions, setCenterPositions] = useState([]);

  // ─────────────────────────────────────────────────────────────
  // 1) MEASURE & STORE X-POSITIONS TO CENTER EACH SLIDE
  // ─────────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    if (!slidesContainerRef.current || slideRefs.current.length === 0) return;

    const viewport = slidesContainerRef.current.parentNode; // .overflow-hidden parent
    const viewportWidth = viewport.offsetWidth;

    const positions = slideRefs.current.map((slideEl) => {
      const slideLeft = slideEl.offsetLeft;
      const slideWidth = slideEl.offsetWidth;
      const slideCenter = slideLeft + slideWidth / 2;
      // For centering: container.x so that slideCenter = viewportWidth / 2
      return viewportWidth / 2 - slideCenter;
    });

    setCenterPositions(positions);
  }, []);

  // ─────────────────────────────────────────────────────────────
  // 2) GO TO A SPECIFIC SLIDE INDEX (ANIMATE THE CONTAINER)
  //    - Immediately set `currentIndex` so we know the active card
  // ─────────────────────────────────────────────────────────────
  const goToSlide = useCallback(
    (index) => {
      if (!centerPositions.length) return;
      const maxIndex = testimonials.length - 1;
      const clampedIndex = Math.max(0, Math.min(index, maxIndex));

      // Update state IMMEDIATELY so React knows the new active card
      setCurrentIndex(clampedIndex);

      // Animate container to center that slide
      gsap.to(slidesContainerRef.current, {
        x: centerPositions[clampedIndex],
        duration: 0.5,
        ease: "power2.out",
      });
    },
    [centerPositions, testimonials.length]
  );

  // ─────────────────────────────────────────────────────────────
  // 3) DRAGGABLE: DETECT SWIPE LEFT/RIGHT => NEXT/PREV
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!slidesContainerRef.current || centerPositions.length === 0) return;

    // Position the container at the first slide
    gsap.set(slidesContainerRef.current, { x: centerPositions[0] });

    let startPointerX = 0;
    const threshold = 50; // min distance for next/prev

    const [draggable] = Draggable.create(slidesContainerRef.current, {
      type: "x",
      inertia: false,
      onDragStart() {
        startPointerX = this.pointerX;
      },
      onDragEnd() {
        const delta = this.pointerX - startPointerX;
        if (delta < -threshold) {
          // swipe left => next
          goToSlide(currentIndex + 1);
        } else if (delta > threshold) {
          // swipe right => prev
          goToSlide(currentIndex - 1);
        } else {
          // not enough movement => snap back
          goToSlide(currentIndex);
        }
      },
    });

    return () => draggable.kill();
  }, [goToSlide, centerPositions, currentIndex]);

  // ─────────────────────────────────────────────────────────────
  // 4) AUTOPLAY EVERY 5 SECONDS
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentIndex >= testimonials.length - 1 ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, goToSlide, testimonials.length]);

  // ─────────────────────────────────────────────────────────────
  // 5) WHEN currentIndex CHANGES, SCALE/FADES FOR SLIDES + HEADING
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    // Animate heading: "Why [company] loves CoffeeStore"
    const newCompany = testimonials[currentIndex].company;
    gsap
      .timeline()
      .to(headingRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.inOut",
      })
      .add(() => {
        headingRef.current.textContent = newCompany;
      })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      });

    // Scale & fade slides
    slideRefs.current.forEach((slideEl, i) => {
      const textEl = textRefs.current[i];
      if (!slideEl || !textEl) return;

      if (i === currentIndex) {
        // Active slide => scale:1, fade text in
        gsap.to(slideEl, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(textEl, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Inactive => scale:0.9, fade text out
        gsap.to(slideEl, {
          scale: 0.9,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(textEl, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [currentIndex, testimonials]);

  // ─────────────────────────────────────────────────────────────
  // 6) RENDER
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="relative bg-gradient-to-b from-[#faf9f9] to-[#fbfaf9] w-full pt-24 pb-24">
      {/* Heading */}
      <div className="text-center font-twk font-semibold mb-16 px-4">
        <h2 className="text-neutral-800 text-center text-3xl md:text-4xl xl:text-5xl leading-tight md:leading-snug xl:leading-normal tracking-tight md:tracking-tighter xl:tracking-tight font-semibold">
          Why{" "}
          <span ref={headingRef} className="inline-block">
            {testimonials[0].company}
          </span>{" "}
          loves CoffeeStore
        </h2>
        <h3 className="text-neutral-500 mx-auto font-light text-lg md:text-xl xl:text-2xl max-w-lg md:max-w-xl xl:max-w-2xl mt-2 md:mt-2 text-center mb-2 md:mb-2 font-twk">
          Join companies optimizing their business processes with CoffeeStore.
        </h3>
      </div>

      {/* Overflow-hidden "viewport" */}
      <div className="overflow-hidden relative">
        {/* Draggable container */}
        <div ref={slidesContainerRef} className="flex cursor-grab">
          {testimonials.map((item, i) => (
            <div
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
              className="flex-[0_0_90%] md:flex-[0_0_45%] xl:flex-[0_0_45%] px-4"
            >
              <div className="relative h-[532px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                {/* Each slide’s text content */}
                <div
                  ref={(el) => (textRefs.current[i] = el)}
                  style={{ opacity: i === 0 ? 1 : 0 }}
                  className="relative h-full flex flex-col justify-end p-8 md:p-12 xl:p-16 font-twk"
                >
                  <p className="text-xl md:text-2xl xl:text-3xl text-white font-light leading-relaxed mb-8 max-w-3xl font-twk">
                    "{item.quote}"
                  </p>
                  <div className="text-white font-twk">
                    <p className="text-lg font-medium font-twk">
                      {item.author}
                    </p>
                    <p className="text-sm text-white/70 font-twk font-normal">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-white scale-125" : "bg-white/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSectionGsapCentered;
