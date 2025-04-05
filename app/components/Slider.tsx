import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image" // next/image import qilish
import React from "react"

function CarouselDApiDemo() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto max-w-xs">
            <Carousel setApi={setApi} className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* Image komponentidan foydalanish */}
                                    <Image
                                        src={`/images/bad${index + 1}.jpg`} // Rasm manzilini to'g'ri qo'ying
                                        alt={`Image ${index + 1}`}
                                        width={500}  // O'lchamni o'zgartirish
                                        height={500} // O'lchamni o'zgartirish
                                        className="rounded-lg object-cover"
                                    />
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

export default CarouselDApiDemo