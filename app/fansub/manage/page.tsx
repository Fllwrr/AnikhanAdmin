"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function FansubManagePage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isActive, setIsActive] = useState(true)

  const handleSave = () => {
    console.log("Fansub kaydedildi:", { name, description, isActive })
    // Burada fansub kaydetme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Ekle/Düzenle</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="fansub-name">Fansub Adı</Label>
          <Input
            id="fansub-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="fansub-description">Açıklama</Label>
          <Textarea
            id="fansub-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="fansub-status"
            checked={isActive}
            onCheckedChange={setIsActive}
          />
          <Label htmlFor="fansub-status">Aktif</Label>
        </div>
        <Button onClick={handleSave}>Kaydet</Button>
      </div>
    </div>
  )
}

