"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const complaints = [
  { id: 1, user: "user123", target: "comment456", reason: "Uygunsuz içerik", status: "Beklemede" },
  { id: 2, user: "user789", target: "user101", reason: "Taciz", status: "İncelendi" },
  { id: 3, user: "user202", target: "anime303", reason: "Yanlış kategori", status: "Çözüldü" },
]

export default function ComplaintsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(complaints.length / itemsPerPage)

  const paginatedComplaints = complaints.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleStatusChange = (complaintId: number, newStatus: string) => {
    console.log(`Şikayet ${complaintId} durumu ${newStatus} olarak güncellendi`)
    // Burada şikayet durumu güncelleme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Şikayet Yönetimi</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Şikayet Eden</TableHead>
            <TableHead>Hedef</TableHead>
            <TableHead>Sebep</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedComplaints.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.user}</TableCell>
              <TableCell>{complaint.target}</TableCell>
              <TableCell>{complaint.reason}</TableCell>
              <TableCell>{complaint.status}</TableCell>
              <TableCell>
                <Select
                  onValueChange={(value) => handleStatusChange(complaint.id, value)}
                  defaultValue={complaint.status}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Durum seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beklemede">Beklemede</SelectItem>
                    <SelectItem value="İncelendi">İncelendi</SelectItem>
                    <SelectItem value="Çözüldü">Çözüldü</SelectItem>
                    <SelectItem value="Reddedildi">Reddedildi</SelectItem>
                  </SelectContent>
                </Select>
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

