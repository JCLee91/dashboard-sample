"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Activity, Settings } from "lucide-react"

export default function SystemStats() {
  const systemStats = [
    {
      title: "시스템 온라인",
      value: "5/6",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "경고",
      value: "1",
      icon: AlertTriangle,
      color: "text-orange-500",
    },
    {
      title: "평균 가동률",
      value: "99.7%",
      icon: Activity,
      color: "text-white",
    },
    {
      title: "유지보수 중",
      value: "1",
      icon: Settings,
      color: "text-neutral-300",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {systemStats.map((stat, index) => (
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
