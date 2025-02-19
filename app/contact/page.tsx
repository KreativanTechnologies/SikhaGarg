import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>123 Business Street, City, Country</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-lg border p-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
          </div>
          <Button className="w-full">Send Message</Button>
        </div>
      </div>
    </div>
  )
}

