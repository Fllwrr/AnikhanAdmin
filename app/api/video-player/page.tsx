"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function VideoPlayerManagementPage() {
  const [playerUrl, setPlayerUrl] = useState("https://example.com/player.js")
  const [autoplay, setAutoplay] = useState(false)
  const [customCSS, setCustomCSS] = useState("")

  const handleSave = () => {
    console.log("Video oynatıcı ayarları kaydedildi:", { playerUrl, autoplay, customCSS })
    // Burada video oynatıcı ayarlarını kaydetme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Video Oynatıcı Yönetimi</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="player-url">Oynatıcı URL</Label>
          <Input
            id="player-url"
            value={playerUrl}
            onChange={(e) => setPlayerUrl(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="autoplay"
            checked={autoplay}
            onCheckedChange={setAutoplay}
          />
          <Label htmlFor="autoplay">Otomatik Oynatma</Label>
        </div>
        <div>
          <Label htmlFor="custom-css">Özel CSS</Label>
          <Textarea
            id="custom-css"
            value={customCSS}
            onChange={(e) => setCustomCSS(e.target.value)}
            placeholder=".video-player { ... }"
          />
        </div>
        <Button onClick={handleSave}>Ayarları Kaydet</Button>
      </div>
    </div>
  )
}

