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

const bannedUsers = [
  {
    id: 1,
    username: "troublemaker1",
    email: "trouble@example.com",
    banDate: "2023-06-15",
    reason: "Spam",
  },
  {
    id: 2,
    username: "baduser2",
    email: "bad@example.com",
    banDate: "2023-06-18",
    reason: "Uygunsuz içerik",
  },
]

export default function BannedUsersPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(bannedUsers.length / itemsPerPage)

  const paginatedBannedUsers = bannedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Engellenen Kullanıcılar</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı Adı</TableHead>
            <TableHead>E-posta</TableHead>
            <TableHead>Engelleme Tarihi</TableHead>
            <TableHead>Neden</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedBannedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.banDate}</TableCell>
              <TableCell>{user.reason}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Engeli Kaldır
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

