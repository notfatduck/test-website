"use client"

import { MessageCircle } from "lucide-react"

export default function Home() {
  const email = "ryankong112@gmail.com"
  const iMessageUrl = `imessage://${email}`

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 w-full">
          <div className="text-center w-full">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-600 dark:text-slate-400 mb-2">let's</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-800 dark:text-white leading-tight mb-6">
              talk about it
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mx-auto max-w-lg px-2">
            Your personalized AI therapist is one text message away.
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mt-8 sm:mt-12 w-full sm:w-auto">
          <a
            href={iMessageUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Open iMessage
          </a>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center mt-3">
            Opens on iPhone, iPad, or Mac
          </p>
        </div>
      </div>
    </main>
  )
}
