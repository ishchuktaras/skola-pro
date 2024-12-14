import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from 'lucide-react'
import SmallTitle from "./small-title"
import SectionHeader from "./section-header"


export default function HeroSection() {

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-white px-4">
      <div className="container max-w-6xl mx-auto text-center space-y-8">
        <SectionHeader
          title="Vítejte ve Škola Pro"
          heading="Komplexní řešení pro správu škol"
          description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full h-12 px-6">
            Začněte
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6">
            Zobrazit vše moduly
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

