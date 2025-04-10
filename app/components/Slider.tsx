"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

const defaultBAD = [
    {
        name: "Vitamin D3",
        company: "Now",
        description: "Suyaklar va immunitet uchun foydali quyosh vitamini.",
        image: "/images/default-d3.jpg", // `public/images/` papkasida rasm bo‘lishi kerak
    },
]

export default function CarouselDApiDemo() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [bads, setBads] = useState(defaultBAD)

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const res = await fetch("/api/favourite-bads")
                const data = await res.json()
                if (data.length > 0) {
                    setBads(data)
                }
            } catch (err) {
                console.error("Slayder uchun ma'lumotlarni olishda xatolik:", err)
            }
        }

        fetchFavourites()
    }, [])

    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto w-full max-w-md">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {bads.map((bad, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-4">
                                    <Image
                                        src={bad.image || "/images/default-d3.jpg"}
                                        alt={bad.name}
                                        width={300}
                                        height={300}
                                        className="rounded-lg object-cover mb-4"
                                    />
                                    <h3 className="text-lg font-bold">{bad.name}</h3>
                                    <p className="text-sm text-gray-500">{bad.company}</p>
                                    <p className="text-sm text-center mt-2">{bad.description}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}
