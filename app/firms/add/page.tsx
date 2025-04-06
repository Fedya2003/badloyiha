"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { FirmType } from "@/models/firm" // Firma modelining interfeysi

export default function AddFirmPage() {
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const firmData: FirmType = {
            name,
        }

        try {
            const res = await fetch("/api/firms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(firmData),
            })

            if (res.ok) {
                toast.success("Firma muvaffaqiyatli qo'shildi!")
                router.push("/firms") // Firma ro'yxatiga qaytish
            } else {
                toast.error("Nimadir noto'g'ri ketdi, qaytadan urinib ko'ring!")
            }
        } catch (error: unknown) {
            // Xatolikni qayta ishlash va log qilish
            if (error instanceof Error) {
                console.error("Firma qo'shishda xatolik:", error.message)
            }
            toast.error("Xatolik yuz berdi, qaytadan urinib ko'ring!")
        }
    }

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto p-6 bg-blue-500 shadow-xl rounded-lg border border-gray-200">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Yangi Firma qo`shish</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Firma nomi</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            placeholder="Firma nomini kiriting"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                            Firma Qo`shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
