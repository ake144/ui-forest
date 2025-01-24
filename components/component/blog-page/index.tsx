'use client'


import Image from "next/image"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"


const Posts =[
    {
        title:'tough time',
        date:12-3-2022,
        imageUrl:'/blog-content.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
    {
        title:'Longest time in the year',
        date:'12-3-2022',
        imageUrl:'/blog-content.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
    {
        title:'Sweatest moment on my life time',
        date:12-3-2022,
        imageUrl:'/blog-content.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
    {
        title:'Sweatest month of the year',
        date:12-3-2022,
        imageUrl:'/blog.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
    {
        title:'Sweatest weekends ',
        date:12-3-2022,
        imageUrl:'/blog.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
    {
        title:'Sweatest and unforgoteable time',
        date:12-3-2022,
        imageUrl:'/blog.png',
        contetn:'this year is full of shit and it is somehow a  bit challenging',
        link:''

    },
]



export default function BlogPage(){
    return(
        <div className="min-h-screen  text-white flex flex-col items-center justify-center p-4">
              
              <h1>All Blog Posts</h1>

              <div className="grid md:grid-cols-3 grid-cols-2 gap-6 ">
                    {
                        Posts.map((post,index)=>(
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                                >
                                  <CardContainer  className=" border rounded-lg flex flex-col h-auto overflow-hidden m-5 " >
                                <div className="flex w-full">
                                  <Image
                                  src={post.imageUrl}
                                  alt="blog post image"     
                                  height={80}
                                       width={80}
                                       className="w-full h-[280px]"
                                    />
                                </div>
                               
                               <div className="text-sm flex items-start justify-start p-3 m-4">
                                  {post.date}
                                  </div>
                                  
                                  <div className="text-xl font-bold space-x-2 p-3 ">
                                    {post.title}
                                  </div>
                                  
                                  <div className="p-3 m-3 ">
                                    {post.contetn}
                                  </div>

                        </CardContainer> 
                        
                    </motion.div>
                        ))
                    }

              </div>
       
        </div>
    )
}