import { Card, CardContent } from "@/app/_components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 flex items-center justify-center">
          <p className="text-sm text-gray-400">
            © 2025 Projeto Integrador III - Univesp | <span className="font-bold">DRP01-PJI310-SALA-005GRUPO-004</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
