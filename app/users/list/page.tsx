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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const users = [
  {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    registrationDate: "2023-01-15",
    lastLogin: "2023-06-20",
    status: "Aktif",
  },
  {
    id: 2,
    username: "janedoe",
    email: "jane@example.com",
    registrationDate: "2023-02-20",
    lastLogin: "2023-06-19",
    status: "Aktif",
  },
  {
    id: 3,
    username: "bobsmith",
    email: "bob@example.com",
    registrationDate: "2023-03-10",
    lastLogin: "2023-06-18",
    status: "Pasif",
  },
]

export default function UserListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(users.length / itemsPerPage)

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Kullanıcı Listesi</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Yeni Kullanıcı Ekle</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yeni Kullanıcı Ekle</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Kullanıcı Adı
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-posta
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
          </div>
          <Button>Ekle</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Kullanıcı Adı</TableHead>
            <TableHead>E-posta</TableHead>
            <TableHead>Kayıt Tarihi</TableHead>
            <TableHead>Son Giriş</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.registrationDate}</TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell>{user.status}</TableCell>
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

