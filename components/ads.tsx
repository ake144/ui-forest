'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AdFooter() {
  useEffect(() => {
    try {
      // Trigger AdSense
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error('Adsense error:', e)
    }
  }, [])

  return (
    <>
      {/* Load AdSense script asynchronously */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6502159796783362"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      {/* Ad container */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6502159796783362"
        data-ad-slot="7897086138"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  )
}
