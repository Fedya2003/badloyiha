import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import Image from "next/image"

type Bad = {
    id: string
    name: string
    image: string
    description: string
    firm: string
    category: string
}

const bads: Bad[] = [
    {
        id: "bad1",
        name: "Vitamin C 1000mg",
        image: "/images/bads/vitamin-c.jpg",
        description: "Immunitetni mustahkamlashga yordam beradi.",
        firm: "Nature's Bounty",
        category: "Vitaminlar",
    },
    {
        id: "bad2",
        name: "Omega-3 Fish Oil",
        image: "/images/bads/omega-3.jpg",
        description: "Yurak sog'ligini qo'llab-quvvatlaydi.",
        firm: "Optimum Nutrition",
        category: "Omega-3",
    },
    {
        id: "bad3",
        name: "Multivitamin",
        image: "/images/bads/multivitamin.jpg",
        description: "Kundalik vitamin va minerallarni ta'minlaydi.",
        firm: "Centrum",
        category: "Vitaminlar",
    },
]

export default function BadsPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-8">BADlar</h1>

            <Table>
                <TableCaption>A list of all available BADs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Rasm</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Tavsif</TableHead>
                        <TableHead>Firma</TableHead>
                        <TableHead>Kategoriya</TableHead>
                        <TableHead className="text-right">Detallar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bads.map((bad) => (
                        <TableRow key={bad.id}>
                            <TableCell>
                                <Image
                                    src={bad.image}
                                    alt={bad.name}
                                    width={64}
                                    height={64}
                                    className="object-cover rounded"
                                />
                            </TableCell>
                            <TableCell className="font-medium">{bad.name}</TableCell>
                            <TableCell>{bad.description}</TableCell>
                            <TableCell>{bad.firm}</TableCell>
                            <TableCell>{bad.category}</TableCell>
                            <TableCell className="text-right">
                                <Link href={`/bads/${bad.id}`}>
                                    Batafsil
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>Total</TableCell>
                        <TableCell className="text-right">{bads.length} BADs</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
