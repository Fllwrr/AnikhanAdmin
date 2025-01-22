"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Ocak",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Şubat",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mart",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nisan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mayıs",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Haziran",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Temmuz",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

