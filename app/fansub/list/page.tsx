"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const fansubs = [
  { id: 1, name: "Anime Sevenler", memberCount: 50, activeProjects: 3, status: "Aktif" },
  { id: 2, name: "Manga Çevirmenleri", memberCount: 30, activeProjects: 2, status: "Aktif" },
  { id: 3, name: "Otaku Grubu", memberCount: 40, activeProjects: 1, status: "Pasif" },
]

export default function FansubListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(fansubs.length / itemsPerPage)

  const filteredFansubs = fansubs.filter(fansub => 
    fansub.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedFansubs = filteredFansubs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Listesi</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Fansub ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Yeni Fansub Ekle</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fansub Adı</TableHead>
            <TableHead>Üye Sayısı</TableHead>
            <TableHead>Aktif Projeler</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedFansubs.map((fansub) => (
            <TableRow key={fansub.id}>
              <TableCell>{fansub.name}</TableCell>
              <TableCell>{fansub.memberCount}</TableCell>
              <TableCell>{fansub.activeProjects}</TableCell>
              <TableCell>{fansub.status}</TableCell>
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

