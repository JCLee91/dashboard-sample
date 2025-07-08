"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, Download, Building } from "lucide-react"

export default function QuickActions() {
  const actions = [
    { icon: Upload, label: "임대차계약서 업로드", primary: true },
    { icon: FileText, label: "렌트롤 생성", primary: false },
    { icon: Download, label: "분석 보고서 다운로드", primary: false },
    { icon: Building, label: "포트폴리오 관리", primary: false },
  ]

  return (
    <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-white">빠른 작업</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            className={`w-full justify-start ${
              action.primary
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-neutral-800 hover:bg-neutral-700 text-white"
            }`}
          >
            <action.icon className="w-4 h-4 mr-2" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
