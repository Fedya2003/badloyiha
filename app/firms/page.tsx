"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

type Firm = {
    _id: string
    name: string
    logo: string
    description: string
}

export default function FirmsPage() {
    const [firms, setFirms] = useState<Firm[]>([])
    const [loading, setLoading] = useState(true) // Loading holati

    // Firmalarni API orqali olish
    useEffect(() => {
        const fetchFirms = async () => {
            try {
                const response = await fetch("/api/firm")
                const data = await response.json()

                if (Array.isArray(data)) {
                    setFirms(data)
                }
            } catch (error) {
                console.error("Firmalarni olishda xatolik:", error)
            } finally {
                setLoading(false) // Ma'lumotlar kelgandan keyin loading holatini o'chirish
            }
        }

        fetchFirms()
    }, [])

    // Agar loading bo'lsa, loading spinnerni ko'rsatish
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div> {/* Spinner */}
            </div>
        )
    }

    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Firmalar</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {firms.map((firm) => (
                    <Link key={firm._id} href={`/firms/${firm._id}`}>
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                            <div className="w-full h-40 relative mb-4">
                                <Image
                                    src={firm.logo}
                                    alt={firm.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-xl font-semibold">{firm.name}</h2>
                            <p className="text-muted-foreground text-sm">{firm.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
