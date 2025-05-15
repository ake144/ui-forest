import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const reviews = [
  {
    name: "MK",
    username: "@bubutales.net",
    body: "Hello! First of all I like your website name: Ui-Forest. It sounds like somethig you want to click. The landing page is nice. I like colours and elements you displayed",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "plcIOsim",
    username: "@plcIOsim",
    body: "This is really cool! I've used many component libraries in the past (Bootstrap, MUI, Chakra, Amplify) but I haven't seen components like yours on any of them.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "EasyContent",
    username: "@easycontent",
    body: "The first thing I like about Ui-Forest is that it solves a real problem many developers face – wasting time designing and searching for the right components. Instead of spending hours tweaking CSS or scrolling through endless template pages, here you have everything in one place, well-organized and ready to use.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Teddy Thibodeau",
    username: "@Teddy",
    body: "Wow I think this is really cool, it would be perfect for someone who wants a unique site without relying on those ugly premade sites from GoDaddy. As a UI/UX developer I think it looks really good and professional!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Mike",
    username: "@mike",
    body: "The attention to detail in this product is unparalleled. Bravo!",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Muhammet Can",
    username: "@Muhammet",
    body: "Hi, I love this type of work a lot, you frontend guru's make the life a lot easier for us, backend plebs. ",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Chris",
    username: "@chris",
    body: "The templates are not only beautiful but also highly functional.",
    img: "https://avatar.vercel.sh/chris",
  },
  {
    name: "Samuel May",
    username: "@Samuel",
    body: "Very crisp and polished site design, which immediately gives me faith in the quality of the UI templates/components I'd potentially be buying.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Ari Nakos",
    username: "@Ari",
    body: "It's a brilliant implementation of an oft encountered problem as an indie full-stack developer, namely the creation of components, some of which may be new.",
    img: "https://avatar.vercel.sh/tom",
  },
  {
    name: "Anna",
    username: "@anna",
    body: "The variety of templates saved me so much time. Thank you, UiForest!",
    img: "https://avatar.vercel.sh/anna",
  },
]



// // Marquee component
// const Marquee = ({
//   children,
//   className,
//   reverse = false,
//   pauseOnHover = false,
// }: {
//   children: React.ReactNode
//   className?: string
//   reverse?: boolean
//   pauseOnHover?: boolean
// }) => {
//   return (
//     <div
//       className={cn(
//         "flex w-full overflow-hidden [--duration:60s] [--gap:1rem]",
//         pauseOnHover && "[--play-state:running] hover:[--play-state:paused]",
//         className,
//       )}
//     >
//       <div
//         className="flex animate-marquee items-center gap-[--gap] [animation-direction:var(--direction)] [animation-duration:var(--duration)] [animation-play-state:var(--play-state)]"
//         style={{ "--direction": reverse ? "reverse" : "normal" } as React.CSSProperties}
//       >
//         {children}
//         {children}
//       </div>
//     </div>
//   )
// }

// ReviewCard component with responsive design
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  const isMobile = useMobile()

  return (
    <motion.figure
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 md:p-6",
        "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900",
        "border border-zinc-700/50 hover:border-zinc-600/80",
        "shadow-lg shadow-black/20",
        "transition-all duration-300 ease-in-out",
        "backdrop-blur-sm",
        "w-[260px] md:w-[320px]",
        "h-auto min-h-[180px] md:min-h-[200px]",
        "flex flex-col justify-between",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full ring-2 ring-zinc-500/30">
          <Image
            className="object-cover"
            fill
            sizes="(max-width: 768px) 40px, 48px"
            alt={`${name}'s profile picture`}
            src={img || "/placeholder.svg"}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base md:text-lg font-semibold text-white">{name}</figcaption>
          <p className="text-xs md:text-sm font-medium text-zinc-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 md:mt-4 text-xs md:text-sm text-zinc-300 line-clamp-4">{body}</blockquote>
    </motion.figure>
  )
}


export default function Testimonials() {
  const isMobile = useMobile()
  const [rowCount, setRowCount] = useState(3)

  // Adjust number of rows based on screen size
  useEffect(() => {
    setRowCount(isMobile ? 2 : 3)
  }, [isMobile])

  // Distribute reviews across rows
  const distributeReviews = () => {
    const result = []
    const itemsPerRow = Math.ceil(reviews.length / rowCount)

    for (let i = 0; i < rowCount; i++) {
      const startIndex = i * itemsPerRow
      const endIndex = Math.min(startIndex + itemsPerRow, reviews.length)
      result.push(reviews.slice(startIndex, endIndex))
    }

    return result
  }

  const rows = distributeReviews()

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-12 md:py-16 lg:py-20 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1),rgba(0,0,0,0))]"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4 mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">What Our Users Say</h2>
        <p className="text-zinc-400 max-w-md mx-auto text-sm md:text-base">
          Join thousands of satisfied customers who have transformed their workflow
        </p>
      </motion.div>

      <div className="relative flex w-full flex-col items-center justify-center flex-1 py-4 md:py-8">
        {rows.map((row, index) => (
          <Marquee
            key={index}
            pauseOnHover
            reverse={index % 2 === 0}
            className={cn(
              "py-3 md:py-4",
              isMobile ? "[--duration:30s]" : "[--duration:40s]",
              index === 0 ? "pt-8" : "",
              index === rows.length - 1 ? "pb-8" : "",
            )}
          >
            {row.map((review) => (
              <div key={review.username} className="px-2 md:px-4">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
        ))}

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-black via-black/90 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  )
}




function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      // Initial check
      checkIsMobile()

      // Add event listener
      window.addEventListener("resize", checkIsMobile)

      // Clean up
      return () => window.removeEventListener("resize", checkIsMobile)
    }
  }, [breakpoint])

  return isMobile
}
