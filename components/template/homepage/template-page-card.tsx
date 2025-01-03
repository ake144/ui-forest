"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

import Link from "next/link"
import { CardSpotlight } from "@/components/ui/card-spootlight"
import { Button } from "@/components/ui/button"


type TemplatesType = {
    name: string;
    description: string;
    price: number;
    image: string;
    link:string;
    buyLink:string;
    stack:string[];
  }
  

export function TemplatesCard({ name, description, image, price,buyLink,link, stack }: TemplatesType) {
  return (
    <CardSpotlight className="w-full">
              <div className="text-2xl font-semibold  ">
                  {name}

              </div>

      <CardContainer className="flex flex-col h-full">
        <CardBody className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex-1 flex flex-col">
          <CardItem
            translateZ="100"
            className="w-full aspect-video relative overflow-hidden rounded-t-xl"
          >
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </CardItem>
          <div className="p-6 flex-1 flex flex-col">
            <CardItem translateZ="50" className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              {/* <Badge variant="secondary" className="bg-zinc-800 text-white">
                {count} items
              </Badge> */}
            </CardItem>
            <CardItem translateZ="60" className="text-sm text-zinc-400 flex-grow">
              {description}
            </CardItem>
            <CardItem>
                {(stack.map((stacks:string, index:number)=>(
                    <div className="gap-5 flex flex-row " key={index}>
                        <div className="flex  ">
                             {stacks}
                        </div>
                           
                    </div>
                )))}
            </CardItem>
            <CardItem translateZ="70" className="mt-6">
              <div className="flex items-center flex-row  justify-between">
                <span className="text-2xl flex font-bold flex-start justify-start text-white">{price === 0 ? 'Free' : `$${price}`}</span>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

        <div  className="flex flex-row justify-between ">
           <div className="flex  z-10">
             <Button>
                 <Link  href={buyLink}>buy</Link> 
            </Button>
  
           </div>
            <div className="items-center justify-center z-10 flex">
                <Button>
                       <Link href={link}>Demo</Link>
                </Button>
               
            </div>
        </div>
    </CardSpotlight>
  )
}

