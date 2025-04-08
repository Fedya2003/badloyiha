"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function AddCategoryPage() {
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const categoryData = { name }

        try {
            const res = await fetch("/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(categoryData),
            })

            if (res.ok) {
                toast.success("Kategoriya muvaffaqiyatli qo'shildi!")
                router.push("/categories") // Kategoriyalar sahifasiga yo'naltirish
            } else {
                toast.error("Nimadir noto'g'ri ketdi. Iltimos, qaytadan urinib ko'ring.")
            }
        } catch {
            toast.error("Kategoriya qo'shishda xatolik yuz berdi.")
        }
    }

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto p-6 bg-green-500 shadow-xl rounded-lg border border-gray-200">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Yangi Kategoriya qo`shish</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Kategoriya nomi</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
                            placeholder="Kategoriya nomini kiriting"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                            Kategoriya Qo`shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
