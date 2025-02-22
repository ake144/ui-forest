import type { FC } from "react"

interface UiForestLogoProps {
  className?: string
}

const UiForestLogo: FC<UiForestLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white relative group">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:text-purple-400">Ui</span>
        <span className="inline-block -rotate-3 bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent px-1 transition-all duration-300 ease-in-out group-hover:rotate-0">
          Forest
        </span>
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-800 to-purple-200 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </h1>
    </div>
  )
}

export default UiForestLogo

