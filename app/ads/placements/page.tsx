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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const adPlacements = [
  {
    id: 1,
    name: "Ana Sayfa Banner",
    size: "728x90",
    location: "Ana Sayfa",
    status: "Aktif",
  },
  {
    id: 2,
    name: "Sidebar Reklam",
    size: "300x250",
    location: "Tüm Sayfalar",
    status: "Aktif",
  },
  // Add more ad placements as needed
]

export default function AdPlacementsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(adPlacements.length / itemsPerPage)

  const paginatedPlacements = adPlacements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Reklam Alanları</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Yeni Reklam Alanı Ekle</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yeni Reklam Alanı Ekle</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Alan Adı
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="size" className="text-right">
                Boyut
              </Label>
              <Input id="size" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Konum
              </Label>
              <Input id="location" className="col-span-3" />
            </div>
          </div>
          <Button>Ekle</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alan Adı</TableHead>
            <TableHead>Boyut</TableHead>
            <TableHead>Konum</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPlacements.map((placement) => (
            <TableRow key={placement.id}>
              <TableCell>{placement.name}</TableCell>
              <TableCell>{placement.size}</TableCell>
              <TableCell>{placement.location}</TableCell>
              <TableCell>{placement.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Düzenle
                </Button>
                <Button variant="destructive" size="sm">
                  Sil
                </Button>
              </TableCell>
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

