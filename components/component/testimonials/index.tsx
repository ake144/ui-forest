"use client"

import React from "react"


import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Marquee } from "@/components/ui/marquee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const testimonials = [
  {
    name: "Sarah Johnson",
    username: "@sarahj",
    body: "Working with this professional has transformed my project. Their expertise and dedication are unmatched!",
    img: "/profile.png",
    role: "Project Manager"
  },
  {
    name: "Michael Chen",
    username: "@mikechen",
    body: "A true innovator! Their approach to design has elevated our user experience significantly.",
    img: "/profile.png",
    role: "UX Designer"
  },
  {
    name: "Emily Rodriguez",
    username: "@emrod",
    body: "Their analytical skills are top-notch. We saw measurable improvements thanks to their insights.",
    img: "/profile.png",
    role: "Data Scientist"
  },
  {
    name: "Alex Thompson",
    username: "@alexthom",
    body: "Efficient and reliable, they helped streamline our workflows and optimize our project outcomes.",
    img: "/hero.png",
    role: "Product Manager"
  },
  {
    name: "Olivia Parker",
    username: "@oliviap",
    body: "As a freelancer, collaborating with them was a game-changer. Their professionalism is commendable.",
    img: "/profile.png",
    role: "Freelance Writer"
  },
  {
    name: "David Kim",
    username: "@davidk",
    body: "Their strategies have significantly enhanced our marketing efforts. A valuable asset to any team!",
    img: "/profile.png",
    role: "Marketing Specialist"
  },
]

const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
  role,
}: {
  img: string
  name: string
  username: string
  body: string
  role: string
}) => {
  return (
    <Card className="w-[350px] mx-4 my-6 bg-background/80 backdrop-blur-sm hover:bg-accent transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            {role}
          </Badge>
        </div>
        <blockquote className="text-sm italic">{body}</blockquote>
      </CardContent>
    </Card>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What People Say
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover how my work has positively impacted clients and collaborators alike.
        </p>
        <div className="relative w-full overflow-hidden">
          <Marquee className="py-4" pauseOnHover speed={20}>
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee className="py-4" pauseOnHover speed={20} reverse>
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  )
}