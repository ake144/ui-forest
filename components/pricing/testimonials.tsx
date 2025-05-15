import Image from "next/image"

// Define types for our data
type ProfileImage = {
  src: string
  alt: string
  flag: string
}

type Testimonial = {
  name: string
  title: string
  image: string
  text: string
}

export default function TestimonialsSection() {
  // Profile images data with country flags
  const profileImages: ProfileImage[] = [
    { src: "/images/profile1.png", alt: "Profile 1", flag: "/images/flag-uae.png" },
    { src: "/images/profile2.png", alt: "Profile 2", flag: "/images/flag-usa.png" },
    { src: "/images/profile3.png", alt: "Profile 3", flag: "/images/flag-uk.png" },
    { src: "/images/profile4.png", alt: "Profile 4", flag: "/images/flag-india.png" },
    { src: "/images/profile5.png", alt: "Profile 5", flag: "/images/flag-india.png" },
    { src: "/images/profile6.png", alt: "Profile 6", flag: "/images/flag-mexico.png" },
    { src: "/images/profile7.png", alt: "Profile 7", flag: "/images/flag-sa.png" },
    { src: "/images/profile8.png", alt: "Profile 8", flag: "/images/flag-nepal.png" },
    { src: "/images/profile9.png", alt: "Profile 9", flag: "/images/flag-india.png" },
    { src: "/images/profile10.png", alt: "Profile 10", flag: "/images/flag-india.png" },
    { src: "/images/profile11.png", alt: "Profile 11", flag: "/images/flag-india.png" },
    { src: "/images/profile12.png", alt: "Profile 12", flag: "/images/flag-india.png" },
  ]

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "MK",
      title: "Founder - @bubutales.net",
      image: "/images/dudu.png",
      text: "First of all I like your website name: Ui-Forest. It sounds like somethig you want to click. The landing page is nice. I like colours and elements you displayed",
    },
    {
      name: "Fred Wanders",
      title: "Designer and developer",
      image: "/images/fred.png",
      text: "This is really cool! I've used many component libraries in the past (Bootstrap, MUI, Chakra, Amplify) but I haven't seen components like yours on any of them.",
    },
    {
      name: "Zinnedine",
      title: "Web designer",
      image: "/images/zinnedine.png",
      text: "This kit is very helpful and time saving! Very organized and easy to use! made my life easier and saved me a lot of time creating single components! A 5-star for sure.",
    },
    {
      name: "EasyContent",
      title: "Founder - @easycontent",
      image: "/images/aneeta.png",
      text: "The first thing I like about Ui-Forest is that it solves a real problem many developers face – wasting time designing and searching for the right components. Instead of spending hours tweaking CSS or scrolling through endless template pages, here you have everything in one place, well-organized and ready to use.",
    },
    {
      name: "Pratham",
      title: "Web designer & developer",
      image: "/images/pratham.png",
      text: "UiForest UI is a great deal, easy to use, and has everything I need for my projects.",
    },
    {
      name: "Ari Nakos",
      title: "Cofounder - @Ari",
      image: "/images/breeje.png",
      text: "It's a brilliant implementation of an oft encountered problem as an indie full-stack developer, namely the creation of components, some of which may be new",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Profile images grid */}
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-16">
        {profileImages.map((profile, index) => (
          <div key={index} className="relative flex justify-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={profile.src || "/placeholder.svg"}
                alt={profile.alt}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6">
                <Image
                  src={profile.flag || "/placeholder.svg"}
                  alt="Country flag"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16">
        Trusted by leading designers and agencies
      </h2>

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-zinc-900 rounded  p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">{testimonial.name}</h3>
                <p className="text-zinc-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
