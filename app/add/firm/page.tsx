'use client';
import { useState } from 'react';

const AddFirmPage = () => {
    const [firmName, setFirmName] = useState('');
    const [firmDescription, setFirmDescription] = useState('');
    const [firmLogo, setFirmLogo] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false); // loading holati

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!firmName || !firmDescription || !firmLogo) {
            setError('Barcha maydonlarni to\'ldirishingiz kerak!');
            return;
        }

        setLoading(true); // Loadingni yoqish

        try {
            const res = await fetch('/api/firm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: firmName,
                    description: firmDescription,
                    logo: firmLogo,
                }),
            });

            const data = await res.json();

            if (res.status === 201) {
                setSuccess(data.message);
                setFirmName('');
                setFirmDescription('');
                setFirmLogo('');
            } else {
                setError(data.message);
            }
        } catch {
            setError('Xatolik yuz berdi, iltimos keyinroq qayta urinib ko\'ring');
        } finally {
            setLoading(false); // Loadingni o'chirish
        }
    };

    return (
        <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Firma Qo`shish</h1>

            {/* Success and Error Message */}
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {success && <p className="text-green-600 mb-4">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <div>
                    <label htmlFor="firmName" className="block text-lg font-semibold">Firma Nomi</label>
                    <input
                        id="firmName"
                        type="text"
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Logotip URL manzilini kiriting"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading} // Loading holatida tugma faoliyatini to'xtatish
                        className={`py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${loading && 'cursor-wait'}`}
                    >
                        {loading ? 'Yuklanmoqda...' : 'Qo`shish'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFirmPage;
