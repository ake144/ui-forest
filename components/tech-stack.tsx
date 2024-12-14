import Image from 'next/image'

const technologies = [
  { name: 'Next.js', logo: '/next.svg' },
  { name: 'TypeScript', logo: '/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/tailwindcss.svg' },
  { name: 'Prisma', logo: '/prisma.svg' },
  { name: 'Clerk', logo: '/clerk.jpeg' },
  { name: 'Supabase', logo: '/supabase.svg' },
  { name: 'Vercel', logo: '/vercel.svg' },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <Image src={tech.logo} alt={tech.name} width={84} height={84} />
          <span className="mt-2 text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

