"use client"

import { Button } from "@/components/ui/button"
import { Bell, RefreshCw } from "lucide-react"

interface TopToolbarProps {
  activeSection: string
}

export default function TopToolbar({ activeSection }: TopToolbarProps) {
  const getSectionLabel = (section: string) => {
    switch (section) {
      case "dashboard":
        return "메인 대시보드"
      case "rent-roll":
        return "렌트롤"
      case "systems":
        return "시스템"
      default:
        return section
    }
  }

  return (
    <div className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-neutral-400">
          PROP ANALYZER / <span className="text-orange-500">{getSectionLabel(activeSection)}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xs text-neutral-500">마지막 업데이트: {new Date().toLocaleString("ko-KR")}</div>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
