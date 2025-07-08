"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Database, HardDrive, Users } from "lucide-react"
import SystemStats from "@/components/systems/system-stats"
import SystemGrid from "@/components/systems/system-grid"

export default function SystemsPage() {
  const [selectedSystem, setSelectedSystem] = useState(null)

  const systems = [
    {
      id: "SYS-001",
      name: "문서 분석 서버",
      type: "AI Processing",
      status: "online",
      health: 98,
      cpu: 45,
      memory: 67,
      storage: 34,
      uptime: "247 days",
      location: "Seoul DC-1",
      lastMaintenance: "2025-01-05",
    },
    {
      id: "SYS-002",
      name: "데이터베이스 클러스터",
      type: "Database",
      status: "online",
      health: 95,
      cpu: 72,
      memory: 84,
      storage: 78,
      uptime: "189 days",
      location: "Seoul DC-2",
      lastMaintenance: "2025-01-01",
    },
    {
      id: "SYS-003",
      name: "파일 저장소",
      type: "Storage",
      status: "warning",
      health: 87,
      cpu: 23,
      memory: 45,
      storage: 89,
      uptime: "156 days",
      location: "Seoul DC-1",
      lastMaintenance: "2024-12-20",
    },
    {
      id: "SYS-004",
      name: "웹 애플리케이션 서버",
      type: "Web Server",
      status: "online",
      health: 92,
      cpu: 38,
      memory: 52,
      storage: 23,
      uptime: "203 days",
      location: "Seoul DC-1",
      lastMaintenance: "2024-12-28",
    },
    {
      id: "SYS-005",
      name: "백업 시스템",
      type: "Backup",
      status: "maintenance",
      health: 76,
      cpu: 15,
      memory: 28,
      storage: 45,
      uptime: "0 days",
      location: "Busan DC-1",
      lastMaintenance: "2025-01-08",
    },
    {
      id: "SYS-006",
      name: "API 게이트웨이",
      type: "Network",
      status: "online",
      health: 94,
      cpu: 29,
      memory: 41,
      storage: 12,
      uptime: "134 days",
      location: "Seoul DC-1",
      lastMaintenance: "2024-12-10",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">시스템 모니터링</h1>
          <p className="text-sm text-neutral-400">인프라 상태 및 성능 모니터링</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">시스템 스캔</Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">유지보수 모드</Button>
        </div>
      </div>

      <SystemStats />

      {/* Service Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">서비스 상태</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-green-500" />
                <span className="text-white">문서 분석 서비스</span>
              </div>
              <Badge className="bg-green-500/20 text-green-500">정상</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-green-500" />
                <span className="text-white">데이터베이스 서비스</span>
              </div>
              <Badge className="bg-green-500/20 text-green-500">정상</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-orange-500" />
                <span className="text-white">파일 저장 서비스</span>
              </div>
              <Badge className="bg-orange-500/20 text-orange-500">경고</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-white">사용자 인증 서비스</span>
              </div>
              <Badge className="bg-green-500/20 text-green-500">정상</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">처리 통계</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">오늘 처리된 문서</span>
                <span className="text-white font-bold">247건</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">생성된 렌트롤</span>
                <span className="text-white font-bold">18건</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">2.3초</p>
                <p className="text-xs text-neutral-400">평균 처리시간</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">99.2%</p>
                <p className="text-xs text-neutral-400">성공률</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SystemGrid systems={systems} onSelectSystem={setSelectedSystem} />
    </div>
  )
}
