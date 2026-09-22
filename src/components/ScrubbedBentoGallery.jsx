import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Sparkles, MoveUpRight, Layers3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  {
    id: 1,
    number: '01',
    title: 'Digital Architecture',
    category: 'Creative Direction',
    description:
      'Building immersive digital experiences with motion, depth and purposeful interaction.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=90'
  },
  {
    id: 2,
    number: '02',
    title: 'Future Interface',
    category: 'UI / UX',
    description:
      'Interfaces designed around clarity, movement and human behavior.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=90'
  },
  {
    id: 3,
    number: '03',
    title: 'Motion System',
    category: 'Animation',
    description: 'Motion that creates hierarchy without getting in the way.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=90'
  },
  {
    id: 4,
    number: '04',
    title: 'Visual Stories',
    category: 'Art Direction',
    description: 'Turning visual language into memorable digital stories.',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=90'
  },
  {
    id: 5,
    number: '05',
    title: 'Next Generation',
    category: 'Technology',
    description:
      'A flexible design language for products built for the next generation.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90'
  },
  {
    id: 6,
    number: '06',
    title: 'Digital Culture',
    category: 'Research',
    description:
      'Exploring the intersection between technology, culture and design.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90'
  }
]

const ScrubbedBentoGallery = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          desktop: '(min-width: 1100px)',
          tablet: '(min-width: 768px) and (max-width: 1099px)',
          mobile: '(max-width: 767px)',
          reduced: '(prefers-reduced-motion: reduce)'
        },
        context => {
          const { desktop, tablet, mobile, reduced } = context.conditions

          if (reduced) return

          const cards = gsap.utils.toArray('.bento-card')
          const images = gsap.utils.toArray('.bento-image')
          const content = gsap.utils.toArray('.bento-content')

          /* --------------------------------
             DESKTOP
          -------------------------------- */

          if (desktop) {
            const master = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=2200',
                scrub: 1.1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
              }
            })

            /*
             * Main composition movement
             */

            master
              .to(
                cards[0],
                {
                  x: -45,
                  y: -35,
                  scale: 1.04,
                  rotation: -1.5,
                  ease: 'none'
                },
                0
              )

              .to(
                cards[1],
                {
                  x: 55,
                  y: -85,
                  scale: 0.94,
                  rotation: 3,
                  ease: 'none'
                },
                0
              )

              .to(
                cards[2],
                {
                  x: 70,
                  y: 75,
                  scale: 1.06,
                  rotation: -2,
                  ease: 'none'
                },
                0
              )

              .to(
                cards[3],
                {
                  x: -55,
                  y: 95,
                  scale: 0.95,
                  rotation: 2,
                  ease: 'none'
                },
                0
              )

              .to(
                cards[4],
                {
                  x: 25,
                  y: -105,
                  scale: 1.03,
                  rotation: -2,
                  ease: 'none'
                },
                0
              )

              .to(
                cards[5],
                {
                  x: 75,
                  y: 100,
                  scale: 0.93,
                  rotation: 3,
                  ease: 'none'
                },
                0
              )

            /*
             * Image parallax
             */

            images.forEach((image, index) => {
              master.to(
                image,
                {
                  yPercent: index === 0 ? -10 : index % 2 === 0 ? -16 : 12,
                  scale: 1.12,
                  ease: 'none'
                },
                0
              )
            })

            /*
             * Content floating effect
             */

            content.forEach((item, index) => {
              master.to(
                item,
                {
                  y: index === 0 ? -12 : index % 2 === 0 ? -18 : 10,
                  ease: 'none'
                },
                0
              )
            })
          }

          /* --------------------------------
             TABLET
          -------------------------------- */

          if (tablet) {
            cards.forEach((card, index) => {
              gsap.fromTo(
                card,
                {
                  y: index % 2 === 0 ? 40 : -40,
                  rotation: index % 2 === 0 ? -1 : 1,
                  scale: 0.98
                },
                {
                  y: index % 2 === 0 ? -25 : 25,
                  rotation: 0,
                  scale: 1,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    scrub: 1
                  }
                }
              )
            })

            images.forEach(image => {
              gsap.fromTo(
                image,
                {
                  scale: 1.04
                },
                {
                  scale: 1.13,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: image,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                  }
                }
              )
            })
          }

          /* --------------------------------
             MOBILE
          -------------------------------- */

          if (mobile) {
            cards.forEach((card, index) => {
              gsap.fromTo(
                card,
                {
                  y: 45,
                  opacity: 0.7,
                  scale: 0.97
                },
                {
                  y: -20,
                  opacity: 1,
                  scale: 1,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'bottom 15%',
                    scrub: 1
                  }
                }
              )
            })

            images.forEach(image => {
              gsap.fromTo(
                image,
                {
                  scale: 1.05
                },
                {
                  scale: 1.15,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: image,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                  }
                }
              )
            })
          }

          /* --------------------------------
             HEADER REVEAL
          -------------------------------- */

          gsap.fromTo(
            '.bento-heading',
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          )

          /* --------------------------------
             CARD INITIAL REVEAL
          -------------------------------- */

          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 35
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                delay: index * 0.06,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse'
                }
              }
            )
          })
        }
      )
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[var(--color-bg)]
        py-20
        sm:py-24
        lg:h-screen
        lg:min-h-[820px]
        lg:py-8
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--color-ember)]
            opacity-[0.045]
            blur-[150px]
          "
        />

        <div className="noise-veil absolute inset-0 opacity-30" />
      </div>

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-[1540px]
          flex-col
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* --------------------------------
            HEADER
        -------------------------------- */}

        <div
          className="
            bento-heading
            mb-8
            flex
            items-end
            justify-between
            gap-8
            sm:mb-10
            lg:mb-7
          "
        >
          <div>
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--color-line)]
                bg-[var(--color-surface)]
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--color-mute)]
              "
            >
              <Sparkles size={12} className="text-[var(--color-ember)]" />
              Selected Works
            </div>

            <h2
              className="
                font-display
                text-4xl
                font-bold
                leading-[0.9]
                tracking-[-0.05em]
                text-[var(--color-ink)]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Built to
              <span className="text-gradient"> move.</span>
            </h2>
          </div>

          <div
            className="
              hidden
              items-center
              gap-3
              pb-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[var(--color-mute-2)]
              md:flex
            "
          >
            <Layers3 size={14} />

            <span>Scroll to explore</span>

            <MoveUpRight size={14} className="text-[var(--color-ember)]" />
          </div>
        </div>

        {/* --------------------------------
            BENTO
        -------------------------------- */}

        <div
          className="
            bento-layout
            grid
            flex-1
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-12
            lg:grid-rows-[1.15fr_0.85fr]
            lg:gap-5
          "
        >
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`
                bento-card
                group
                relative
                min-h-[340px]
                overflow-hidden
                rounded-[24px]
                border
                border-[var(--color-line)]
                bg-[var(--color-surface)]
                shadow-[0_30px_100px_-45px_rgba(0,0,0,0.7)]
                ${index === 0 ? 'lg:col-span-7 lg:row-span-2 lg:min-h-0' : ''}
                ${index === 1 ? 'lg:col-span-5 lg:min-h-0' : ''}
                ${index === 2 ? 'lg:col-span-5 lg:min-h-0' : ''}
                ${index === 3 ? 'lg:col-span-4 lg:min-h-0' : ''}
                ${index === 4 ? 'lg:col-span-4 lg:min-h-0' : ''}
                ${index === 5 ? 'lg:col-span-4 lg:min-h-0' : ''}
              `}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="
                    bento-image
                    h-[115%]
                    w-full
                    object-cover
                    will-change-transform
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.05]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/25
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[var(--color-ember)]
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  "
                />
              </div>

              {/* Number */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  font-mono
                  text-[10px]
                  text-white/80
                  backdrop-blur-xl
                "
              >
                {item.number}
              </div>

              {/* Content */}
              <div
                className="
                  bento-content
                  absolute
                  inset-x-0
                  bottom-0
                  z-20
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >
                <div
                  className="
                    mb-3
                    inline-flex
                    rounded-full
                    border
                    border-white/15
                    bg-black/25
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/70
                    backdrop-blur-xl
                  "
                >
                  {item.category}
                </div>

                <div className="flex items-end justify-between gap-5">
                  <div className="max-w-[560px]">
                    <h3
                      className="
                        font-display
                        text-2xl
                        font-semibold
                        tracking-[-0.025em]
                        text-white
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-xs
                        leading-6
                        text-white/60
                        sm:text-sm
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-[var(--color-ember)]
                      hover:bg-[var(--color-ember)]
                      hover:rotate-45
                    "
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrubbedBentoGallery
