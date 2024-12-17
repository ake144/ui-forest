'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GridPattern } from "./ui/grid-pattern"
import { SparklesCore } from "./ui/sparkles"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <GridPattern />
      
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 ring-1 ring-inset ring-gray-700">
              Introducing DesignKit Pro
              <span className="ml-2 inline-flex items-center rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
                New
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
          >
            Make your websites look
            <br />
            10x better
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Copy paste our premium components and templates into your projects.
            Stop worrying about styling and animations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Browse Components
            </Button> */}
          <div className="flex gap-4">
              {/* Browse Components Button */}
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all bg-black rounded-lg shadow-lg group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-50"></span>
                <span className="absolute right-0 w-8 h-32 -translate-x-12 translate-y-3 rotate-12 bg-white opacity-10"></span>
                <span className="relative">Browse Components</span>
                <svg
                  className="w-5 h-5 ml-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Browse Templates Button */}
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-black transition-all bg-white border border-blue-500 rounded-lg shadow-lg group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-20"></span>
                <span className="absolute right-0 w-8 h-32 -translate-x-12 translate-y-3 rotate-12 bg-black opacity-5"></span>
                <span className="relative">Browse Templates</span>
                <svg
                  className="w-5 h-5 ml-2 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex justify-center items-center gap-6 text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
              </svg>
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
              </svg>
              <span>React</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c2.4,0,4.8,0.9,7.2,2.7c-0.7-3.2-2.7-4.8-5.9-4.8z"/>
              </svg>
              <span>TailwindCSS</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.495-.491 3.31zM12.478 14.524l-3.467 3.946b2.706 4.17 6.173-3.074.317-1.23-4.479-3.813zM7.666 18.747l.212.382a.5.5 0 0 0 .84-.11l.333-.944-1.385.672zm7.405-13.502h3.087c.2 0 .4.2.4.4v5.167a.4.4 0 0 1-.4.4h-3.087a.4.4 0 0 1-.4-.4V5.645a.4.4 0 0 1 .4-.4zm-.6 7.1h3.087c.2 0 .4.2.4.4v5.167a.4.4 0 0 1-.4.4h-3.087a.4.4 0 0 1-.4-.4V12.345a.4.4 0 0 1 .4-.4zm-6.4-7.1h3.087c.2 0 .4.2.4.4v5.167a.4.4 0 0 1-.4.4H8.071a.4.4 0 0 1-.4-.4V5.645a.4.4 0 0 1 .4-.4zm-.6 7.1h3.087c.2 0 .4.2.4.4v5.167a.4.4 0 0 1-.4.4H7.471a.4.4 0 0 1-.4-.4V12.345a.4.4 0 0 1 .4-.4z"/>
              </svg>
              <span>Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

