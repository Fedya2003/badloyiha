'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function AddBadPage() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [firm, setFirm] = useState('')
    const [category, setCategory] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const badData = {
            name,
            description,
            image,
            firm,
            category,
        }

        try {
            const res = await fetch('/api/bad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(badData),
            })

            if (res.ok) {
                toast.success('BAD muvaffaqiyatli qo\'shildi!')
                router.push('/bad') // BADlar ro'yxatiga qaytish
            } else {
                toast.error('Nimadir noto\'g\'ri ketdi. Iltimos, qaytadan urinib ko\'ring.')
            }
        } catch {
            toast.error('BAD qo\'shishda xatolik yuz berdi.')
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}>
            <div className='w-full max-w-2xl p-8 bg-blue-500 bg-opacity-80 shadow-lg rounded-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Yangi BAD qo`shish
                </h1>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                            BAD nomi
                        </label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                            placeholder='BAD nomini kiriting'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                            Tavsifi
                        </label>
                        <textarea
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className='mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                            placeholder='BAD tavsifini kiriting'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                            Rasm URL
                        </label>
                        <input
                            type='text'
                            id='image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className='mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                            placeholder='Rasm URL sini kiriting'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='firm' className='block text-sm font-medium text-gray-700'>
                            Firma
                        </label>
                        <input
                            type='text'
                            id='firm'
                            value={firm}
                            onChange={(e) => setFirm(e.target.value)}
                            className='mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                            placeholder='Firma nomini kiriting'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='category' className='block text-sm font-medium text-gray-700'>
                            Kategoriya
                        </label>
                        <select
                            id='category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='mt-2 block w-full p-3 border border-gray-300 text-yellow-500 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500'
                            required
                        >
                            <option value=''>Kategoriya tanlang</option>
                            <option value='sport'>Sport</option>
                            <option value='health'>Sog`lik</option>
                            <option value='mineral'>Mineral</option>
                            <option value='vitamin'>Vitamin</option>
                            <option value='children'>Bolalar</option>
                        </select>
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 ease-in-out'>
                            BAD Qo`shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
