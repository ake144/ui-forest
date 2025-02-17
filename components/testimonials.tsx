import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { motion } from "framer-motion"
import Image from "next/image"

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
  return (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={cn(
        "relative h-48 w-64 cursor-pointer overflow-hidden rounded-2xl p-6",
        "bg-gradient-to-br from-zinc-900 to-zinc-800",
        "border border-zinc-700 hover:border-zinc-600",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image className="rounded-full" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-white">{name}</figcaption>
          <p className="text-sm font-medium text-zinc-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-zinc-300">{body}</blockquote>
    </motion.figure>
  )
}

export default function Testimonials() {
  const rows = [
    reviews.slice(0, Math.ceil(reviews.length / 3)),
    reviews.slice(Math.ceil(reviews.length / 3), Math.ceil((2 * reviews.length) / 3)),
    reviews.slice(Math.ceil((2 * reviews.length) / 3)),
  ]

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-bold text-white"
      >
        What Our Users Say
      </motion.h2>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {rows.map((row, index) => (
          <Marquee
            key={index}
            pauseOnHover
            reverse={index % 2 === 0}
            className="py-4 [--duration:40s]"
          >
            {row.map((review) => (
              <div key={review.username} className="mx-4">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
        ))}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  )
}