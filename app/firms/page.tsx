import Link from "next/link"
import Image from "next/image"

type Firm = {
    id: string
    name: string
    logo: string
    description: string
}

const firms: Firm[] = [
    {
        id: "1",
        name: "Nature's Bounty",
        logo: "/images/firms/natures-bounty.png",
        description: "Amerikadagi mashhur sog‘lomlik mahsulotlari brendi.",
    },
    {
        id: "2",
        name: "Solgar",
        logo: "/images/firms/solgar.png",
        description: "Vitamin va qo‘shimchalarda 70 yillik tajriba.",
    },
    {
        id: "3",
        name: "Now Foods",
        logo: "/images/firms/now-foods.png",
        description: "Organik va tabiiy mahsulotlarga e’tibor beruvchi kompaniya.",
    },
]

export default function FirmsPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Firmalar</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {firms.map((firm) => (
                    <Link key={firm.id} href={`/firms/${firm.id}`}>
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
