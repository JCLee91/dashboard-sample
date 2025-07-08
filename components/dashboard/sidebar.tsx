"use client"

import { ChevronRight, Home, FileSpreadsheet, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

export default function Sidebar({
  activeSection,
  setActiveSection,
  sidebarCollapsed,
  setSidebarCollapsed,
}: SidebarProps) {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "메인 대시보드" },
    { id: "rent-roll", icon: FileSpreadsheet, label: "렌트롤" },
    { id: "systems", icon: Settings, label: "시스템" },
  ]

  return (
    <div
      className={`${sidebarCollapsed ? "w-16" : "w-70"} bg-neutral-900 border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full md:h-auto ${!sidebarCollapsed ? "md:block" : ""}`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
            <h1 className="text-orange-500 font-bold text-lg tracking-wider">PROP ANALYZER</h1>
            <p className="text-neutral-500 text-xs">v1.0.0 BETA</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-neutral-400 hover:text-orange-500"
          >
            <ChevronRight
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
            />
          </Button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${
                activeSection === item.id
                  ? "bg-orange-500 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              <item.icon className="w-5 h-5 md:w-5 md:h-5 sm:w-6 sm:h-6" />
              {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {!sidebarCollapsed && (
          <div className="mt-8 p-4 bg-neutral-800 border border-neutral-700 rounded">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs text-white">시스템 온라인</span>
            </div>
            <div className="text-xs text-neutral-500">
              <div>업타임: 99.9%</div>
              <div>처리된 계약서: 1,247건</div>
              <div>생성된 렌트롤: 89건</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
