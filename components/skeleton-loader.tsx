// import { Skeleton } from "@/components/ui/skeleton"

// interface SkeletonLoaderProps {
//   type?: 'default' | 'homepage' | 'docs'
// }

// export function SkeletonLoader({ type = 'default' }: SkeletonLoaderProps) {
//   switch (type) {
//     case 'homepage':
//       return <HomepageSkeleton />
//     case 'docs':
//       return <DocsSkeleton />
//     default:
//       return <DefaultSkeleton />
//   }
// }

// function DefaultSkeleton() {
//   return (
//     <div className="space-y-4">
//       <Skeleton className="h-8 w-[250px]" />
//       <Skeleton className="h-4 w-[300px]" />
//       <Skeleton className="h-4 w-[250px]" />
//       <Skeleton className="h-[200px] w-full" />
//     </div>
//   )
// }

// function HomepageSkeleton() {
//   return (
//     <div className="space-y-8 py-12">
//       <div className="text-center space-y-4">
//         <Skeleton className="h-12 w-[300px] mx-auto" />
//         <Skeleton className="h-6 w-[500px] mx-auto" />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[...Array(3)].map((_, i) => (
//           <div key={i} className="space-y-4">
//             <Skeleton className="h-[200px] w-full" />
//             <Skeleton className="h-6 w-[150px]" />
//             <Skeleton className="h-4 w-full" />
//             <Skeleton className="h-4 w-[200px]" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function DocsSkeleton() {
//   return (
//     <div className="space-y-8 py-12">
//       <div className="space-y-4">
//         <Skeleton className="h-10 w-[300px]" />
//         <Skeleton className="h-6 w-[500px]" />
//       </div>
//       <div className="flex space-x-4">
//         <Skeleton className="h-10 w-[100px]" />
//         <Skeleton className="h-10 w-[100px]" />
//       </div>
//       <div className="space-y-6">
//         {[...Array(3)].map((_, i) => (
//           <div key={i} className="space-y-2">
//             <Skeleton className="h-6 w-[200px]" />
//             <Skeleton className="h-4 w-full" />
//             <Skeleton className="h-4 w-[300px]" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

