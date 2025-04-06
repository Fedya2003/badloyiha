"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const categories = [
    {
        id: 1,
        name: "Vitaminlar",
        image: "/images/vitamin.jpg",
        description: "Sog‘liq uchun muhim vitaminlar",
    },
    {
        id: 2,
        name: "Minerallar",
        image: "/images/mineral.jpg",
        description: "Tanadagi muvozanatni saqlaydi",
    },
    {
        id: 3,
        name: "O‘simlik ekstraktlari",
        image: "/images/plant.jpg",
        description: "Tabiiy o‘simliklardan olingan",
    },
]

export default function CategoriesPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Kategoriyalar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <Link key={cat.id} href={`/categories/${cat.id}`}>
                        <Card className="hover:shadow-xl transition">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <CardContent className="p-4">
                                <h2 className="text-2xl font-semibold">{cat.name}</h2>
                                <p className="text-muted-foreground">{cat.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
