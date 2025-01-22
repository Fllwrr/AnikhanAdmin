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

const sessions = [
  {
    id: 1,
    username: "johndoe",
    loginTime: "2023-06-20 10:30:00",
    logoutTime: "2023-06-20 11:45:00",
    ipAddress: "192.168.1.1",
  },
  {
    id: 2,
    username: "janedoe",
    loginTime: "2023-06-20 09:15:00",
    logoutTime: "2023-06-20 12:30:00",
    ipAddress: "192.168.1.2",
  },
  // Daha fazla oturum ekleyebilirsiniz
]

export default function SessionsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(sessions.length / itemsPerPage)

  const paginatedSessions = sessions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Kayıt ve Oturum</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı Adı</TableHead>
            <TableHead>Giriş Zamanı</TableHead>
            <TableHead>Çıkış Zamanı</TableHead>
            <TableHead>IP Adresi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedSessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell>{session.username}</TableCell>
              <TableCell>{session.loginTime}</TableCell>
              <TableCell>{session.logoutTime}</TableCell>
              <TableCell>{session.ipAddress}</TableCell>
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

