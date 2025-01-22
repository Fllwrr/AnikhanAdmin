"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const emailTemplates = [
  { id: 1, name: "Hoş Geldin E-postası", subject: "Aramıza Hoş Geldin!" },
  { id: 2, name: "Şifre Sıfırlama", subject: "Şifre Sıfırlama Talebi" },
  { id: 3, name: "Yeni Bölüm Bildirimi", subject: "Yeni Bölüm Yayında!" },
]

export default function EmailManagementPage() {
  const [templateName, setTemplateName] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  const handleSave = () => {
    console.log("E-posta şablonu kaydedildi:", { templateName, subject, content })
    // Burada e-posta şablonu kaydetme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">E-posta Yönetimi</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Yeni E-posta Şablonu</h2>
        <div>
          <Label htmlFor="templateName">Şablon Adı</Label>
          <Input
            id="templateName"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="subject">Konu</Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
        <Button onClick={handleSave}>Şablonu Kaydet</Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Mevcut E-posta Şablonları</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Şablon Adı</TableHead>
              <TableHead>Konu</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emailTemplates.map((template) => (
              <TableRow key={template.id}>
                <TableCell>{template.name}</TableCell>
                <TableCell>{template.subject}</TableCell>
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

