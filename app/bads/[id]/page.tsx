// app/bads/[id]/page.tsx
'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { BadType } from "@/models/bad";
import Image from "next/image";

export default function BadDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();

    // Unwrapping params using React.use()
    const { id } = React.use(params);

    const [bad, setBad] = useState<BadType | null>(null);

    useEffect(() => {
        const fetchBad = async () => {
            if (!id) return;

            try {
                const res = await fetch(`/api/bads/${id}`);
                const data = await res.json();

                if (res.ok) {
                    setBad(data);
                } else {
                    toast.error(data.message || "Xatolik yuz berdi");
                }
            } catch {
                toast.error("Xatolik yuz berdi");
            }
        };

        fetchBad();
    }, [id]);

    if (!bad) {
        return (
            <div className="container py-12">
                <h1 className="text-4xl font-bold text-center mb-8">BAD topilmadi</h1>
                <p className="text-center">Kiritilgan BAD mavjud emas.</p>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-8">{bad.name}</h1>
            <div className="max-w-2xl mx-auto space-y-4">
                <div>
                    {/* Image komponentini ishlatish */}
                    <Image
                        src={bad.image}
                        alt={bad.name}
                        width={500} // O'lchamlarni belgilash
                        height={300} // O'lchamlarni belgilash
                        className="w-full rounded-md"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Tavsif:</h2>
                    <p>{bad.description}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Firma:</h2>
                    <p>{bad.firm}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Kategoriya:</h2>
                    <p>{bad.category}</p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <button
                    onClick={() => router.push("/bads")}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                    Orqaga qaytish
                </button>
            </div>
        </div>
    );
}

