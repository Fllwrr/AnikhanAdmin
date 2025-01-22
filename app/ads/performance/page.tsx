"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"

const adPerformance = [
  {
    id: 1,
    name: "Ana Sayfa Banner",
    impressions: 10000,
    clicks: 150,
    ctr: "1.5%",
    revenue: "$75.00",
  },
  {
    id: 2,
    name: "Sidebar Reklam",
    impressions: 8000,
    clicks: 100,
    ctr: "1.25%",
    revenue: "$50.00",
  },
  // Add more ad performance data as needed
]

export default function AdPerformancePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(adPerformance.length / itemsPerPage)

  const paginatedPerformance = adPerformance.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Reklam Performansı</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam Gösterim
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,000</div>
            <p className="text-xs text-muted-foreground">
              +20.1% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam Tıklama
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
            <p className="text-xs text-muted-foreground">
              +15% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ortalama CTR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.39%</div>
            <p className="text-xs text-muted-foreground">
              +0.2% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam Gelir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125.00</div>
            <p className="text-xs text-muted-foreground">
              +30% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Reklam Performans Grafiği</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reklam Adı</TableHead>
            <TableHead>Gösterim</TableHead>
            <TableHead>Tıklama</TableHead>
            <TableHead>CTR</TableHead>
            <TableHead>Gelir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPerformance.map((ad) => (
            <TableRow key={ad.id}>
              <TableCell>{ad.name}</TableCell>
              <TableCell>{ad.impressions.toLocaleString()}</TableCell>
              <TableCell>{ad.clicks.toLocaleString()}</TableCell>
              <TableCell>{ad.ctr}</TableCell>
              <TableCell>{ad.revenue}</TableCell>
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

