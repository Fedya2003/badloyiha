// page.tsx

import { MongoClient, WithId, Document } from 'mongodb';
import { notFound } from 'next/navigation';

type Bad = {
    _id: string;
    name: string;
    description: string;
    image: string;
    firm: string;
    category: string;
};

type Props = {
    params: {
        id: string;
    };
};

export async function generateStaticParams() {
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db();
    const categories = await db.collection('bads').distinct('category');
    await client.close();

    return categories.map((category: string) => ({
        id: category,
    }));
}

export async function generateMetadata({ params }: Props) {
    return {
        title: `Kategoriya: ${params.id}`,
        description: `Kategoriya: ${params.id} dagi BADlar haqida ma'lumotlar`,
    };
}

export default async function CategoryPage({ params }: Props) {
    console.log(params);

    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db();

    const result = await db.collection('bads').find({ category: params.id }).toArray();

    const bads: Bad[] = result.map((item: WithId<Document>) => ({
        _id: item._id.toString(),
        name: item.name,
        description: item.description,
        image: item.image,
        firm: item.firm,
        category: item.category,
    }));

    await client.close();

    if (bads.length === 0) {
        notFound(); // 404 sahifa chiqariladi
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Kategoriya: {params.id}</h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bads.map((bad) => (
                    <li key={bad._id} className="border p-4 rounded-xl shadow">
                        <img src={bad.image} alt={bad.name} className="w-full h-32 object-contain mb-2" />
                        <h2 className="text-lg font-semibold">{bad.name}</h2>
                        <p className="text-sm text-gray-500">{bad.firm}</p>
                        <p className="text-sm">{bad.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
