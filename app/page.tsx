"use client"
import React from "react"
import { useState, useEffect } from "react"
import CarouselDApiDemo from "./components/Slider"
import SearchBar from "./components/SearchBar"

export default function Home() {
  const [totalBads, setTotalBads] = useState(0)  // Sayt statistikasi uchun BADlar soni
  const [siteVisitors, setSiteVisitors] = useState(0)  // Saytga tashrif buyurganlar soni

  useEffect(() => {
    // Dinamik statistika olish (masalan, API orqali)
    setTotalBads(100)  // Misol uchun, 100 BAD mavjud
    setSiteVisitors(5000)  // Misol uchun, 5000 foydalanuvchi
  }, [])

  return (
    <div>
      <SearchBar />
      {/* "BAD nima?" degan savol va javob */}
      <div className="hero-section bg-blue-500 text-white p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">BAD nima?</h1>
        <p className="text-lg">
          BAD (biologik aktiv qo‘shimchalar) – bu organizmning sog‘lig‘ini yaxshilashga yordam beradigan tabiiy yoki sintetik moddalar bo‘lib, ular vitaminlar, minerallar, o`simlik ekstraktlari yoki boshqa foydali komponentlarni o‘z ichiga oladi. BADlar sog‘lom turmush tarzini qo‘llab-quvvatlashda va kasalliklarning oldini olishda yordam beradi.
        </p>
      </div>

      {/* Mashhur BADlar uchun slide ko'rinishi */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Mashhur BADlar</h2>
        <CarouselDApiDemo />
      </section>

      {/* Sayt statistikasi */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sayt Statistikasi</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="stat-card bg-white dark:bg-gray-700 p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mavjud BADlar soni</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalBads}</p>
              </div>
              <div className="stat-card bg-white dark:bg-gray-700 p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Saytga tashrif buyurganlar</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{siteVisitors}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
