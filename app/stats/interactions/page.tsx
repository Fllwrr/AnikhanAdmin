"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const interactionData = [
  { id: 1, type: "Beğeni", count: 15000, change: "+10%" },
  { id: 2, type: "Yorum", count: 5000, change: "+5%" },
  { id: 3, type: "İzleme Listesine Ekleme", count: 8000, change: "+15%" },
  { id: 4, type: "Paylaşım", count: 2000, change: "+20%" },
]

export default function InteractionsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(interactionData.length / itemsPerPage)

  const paginatedInteractions = interactionData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Kullanıcı Etkileşimleri</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {interactionData.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.count.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {item.change} geçen haftaya göre
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Etkileşim Grafiği</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Etkileşim Türü</TableHead>
            <TableHead>Sayı</TableHead>
            <TableHead>Değişim</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInteractions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.count.toLocaleString()}</TableCell>
              <TableCell>{item.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center">
        <div>
          Sayfa {currentPage} / {totalPages}
        </div>
        <div className="space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Önceki
          </Button>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Sonraki
          </Button>
        </div>
      </div>
    </div>
  )
}

