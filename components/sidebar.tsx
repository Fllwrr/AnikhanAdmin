"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, BarChart2, MessageSquare, Bell, Settings, ChevronDown, Sun, Moon, DollarSign, Shield, Tv, UsersIcon } from 'lucide-react'
import { useTheme } from "next-themes"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Kullanıcı Yönetimi",
    icon: Users,
    href: "/users",
    subItems: [
      { title: "Kullanıcı Listesi", href: "/users/list" },
      { title: "Roller ve İzinler", href: "/users/roles" },
      { title: "Engellenen Kullanıcılar", href: "/users/banned" },
      { title: "Kayıt ve Oturum Geçmişi", href: "/users/history" },
    ],
  },
  {
    title: "Site İstatistikleri",
    icon: BarChart2,
    href: "/stats",
    subItems: [
      { title: "Trafik Analizi", href: "/stats/traffic" },
      { title: "Popüler İçerik", href: "/stats/popular" },
      { title: "Kullanıcı Etkileşimleri", href: "/stats/interactions" },
    ],
  },
  {
    title: "Reklam Yönetimi",
    icon: DollarSign,
    href: "/ads",
    subItems: [
      { title: "Reklam Alanları", href: "/ads/placements" },
      { title: "Reklam Performansı", href: "/ads/performance" },
    ],
  },
  {
    title: "Bildirimler ve Duyurular",
    icon: Bell,
    href: "/notifications",
    subItems: [
      { title: "Bildirim Gönderme", href: "/notifications/send" },
      { title: "E-posta Yönetimi", href: "/notifications/email" },
    ],
  },
  {
    title: "Yedekleme ve Güvenlik",
    icon: Shield,
    href: "/security",
    subItems: [
      { title: "Yedekleme Yönetimi", href: "/security/backup" },
      { title: "Güvenlik Ayarları", href: "/security/settings" },
      { title: "Log Yönetimi", href: "/security/logs" },
    ],
  },
  {
    title: "Yorum ve Moderasyon",
    icon: MessageSquare,
    href: "/moderation",
    subItems: [
      { title: "Yorum Listesi", href: "/moderation/comments" },
      { title: "Şikayet Yönetimi", href: "/moderation/complaints" },
    ],
  },
  {
    title: "API ve Entegrasyonlar",
    icon: Tv,
    href: "/api",
    subItems: [
      { title: "Video Oynatıcı Yönetimi", href: "/api/video-player" },
      { title: "API Yönetimi", href: "/api/management" },
    ],
  },
  {
    title: "Fansub İşlemleri",
    icon: UsersIcon,
    href: "/fansub",
    subItems: [
      { title: "Fansub Listesi", href: "/fansub/list" },
      { title: "Fansub Ekle/Düzenle", href: "/fansub/manage" },
      { title: "Fansub Üye Listesi", href: "/fansub/members" },
      { title: "Üye Ekle/Düzenle", href: "/fansub/member-manage" },
      { title: "Rol Yönetimi", href: "/fansub/roles" },
      { title: "Fansub Detayları", href: "/fansub/details" },
      { title: "Fansub Log ve Takip", href: "/fansub/logs" },
    ],
  },
  {
    title: "Ayarlar",
    icon: Settings,
    href: "/settings",
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})
  const { theme, setTheme } = useTheme()

  const toggleDropdown = (title: string) => {
    setOpenDropdowns(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <div className="w-72 bg-black text-white p-4 space-y-4 h-screen overflow-y-auto">
      <div className="text-2xl font-bold mb-6 flex justify-between items-center">
        <span>Anikhan Admin</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>
      {sidebarItems.map((item) => (
        <div key={item.title}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => item.subItems && toggleDropdown(item.title)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
            {item.subItems && (
              <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${openDropdowns[item.title] ? 'rotate-180' : ''}`} />
            )}
          </Button>
          {item.subItems && openDropdowns[item.title] && (
            <div className="ml-4 mt-2 space-y-2">
              {item.subItems.map((subItem) => (
                <Link key={subItem.href} href={subItem.href}>
                  <Button
                    variant={pathname === subItem.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm"
                  >
                    {subItem.title}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

