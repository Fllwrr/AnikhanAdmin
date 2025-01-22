"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SendNotificationPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState("all")

  const handleSend = () => {
    console.log("Bildirim gönderildi:", { title, content, type })
    // Burada bildirim gönderme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bildirim Gönder</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Başlık</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="content">İçerik</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="type">Bildirim Türü</Label>
          <Select onValueChange={setType} defaultValue={type}>
            <SelectTrigger>
              <SelectValue placeholder="Bildirim türü seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Kullanıcılar</SelectItem>
              <SelectItem value="premium">Premium Kullanıcılar</SelectItem>
              <SelectItem value="new">Yeni Kullanıcılar</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleSend}>Bildirimi Gönder</Button>
      </div>
    </div>
  )
}

