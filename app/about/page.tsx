import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[64rem] space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl">About Shikha Garg</h1>
            <p className="text-xl text-muted-foreground">A visionary leader in the housing and construction industry</p>
          </div>
          <div className="flex-1">
            <Image
              src="/placeholder.svg"
              alt="Shikha Garg"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-heading text-2xl sm:text-3xl">Professional Journey</h2>
          <p className="text-muted-foreground">
            As the CEO of a prominent housing company and two other successful enterprises, Shikha Garg has established
            herself as a pioneering force in the construction and real estate sector. Her leadership has been
            instrumental in delivering innovative housing solutions and transforming the industry landscape.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Housing & Construction</h3>
              <p className="text-muted-foreground">
                Leading a team of professionals in delivering high-quality construction projects and innovative housing
                solutions that transform communities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Business Leadership</h3>
              <p className="text-muted-foreground">
                Successfully managing and growing multiple companies while maintaining a strong focus on innovation,
                sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

