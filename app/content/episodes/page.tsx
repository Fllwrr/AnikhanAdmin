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

const episodes = [
  {
    id: 1,
    animeTitle: "Naruto",
    episodeNumber: 1,
    title: "Uzumaki Naruto Arrives!",
    status: "Yayınlandı",
  },
  {
    id: 2,
    animeTitle: "One Piece",
    episodeNumber: 1,
    title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
    status: "Yayınlandı",
  },
  // Daha fazla bölüm ekleyebilirsiniz
]

export default function EpisodesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(episodes.length / itemsPerPage)

  const paginatedEpisodes = episodes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bölüm Yönetimi</h1>
      <Button>Yeni Bölüm Ekle</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Anime</TableHead>
            <TableHead>Bölüm No</TableHead>
            <TableHead>Başlık</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedEpisodes.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell>{episode.animeTitle}</TableCell>
              <TableCell>{episode.episodeNumber}</TableCell>
              <TableCell>{episode.title}</TableCell>
              <TableCell>{episode.status}</TableCell>
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
                    <DropdownMenuItem>Düzenle</DropdownMenuItem>
                    <DropdownMenuItem>Video Yükle</DropdownMenuItem>
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

