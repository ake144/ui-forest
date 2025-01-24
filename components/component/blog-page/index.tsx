
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"



const Posts =[
    {
        title: "Conversations with London Made & Co.",
        date: "12 Mar 2022",
        imageUrl: "/blog-content.png",
        content: "Discover how this design studio approaches creative problem-solving and brand identity.",
        featured: true,
        category: "Interview",
      },
      {
        title: "A Cognitive Insurance Theory: Death Course for UX Designers",
        date: "15 Mar 2022",
        imageUrl: "/blog-content.png",
        content: "Exploring the intersection of psychology and user experience design.",
        featured: true,
        category: "Design Theory",
      },
    {
        title:'tough time',
        date:12-3-2022,
        imageUrl:'/design1.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:'',
        featured: false,
        category: "Interview",

    },
    {
        title:'Longest time in the year',
        date:'12-3-2022',
        imageUrl:'/blog-content.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:'',
        featured: true,
        category: "Interview",

    },
    {
        title:'Sweatest moment on my life time',
        date:12-3-2022,
        imageUrl:'/blog-content.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:'',
        featured: false,
        category: "Interview",

    },
    {
        title:'Sweatest month of the year',
        date:12-3-2022,
        imageUrl:'/blog.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:'',
        featured: false,
        category: "Interview",

    },
   
]



export default function BlogPage() {
  const featuredPosts = Posts.filter((post) => post.featured)
  const regularPosts = Posts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-8">Recent blog posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="group h-full overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardBody className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-3 mb-4">{post.content}</p>
                    <Button variant="ghost" className="group-hover:bg-background">
                      Read more
                    </Button>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-8">All blog posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="group h-full overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardBody className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-24">
        <NewsletterForm />
      </div>
    </div>
  )
}

