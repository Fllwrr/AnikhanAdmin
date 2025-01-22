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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'

const comments = [
  { id: 1, user: "user123", content: "Harika bir bölümdü!", anime: "Naruto", episode: "Episode 1", status: "Onay Bekliyor" },
  { id: 2, user: "anime_fan", content: "Bu sahne çok etkileyiciydi.", anime: "Attack on Titan", episode: "Episode 5", status: "Onaylandı" },
  { id: 3, user: "otaku42", content: "Bir sonraki bölümü sabırsızlıkla bekliyorum!", anime: "One Piece", episode: "Episode 1000", status: "Onay Bekliyor" },
  // Daha fazla yorum ekleyebilirsiniz
]

export default function ModerationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(comments.length / itemsPerPage)

  const paginatedComments = comments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Yorum ve Moderasyon</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı</TableHead>
            <TableHead>Yorum</TableHead>
            <TableHead>Anime</TableHead>
            <TableHead>Bölüm</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedComments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.user}</TableCell>
              <TableCell>{comment.content}</TableCell>
              <TableCell>{comment.anime}</TableCell>
              <TableCell>{comment.episode}</TableCell>
              <TableCell>{comment.status}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Menüyü aç</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                    <DropdownMenuItem>Onayla</DropdownMenuItem>
                    <DropdownMenuItem>Reddet</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sil</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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

