"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const backups = [
  { id: 1, date: "2023-06-20 10:00:00", size: "1.2 GB", status: "Tamamlandı" },
  { id: 2, date: "2023-06-19 10:00:00", size: "1.1 GB", status: "Tamamlandı" },
  { id: 3, date: "2023-06-18 10:00:00", size: "1.3 GB", status: "Tamamlandı" },
]

export default function BackupManagementPage() {
  const [backupFrequency, setBackupFrequency] = useState("daily")

  const handleBackup = () => {
    console.log("Manuel yedekleme başlatıldı")
    // Burada manuel yedekleme işlemi başlatılacak
  }

  const handleRestore = (backupId: number) => {
    console.log(`${backupId} numaralı yedekleme geri yükleniyor`)
    // Burada yedekleme geri yükleme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Yedekleme Yönetimi</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Yedekleme Ayarları</h2>
        <div className="flex items-center space-x-4">
          <Select onValueChange={setBackupFrequency} defaultValue={backupFrequency}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Yedekleme sıklığı" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Günlük</SelectItem>
              <SelectItem value="weekly">Haftalık</SelectItem>
              <SelectItem value="monthly">Aylık</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleBackup}>Manuel Yedekleme Başlat</Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Yedekleme Geçmişi</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tarih</TableHead>
              <TableHead>Boyut</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backups.map((backup) => (
              <TableRow key={backup.id}>
                <TableCell>{backup.date}</TableCell>
                <TableCell>{backup.size}</TableCell>
                <TableCell>{backup.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => handleRestore(backup.id)}>
                    Geri Yükle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

