import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Briefcase, Award, TrendingUp, Target, Star } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 ">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image src="/placeholder.svg" alt="Shikha Garg" width={200} height={200} className="rounded-full" priority />
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Shikha Garg</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Visionary leader and CEO of multiple successful enterprises
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Building2 className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Housing & Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Leading innovative housing solutions and construction projects
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Leadership</h3>
                <p className="text-sm text-muted-foreground">CEO of multiple successful companies</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Briefcase className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Business Excellence</h3>
                <p className="text-sm text-muted-foreground">Driving growth and innovation across industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-[64rem] space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground">
              A track record of excellence and innovation in business leadership
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Award className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Business Leader of the Year</h3>
                  <p className="text-sm text-muted-foreground">
                    Recognized for exceptional leadership and business innovation
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <TrendingUp className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">500% Company Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Achieved remarkable business growth across all ventures
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Target className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Industry Innovation Award</h3>
                  <p className="text-sm text-muted-foreground">Pioneering new approaches in construction and housing</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto max-w-[58rem] space-y-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" fill="currentColor" />
                <Star className="h-6 w-6 text-primary" fill="currentColor" />
                <Star className="h-6 w-6 text-primary" fill="currentColor" />
                <Star className="h-6 w-6 text-primary" fill="currentColor" />
                <Star className="h-6 w-6 text-primary" fill="currentColor" />
              </div>
              <blockquote className="text-xl font-medium italic">
                "Shikha Garg's visionary leadership has transformed the housing industry, setting new standards for
                innovation and sustainability."
              </blockquote>
              <div className="text-muted-foreground">
                <p className="font-semibold">Industry Magazine</p>
                <p className="text-sm">Leading Business Publication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

