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

const popularContent = [
  { id: 1, title: "Naruto", views: 1000000, comments: 5000, rating: 4.8 },
  { id: 2, title: "One Piece", views: 950000, comments: 4800, rating: 4.9 },
  { id: 3, title: "Attack on Titan", views: 900000, comments: 4600, rating: 4.7 },
  // Daha fazla popüler içerik ekleyebilirsiniz
]

export default function PopularContentPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(popularContent.length / itemsPerPage)

  const paginatedContent = popularContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Popüler İçerik</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Başlık</TableHead>
            <TableHead>Görüntülenme</TableHead>
            <TableHead>Yorum Sayısı</TableHead>
            <TableHead>Puan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedContent.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.views.toLocaleString()}</TableCell>
              <TableCell>{content.comments.toLocaleString()}</TableCell>
              <TableCell>{content.rating}</TableCell>
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

