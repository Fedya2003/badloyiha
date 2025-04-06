"use client"

import { useState } from "react"

export default function ContactPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await fetch("/api/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            })

            setSuccess(true)
            setName("")
            setEmail("")
            setMessage("")
        } catch (error) {
            console.error("Xatolik:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center shadow-xl rounded-lg">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Aloqa</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                        Ismingiz
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ismingizni kiriting"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                        Email (ixtiyoriy)
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email (ixtiyoriy)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                        Xabaringiz
                    </label>
                    <textarea
                        id="message"
                        placeholder="Xabaringizni kiriting"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[150px]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors duration-300 disabled:bg-gray-400"
                >
                    {loading ? "Yuborilmoqda..." : "Yuborish"}
                </button>

                {success && (
                    <p className="text-green-600 text-center mt-4">Xabaringiz yuborildi! Rahmat!</p>
                )}
            </form>
        </div>
    )
}
