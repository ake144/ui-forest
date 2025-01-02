"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
// import { CardSpotlight } from "../ui/card-spootlight"
import dynamic from "next/dynamic";


const CardSpotlight = dynamic(() => import("../ui/card-spootlight").then((mod) => mod.CardSpotlight), {
  ssr: false, // Disable server-side rendering for this component
});
interface ComponentCardProps {
  title: string
  description: string
  imageUrl: string
  count: number
  price: number
}

export function ComponentCard({ title, description, imageUrl, count, price }: ComponentCardProps) {
  return (
    // <CardSpotlight className="w-full">
      <CardContainer className="flex flex-col h-full">
        <CardBody className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex-1 flex flex-col">
          <CardItem
            translateZ="100"
            className="w-full aspect-video relative overflow-hidden rounded-t-xl"
          >
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </CardItem>
          <div className="p-6 flex-1 flex flex-col">
            <CardItem translateZ="50" className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <Badge variant="secondary" className="bg-zinc-800 text-white">
                {count} items
              </Badge>
            </CardItem>
            <CardItem translateZ="60" className="text-sm text-zinc-400 flex-grow">
              {description}
            </CardItem>
            <CardItem translateZ="70" className="mt-6">
              <div className="flex items-center flex-row  justify-between">
                <span className="text-2xl flex font-bold flex-start justify-start text-white">${price}</span>
                <button className="px-4 flex items-end justify-end py-2 bg-white text-black rounded-md hover:bg-zinc-200 transition-colors text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    // </CardSpotlight>
  )
}

