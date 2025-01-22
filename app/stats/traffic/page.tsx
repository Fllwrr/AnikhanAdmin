"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"

export default function TrafficPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Trafik Analizi</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Günlük Ziyaretçi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% geçen güne göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Sayfa Görüntüleme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89,456</div>
            <p className="text-xs text-muted-foreground">
              +10.5% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ortalama Oturum Süresi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">00:08:32</div>
            <p className="text-xs text-muted-foreground">
              +5.2% geçen aya göre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Hemen Çıkma Oranı
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4%</div>
            <p className="text-xs text-muted-foreground">
              -2.3% geçen haftaya göre
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Ziyaretçi Grafiği</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
    </div>
  )
}

