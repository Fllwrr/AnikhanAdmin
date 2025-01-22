"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const images = [
  { id: 1, name: "naruto_cover.jpg", anime: "Naruto" },
  { id: 2, name: "one_piece_cover.jpg", anime: "One Piece" },
  { id: 3, name: "attack_on_titan_cover.jpg", anime: "Attack on Titan" },
  // Daha fazla görsel ekleyebilirsiniz
]

export default function ImagesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(images.length / itemsPerPage)

  const paginatedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">İçerik Görselleri</h1>
      <div className="flex justify-between items-center">
        <Button>Yeni Görsel Yükle</Button>
        <Input type="text" placeholder="Görsel ara..." className="max-w-sm" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {paginatedImages.map((image) => (
          <Card key={image.id}>
            <CardContent className="p-4">
              <img
                src={`/placeholder.svg?height=200&width=300`}
                alt={image.name}
                className="w-full h-40 object-cover mb-2"
              />
              <p className="font-semibold">{image.name}</p>
              <p className="text-sm text-gray-500">{image.anime}</p>
              <div className="mt-2 space-x-2">
                <Button variant="outline" size="sm">Düzenle</Button>
                <Button variant="outline" size="sm">Sil</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          Sayfa {currentPage} / {totalPages}
        </div>
        <div className="space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Önceki
          </Button>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Sonraki
          </Button>
        </div>
      </div>
    </div>
  )
}

