"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

const apiKeys = [
  { id: 1, name: "Mobile App", key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", status: "Aktif" },
  { id: 2, name: "Partner Website", key: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy", status: "Aktif" },
  { id: 3, name: "Test Environment", key: "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz", status: "Pasif" },
]

export default function APIManagementPage() {
  const [newKeyName, setNewKeyName] = useState("")
  const [rateLimit, setRateLimit] = useState(true)

  const handleCreateKey = () => {
    console.log("Yeni API anahtarı oluşturuldu:", { name: newKeyName, rateLimit })
    // Burada yeni API anahtarı oluşturma işlemi yapılacak
  }

  const handleToggleKey = (keyId: number, newStatus: string) => {
    console.log(`API anahtarı ${keyId} durumu ${newStatus} olarak güncellendi`)
    // Burada API anahtarı durumu güncelleme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Yönetimi</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Yeni API Anahtarı Oluştur</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <Label htmlFor="new-key-name">Anahtar Adı</Label>
            <Input
              id="new-key-name"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="rate-limit"
              checked={rateLimit}
              onCheckedChange={setRateLimit}
            />
            <Label htmlFor="rate-limit">Hız Sınırı</Label>
          </div>
          <Button onClick={handleCreateKey}>Oluştur</Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Mevcut API Anahtarları</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ad</TableHead>
              <TableHead>Anahtar</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((apiKey) => (
              <TableRow key={apiKey.id}>
                <TableCell>{apiKey.name}</TableCell>
                <TableCell>{apiKey.key}</TableCell>
                <TableCell>{apiKey.status}</TableCell>
                <TableCell>
                  <Switch
                    checked={apiKey.status === "Aktif"}
                    onCheckedChange={(checked) => handleToggleKey(apiKey.id, checked ? "Aktif" : "Pasif")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

