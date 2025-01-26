"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const fansubDetails = {
  name: "Anime Sevenler",
  memberCount: 50,
  activeProjects: 3,
  completedProjects: 15,
  foundationDate: "2022-01-01",
}

const recentProjects = [
  { id: 1, name: "Naruto", status: "Devam Ediyor", progress: "60%" },
  { id: 2, name: "One Piece", status: "Devam Ediyor", progress: "75%" },
  { id: 3, name: "Attack on Titan", status: "Tamamlandı", progress: "100%" },
]

export default function FansubDetailsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fansub Detayları: {fansubDetails.name}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Üye Sayısı</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fansubDetails.memberCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif Projeler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fansubDetails.activeProjects}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tamamlanan Projeler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fansubDetails.completedProjects}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kuruluş Tarihi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fansubDetails.foundationDate}</div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Son Projeler</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Proje Adı</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>İlerleme</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{project.progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button>Tüm Projeleri Görüntüle</Button>
    </div>
  )
}

