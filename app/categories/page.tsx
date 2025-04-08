"use client"
import Link from 'next/link'
import { Heart, Gem, Droplet, Dumbbell, Baby } from "lucide-react"

const categoriesData = [
    { name: "Sport", icon: "sport", id: "1" },
    { name: "Sog'lik", icon: "health", id: "2" },
    { name: "Mineral", icon: "mineral", id: "3" },
    { name: "Vitamin", icon: "vitamin", id: "4" },
    { name: "Bolalar", icon: "children", id: "5" },
]

const getIcon = (icon: string) => {
    switch (icon) {
        case "sport":
            return <Dumbbell size={98} />
        case "health":
            return <Heart size={98} />
        case "mineral":
            return <Gem size={98} />
        case "vitamin":
            return <Droplet size={98} />
        case "children":
            return <Baby size={98} />
        default:
            return null
    }
}

export default function CategoriesPage() {
    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Kategoriyalar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriesData.map((category) => (
                    <Link key={category.id} href={`/categories/${category.id}`} passHref>
                        <div className="p-6 bg-blue-500 shadow-xl rounded-lg border border-gray-200">
                            <div className="flex flex-col justify-center items-center">
                                {/* Ikona 3/2 bo'shliqni egallaydi, vertikal tarzda */}
                                <div className="mb-8">
                                    {getIcon(category.icon)}
                                </div>
                                {/* Matn 3/1 bo'shliqni egallaydi */}
                                <h2 className="text-xl font-semibold text-white text-center">{category.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
