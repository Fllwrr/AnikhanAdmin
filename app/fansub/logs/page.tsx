"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const logs = [
  { id: 1, date: "2023-06-20 15:30:00", user: "anime_lover", action: "Yeni çeviri eklendi", project: "Naruto" },
  { id: 2, date: "2023-06-20 16:15:00", user: "manga_expert", action: "Çeviri düzenlendi", project: "One Piece" },
  { id: 3, date: "2023-06-20 17:00:00", user: "otaku123", action: "Zamanlama yapıldı", project: "Attack on Titan" },
]

export default function FansubLogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(logs.length / itemsPerPage)

  const filteredLogs = logs.filter(log =>
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.project.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Log ve Takip</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Log ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tarih</TableHead>
            <TableHead>Kullanıcı</TableHead>
            <TableHead>İşlem</TableHead>
            <TableHead>Proje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.date}</TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.action}</TableCell>
              <TableCell>{log.project}</TableCell>
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

