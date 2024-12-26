import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
// import { ModeToggle } from "@/components/mode-toggle"

export default function ComponentsPage() {
  return (
    <div className="container mt-22 mx-auto px-4  py-8 ">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">UI Components</h1>
        {/* <ModeToggle /> */}
      </header>
      <Tabs defaultValue="all" className="w-full ">
        <TabsList className="bg-black my-12 ">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="pro">Pro</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <ComponentCard key={component.name} {...component} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="free">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.filter(c => !c.pro).map((component) => (
              <ComponentCard key={component.name} {...component} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pro">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.filter(c => c.pro).map((component) => (
              <ComponentCard key={component.name} {...component} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ComponentCard({ name, description, pro }: { name: string; description: string; pro: boolean }) {
  return (
    <Card className="text-white bg-black "> 
      <CardContent>
        <div className="h-32  rounded-lg flex items-center bg-black justify-center">
          [Component Preview]
        </div>
      </CardContent>
      <CardFooter className="flex flex-row   justify-between">

          <div >
       <Link href='/'>
               <CardTitle className="my-4">{name}</CardTitle>
       </Link>   
        <CardDescription>{description}</CardDescription>
          </div>
           <div></div>
        {pro ? (
          <Button>Unlock Pro</Button>
        ) : (
          <Button variant="outline" className="text-black">View Details</Button>
        )}
      </CardFooter>
    </Card>
  )
}

const components = [
  { name: "Button", description: "Clickable button component", pro: false },
  { name: "Card", description: "Versatile card component", pro: false },
  { name: "Modal", description: "Customizable modal dialog", pro: true },
  { name: "Dropdown", description: "Interactive dropdown menu", pro: false },
  { name: "Table", description: "Data table with sorting and filtering", pro: true },
  { name: "Form", description: "Advanced form with validation", pro: true },
]

