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

const userHistory = [
  {
    id: 1,
    username: "johndoe",
    action: "Giriş",
    timestamp: "2023-06-20 10:30:00",
    ipAddress: "192.168.1.1",
  },
  {
    id: 2,
    username: "janedoe",
    action: "Kayıt",
    timestamp: "2023-06-19 15:45:00",
    ipAddress: "192.168.1.2",
  },
  // Add more history entries as needed
]

export default function UserHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(userHistory.length / itemsPerPage)

  const paginatedHistory = userHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Kayıt ve Oturum Geçmişi</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı Adı</TableHead>
            <TableHead>İşlem</TableHead>
            <TableHead>Tarih ve Saat</TableHead>
            <TableHead>IP Adresi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedHistory.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.username}</TableCell>
              <TableCell>{entry.action}</TableCell>
              <TableCell>{entry.timestamp}</TableCell>
              <TableCell>{entry.ipAddress}</TableCell>
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

