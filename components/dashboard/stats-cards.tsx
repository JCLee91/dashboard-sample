"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, TrendingUp, DollarSign } from "lucide-react"

export default function StatsCards() {
  const stats = [
    {
      title: "총 분석 건수",
      value: "1,247",
      change: "+12% 이번 달",
      icon: FileText,
      changeColor: "text-green-500",
    },
    {
      title: "생성된 렌트롤",
      value: "89",
      change: "+8% 이번 달",
      icon: FileText,
      changeColor: "text-green-500",
    },
    {
      title: "평균 임대료",
      value: "2.8M",
      change: "+5.2% 전월 대비",
      icon: DollarSign,
      changeColor: "text-green-500",
    },
    {
      title: "분석 중인 문서",
      value: "12",
      change: "실시간 처리",
      icon: TrendingUp,
      changeColor: "text-neutral-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className={`text-xs ${stat.changeColor} mt-1`}>{stat.change}</p>
              </div>
              <stat.icon className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
