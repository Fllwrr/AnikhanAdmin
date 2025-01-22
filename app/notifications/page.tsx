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

const notifications = [
  { id: 1, title: "Yeni Anime Eklendi", content: "Naruto Shippuden artık sitemizde!", date: "2023-06-20", type: "Genel" },
  { id: 2, title: "Bakım Duyurusu", content: "Sitemiz 21 Haziran gecesi bakımda olacak.", date: "2023-06-19", type: "Sistem" },
  { id: 3, title: "Yeni Özellik", content: "Artık favori animelerinizi listeleyebilirsiniz!", date: "2023-06-18", type: "Özellik" },
  // Daha fazla bildirim ekleyebilirsiniz
]

export default function NotificationsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(notifications.length / itemsPerPage)

  const paginatedNotifications = notifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bildirimler ve Duyurular</h1>
      <Button>Yeni Bildirim Oluştur</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Başlık</TableHead>
            <TableHead>İçerik</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead>Tür</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedNotifications.map((notification) => (
            <TableRow key={notification.id}>
              <TableCell>{notification.title}</TableCell>
              <TableCell>{notification.content}</TableCell>
              <TableCell>{notification.date}</TableCell>
              <TableCell>{notification.type}</TableCell>
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
                    <DropdownMenuItem>Yeniden Gönder</DropdownMenuItem>
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

