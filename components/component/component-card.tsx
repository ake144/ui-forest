"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import dynamic from "next/dynamic";

const CardSpotlight = dynamic(() => import("../ui/card-spootlight").then((mod) => mod.CardSpotlight), {
  ssr: false,
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
    <CardContainer className="flex flex-col h-full px-4 mx-auto md:px-0 overflow-hidden md:mx-0">
      <CardBody className="bg-zinc-900 px-4 py-6 mx-2 border border-zinc-800 rounded-xl overflow-hidden flex-1 flex flex-col">
        <CardItem
          translateZ="100"
          className="w-full aspect-video relative overflow-hidden rounded-t-xl"
        >
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </CardItem>
        <div className="flex-1 flex flex-col">
          <CardItem translateZ="50" className="flex items-center justify-center md:justify-between mb-4">
            <h3 className="text-lg ml-3 md:ml-0   font-semibold text-white">{title}</h3>
            <Badge variant="secondary" className="bg-zinc-800 text-white">
              {count} items
            </Badge>
            <span className="text-sm font-bold text-white ml-4"> {price === 0 ? 'Free' : `${price}`}</span>
          </CardItem>
          <CardItem translateZ="60" className="text-sm ml-3 md:ml-0  text-zinc-400 flex-grow">
            {description}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}