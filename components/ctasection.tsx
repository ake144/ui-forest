export default function CTASection() {
    return (
      <section className="bg-black text-white py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Want a professional, extraordinary website tailored to your needs?{" "}
              <span className="block mt-2">Get in touch</span>
            </h2>
            <p className="text-lg text-gray-300">
              We've helped thousands of{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                founders and teams
              </a>{" "}
              build their products and apps from scratch, and we can help you too.
            </p>
            <div className="pt-2">
              <a
                href="https://t.me/AkeTame"
                className="inline-block bg-white hover:scale-125 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Talk to us
              </a>
            </div>
          </div>
  
          {/* Right Column - Testimonial */}
          <div className="flex items-center">
            <blockquote className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-300">
                "Ake and his teams took our requirements and exceeded our expectations. If you're considering working with uiforest team, I highly
                recommend it. The job will be done exceptionally well, and you'll be thrilled with the results."
              </p>
              <footer className="text-gray-300">
                <p className="font-medium">Gedi Ta</p>
                <p className="text-sm text-gray-400">Founder - OneProfile</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
  
  