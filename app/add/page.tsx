'use client'

import Link from 'next/link'

export default function AddPage() {
    return (
        <div className="container py-16">
            <h1 className="text-3xl font-bold text-center mb-12">Qo‘shish bo‘limi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <Link
                    href="/add/bad"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center transition"
                >
                    <span className="text-5xl mb-4">💊</span>
                    <h2 className="text-2xl font-semibold">BAD Qo‘shish</h2>
                </Link>

                <Link
                    href="/add/firm"
                    className="bg-green-500 hover:bg-green-600 text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center transition"
                >
                    <span className="text-5xl mb-4">🏬</span>
                    <h2 className="text-2xl font-semibold">Firma Qo‘shish</h2>
                </Link>

            </div>
        </div>
    )
}
