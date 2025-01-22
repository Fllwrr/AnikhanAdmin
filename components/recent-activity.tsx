import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    user: "Alice",
    action: "yeni bir anime ekledi",
    anime: "Naruto",
    time: "2 saat önce",
  },
  {
    user: "Bob",
    action: "yeni bir bölüm yükledi",
    anime: "One Piece",
    time: "3 saat önce",
  },
  {
    user: "Charlie",
    action: "bir yorumu onayladı",
    anime: "Attack on Titan",
    time: "5 saat önce",
  },
  {
    user: "David",
    action: "yeni bir kategori oluşturdu",
    category: "Romantik Komedi",
    time: "6 saat önce",
  },
  {
    user: "Eve",
    action: "bir kullanıcıyı engelledi",
    user: "TrollUser123",
    time: "1 gün önce",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>{activity.user[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user} {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">
              {activity.anime || activity.category || activity.user}
            </p>
          </div>
          <div className="ml-auto font-medium text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}

