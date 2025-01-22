"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SecuritySettingsPage() {
  const [twoFactor, setTwoFactor] = useState(false)
  const [passwordPolicy, setPasswordPolicy] = useState(false)
  const [loginAttempts, setLoginAttempts] = useState("3")
  const [sessionTimeout, setSessionTimeout] = useState("30")

  const handleSave = () => {
    console.log("Güvenlik ayarları kaydedildi:", { twoFactor, passwordPolicy, loginAttempts, sessionTimeout })
    // Burada güvenlik ayarlarını kaydetme işlemi yapılacak
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Güvenlik Ayarları</h1>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="two-factor">İki Faktörlü Kimlik Doğrulama</Label>
          <Switch
            id="two-factor"
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password-policy">Güçlü Şifre Politikası</Label>
          <Switch
            id="password-policy"
            checked={passwordPolicy}
            onCheckedChange={setPasswordPolicy}
          />
        </div>
        <div>
          <Label htmlFor="login-attempts">Maksimum Başarısız Giriş Denemesi</Label>
          <Input
            id="login-attempts"
            type="number"
            value={loginAttempts}
            onChange={(e) => setLoginAttempts(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="session-timeout">Oturum Zaman Aşımı (dakika)</Label>
          <Input
            id="session-timeout"
            type="number"
            value={sessionTimeout}
            onChange={(e) => setSessionTimeout(e.target.value)}
          />
        </div>
        <Button onClick={handleSave}>Ayarları Kaydet</Button>
      </div>
    </div>
  )
}

