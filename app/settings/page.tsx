"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("Anikhan")
  const [siteDescription, setSiteDescription] = useState("Anime izleme platformu")
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [emailServer, setEmailServer] = useState("smtp.example.com")
  const [emailPort, setEmailPort] = useState("587")
  const [emailUsername, setEmailUsername] = useState("admin@example.com")
  const [emailPassword, setEmailPassword] = useState("")

  const handleSave = () => {
    // Burada ayarları kaydetme işlemi yapılacak
    console.log("Ayarlar kaydedildi:", { siteName, siteDescription, maintenanceMode, emailServer, emailPort, emailUsername, emailPassword })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ayarlar</h1>
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">Genel</TabsTrigger>
          <TabsTrigger value="email">E-posta</TabsTrigger>
          <TabsTrigger value="security">Güvenlik</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <div>
            <Label htmlFor="site-name">Site Adı</Label>
            <Input
              id="site-name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="site-description">Site Açıklaması</Label>
            <Textarea
              id="site-description"
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="maintenance-mode"
              checked={maintenanceMode}
              onCheckedChange={setMaintenanceMode}
            />
            <Label htmlFor="maintenance-mode">Bakım Modu</Label>
          </div>
        </TabsContent>
        <TabsContent value="email" className="space-y-4">
          <div>
            <Label htmlFor="email-server">E-posta Sunucusu</Label>
            <Input
              id="email-server"
              value={emailServer}
              onChange={(e) => setEmailServer(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email-port">E-posta Port</Label>
            <Input
              id="email-port"
              value={emailPort}
              onChange={(e) => setEmailPort(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email-username">E-posta Kullanıcı Adı</Label>
            <Input
              id="email-username"
              value={emailUsername}
              onChange={(e) => setEmailUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email-password">E-posta Şifresi</Label>
            <Input
              id="email-password"
              type="password"
              value={emailPassword}
              onChange={(e) => setEmailPassword(e.target.value)}
            />
          </div>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <div>
            <Label htmlFor="two-factor">İki Faktörlü Kimlik Doğrulama</Label>
            <Switch id="two-factor" />
          </div>
          <div>
            <Label htmlFor="password-policy">Güçlü Şifre Politikası</Label>
            <Switch id="password-policy" />
          </div>
        </TabsContent>
      </Tabs>
      <Button onClick={handleSave}>Ayarları Kaydet</Button>
    </div>
  )
}

