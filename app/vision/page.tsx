import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Users2, Building } from "lucide-react"

export default function VisionPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[64rem] space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl">Our Vision</h1>
          <p className="mx-auto max-w-[42rem] text-xl text-muted-foreground">
            Building a better future through innovative construction and sustainable development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Target className="h-12 w-12" />
              <h3 className="text-xl font-bold">Mission Statement</h3>
              <p className="text-center text-muted-foreground">
                To revolutionize the housing industry through innovative solutions and sustainable practices while
                maintaining the highest standards of quality and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <TrendingUp className="h-12 w-12" />
              <h3 className="text-xl font-bold">Growth Strategy</h3>
              <p className="text-center text-muted-foreground">
                Expanding our reach while maintaining our commitment to excellence and innovation across all our
                business ventures.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <Image src="/placeholder.svg" alt="Vision" width={1024} height={400} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 p-8 flex items-center">
            <div className="max-w-[50%] space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl">Future Outlook</h2>
              <p className="text-muted-foreground">
                We envision a future where sustainable housing solutions meet technological innovation, creating better
                living spaces for communities worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Users2 className="h-8 w-8" />
            <h3 className="text-xl font-bold">Community Impact</h3>
            <p className="text-muted-foreground">
              Creating lasting positive impact in communities through our projects and initiatives, focusing on
              sustainable development and social responsibility.
            </p>
          </div>
          <div className="space-y-4">
            <Building className="h-8 w-8" />
            <h3 className="text-xl font-bold">Industry Leadership</h3>
            <p className="text-muted-foreground">
              Setting new standards in the construction and housing industry through innovative approaches and
              sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

