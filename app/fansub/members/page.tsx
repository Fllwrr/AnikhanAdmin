"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const members = [
  { id: 1, username: "anime_lover", role: "Çevirmen", joinDate: "2023-01-15", status: "Aktif" },
  { id: 2, username: "manga_expert", role: "Editör", joinDate: "2023-02-20", status: "Aktif" },
  { id: 3, username: "otaku123", role: "Zamanlayıcı", joinDate: "2023-03-10", status: "Pasif" },
]

export default function FansubMembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(members.length / itemsPerPage)

  const filteredMembers = members.filter(member => 
    member.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Üye Listesi</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Üye ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Yeni Üye Ekle</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı Adı</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Katılım Tarihi</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.username}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.joinDate}</TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Düzenle
                </Button>
                <Button variant="destructive" size="sm">
                  Çıkar
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

