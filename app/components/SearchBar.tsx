"use client"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar() {
    const [query, setQuery] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        // Keyinchalik MongoDB'dan real-time qidiruv shu yerga yoziladi
    }

    return (
        <div className="w-full max-w-2xl mx-auto my-8 px-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                    type="text"
                    placeholder="BAD nomini kiriting..."
                    value={query}
                    onChange={handleSearch}
                    className="pl-10 py-6 text-lg"
                />
            </div>
        </div>
    )
}
