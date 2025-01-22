"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const roles = [
  { id: 1, name: "Çevirmen", permissions: ["çeviri_yapma", "yorum_yapma"] },
  { id: 2, name: "Editör", permissions: ["çeviri_düzenleme", "yorum_yapma"] },
  { id: 3, name: "Zamanlayıcı", permissions: ["zamanlama_yapma", "yorum_yapma"] },
]

const allPermissions = ["çeviri_yapma", "çeviri_düzenleme", "zamanlama_yapma", "yorum_yapma", "proje_yönetme"]

export default function FansubRolesPage() {
  const [newRoleName, setNewRoleName] = useState("")
  const [newRolePermissions, setNewRolePermissions] = useState<string[]>([])

  const handleAddRole = () => {
    console.log("Yeni rol eklendi:", { name: newRoleName, permissions: newRolePermissions })
    // Burada yeni rol ekleme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Rol Yönetimi</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Yeni Rol Ekle</h2>
        <div className="space-y-2">
          <Label htmlFor="new-role-name">Rol Adı</Label>
          <Input
            id="new-role-name"
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>İzinler</Label>
          <div className="space-y-2">
            {allPermissions.map((permission) => (
              <div key={permission} className="flex items-center space-x-2">
                <Checkbox
                  id={permission}
                  checked={newRolePermissions.includes(permission)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setNewRolePermissions([...newRolePermissions, permission])
                    } else {
                      setNewRolePermissions(newRolePermissions.filter(p => p !== permission))
                    }
                  }}
                />
                <Label htmlFor={permission}>{permission}</Label>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={handleAddRole}>Rol Ekle</Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Mevcut Roller</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rol Adı</TableHead>
              <TableHead>İzinler</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(", ")}</TableCell>
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
      </div>
    </div>
  )
}

