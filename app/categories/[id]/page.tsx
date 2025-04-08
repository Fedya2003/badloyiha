"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Heart, Gem, Droplet, Dumbbell, Baby } from "lucide-react"

interface Bad {
    name: string
    description: string
}

interface Category {
    name: string
    icon: string
}

const getIcon = (icon: string) => {
    switch (icon) {
        case "sport":
            return <Dumbbell size={48} />
        case "health":
            return <Heart size={48} />
        case "mineral":
            return <Gem size={48} />
        case "vitamin":
            return <Droplet size={48} />
        case "children":
            return <Baby size={48} />
        default:
            return null
    }
}

const CategoriesPage = () => {
    const [category, setCategory] = useState<Category | null>(null)
    const [bads, setBads] = useState<Bad[]>([]) // BADlar uchun to‘g‘ri tip
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { id } = router.query // URL orqali kategoriya ID ni olish

    useEffect(() => {
        const fetchCategoryData = async () => {
            if (!id) return

            setLoading(true)
            try {
                const res = await fetch(`/api/categories/${id}`)
                const data = await res.json()
                if (res.ok) {
                    setCategory(data.category)
                    setBads(data.bads) // BADlarni saqlash
                } else {
                    console.error("Kategoriya yoki BADlar topilmadi")
                }
            } catch (error) {
                console.error("Xatolik yuz berdi:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCategoryData()
    }, [id])

    if (loading) return <p>Yuklanmoqda...</p>

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            {category ? (
                <>
                    <div className="flex items-center justify-center mb-4 w-full">
                        <span className="flex-grow-0 flex-shrink-0 mr-4">
                            {getIcon(category.icon)}
                        </span>
                        <h2 className="text-3xl font-semibold">{category.name}</h2>
                    </div>

                    <h3 className="text-2xl font-semibold">Tegishli BADlar:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bads.map((bad, index) => (
                            <div key={index} className="p-6 bg-blue-500 shadow-xl rounded-lg border border-gray-200">
                                <h4 className="text-lg text-white">{bad.name}</h4>
                                <p className="text-white">{bad.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Kategoriya topilmadi.</p>
            )}
        </div>
    )
}

export default CategoriesPage
