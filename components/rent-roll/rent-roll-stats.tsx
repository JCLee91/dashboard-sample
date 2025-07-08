"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileSpreadsheet } from "lucide-react"

export default function RentRollStats() {
  const stats = [
    {
      title: "총 렌트롤",
      value: "89",
      icon: FileSpreadsheet,
      color: "text-white",
    },
    {
      title: "평균 공실률",
      value: "8.3%",
      icon: FileSpreadsheet,
      color: "text-orange-500",
    },
    {
      title: "총 임대수익",
      value: "2.4억",
      icon: FileSpreadsheet,
      color: "text-green-500",
    },
    {
      title: "생성 중",
      value: "3",
      icon: FileSpreadsheet,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
