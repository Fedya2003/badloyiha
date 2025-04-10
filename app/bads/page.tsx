// app/bads/page.tsx

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import connectToDatabase from "@/lib/mongodb";
import Bad from "@/models/bad";

// Bad turini yaratish
type Bad = {
    _id: string;
    name: string;
    image: string;
    description: string;
    firm: string;
    category: string;
};

export default async function BadsPage() {
    // MongoDB bilan ulanish va badlarni olish
    await connectToDatabase();
    const bads = await Bad.find({}).lean();

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
                        <TableRow key={bad?._id}>
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
                                <Link href={`/bads/${bad._id}`}>
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
    );
}
