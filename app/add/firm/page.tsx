'use client';
import { useState } from 'react';

const AddFirmPage = () => {
    const [firmName, setFirmName] = useState('');
    const [firmDescription, setFirmDescription] = useState('');
    const [firmLogo, setFirmLogo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Firma qo'shish uchun API qo'ng'irog'i yoki ma'lumotlar bazasiga saqlash amallari
        console.log({ firmName, firmDescription, firmLogo });
        // Formani tozalash
        setFirmName('');
        setFirmDescription('');
        setFirmLogo('');
    };

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Firma Qo`shish</h1>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <div>
                    <label htmlFor="firmName" className="block text-lg font-semibold">Firma Nomi</label>
                    <input
                        id="firmName"
                        type="text"
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Firma nomini kiriting"
                    />
                </div>

                <div>
                    <label htmlFor="firmDescription" className="block text-lg font-semibold">Firma Ta`rifi</label>
                    <textarea
                        id="firmDescription"
                        value={firmDescription}
                        onChange={(e) => setFirmDescription(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Firma haqida qisqacha ma'lumot kiriting"
                    />
                </div>

                <div>
                    <label htmlFor="firmLogo" className="block text-lg font-semibold">Firma Logotipi URL</label>
                    <input
                        id="firmLogo"
                        type="text"
                        value={firmLogo}
                        onChange={(e) => setFirmLogo(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Logotip URL manzilini kiriting"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Qo`shish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFirmPage;
