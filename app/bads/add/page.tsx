"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify" // Xabarlar chiqarish uchun
import { BadType } from "@/models/bad" // BadType modeliga moslashtirish

export default function AddBadPage() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [firm, setFirm] = useState("")
    const [category, setCategory] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const badData: BadType = {
            name,
            description,
            image,
            firm,
            category,
        }

        try {
            const res = await fetch("/api/bads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(badData),
            })

            if (res.ok) {
                toast.success("BAD muvaffaqiyatli qo'shildi!")
                router.push("/bads") // BADlar ro'yxatiga qaytish
            } else {
                toast.error("Nimadir noto'g'ri ketdi, qaytadan urinib ko'ring!")
            }
        } catch (error: unknown) { // error: any bo'lsin
            console.error("Xatolik yuz berdi:", error) // Xatolikni konsolga chiqarish
            toast.error("Xatolik yuz berdi, qaytadan urinib ko'ring!")
        }
    }

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto p-6 bg-blue-500 shadow-xl rounded-lg border border-gray-200">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Yangi BAD qo`shish</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Ismi</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-white">Tavsif</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-white">Rasm URL</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="firm" className="block text-sm font-medium text-white">Firma</label>
                        <input
                            type="text"
                            id="firm"
                            value={firm}
                            onChange={(e) => setFirm(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-white">Kategoriya</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                            Qo`shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
