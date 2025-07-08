"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Server,
  Database,
  Shield,
  Wifi,
  HardDrive,
  Cpu,
  Activity,
  AlertTriangle,
  CheckCircle,
  Settings,
  FileText,
  Users,
} from "lucide-react"

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500/20 text-green-500"
      case "warning":
        return "bg-orange-500/20 text-orange-500"
      case "maintenance":
        return "bg-neutral-500/20 text-neutral-300"
      case "offline":
        return "bg-red-500/20 text-red-500"
      default:
        return "bg-neutral-500/20 text-neutral-300"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-4 h-4" />
      case "warning":
        return <AlertTriangle className="w-4 h-4" />
      case "maintenance":
        return <Settings className="w-4 h-4" />
      case "offline":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  const getSystemIcon = (type: string) => {
    switch (type) {
      case "AI Processing":
        return <Cpu className="w-6 h-6" />
      case "Database":
        return <Database className="w-6 h-6" />
      case "Storage":
        return <HardDrive className="w-6 h-6" />
      case "Web Server":
        return <Server className="w-6 h-6" />
      case "Backup":
        return <Shield className="w-6 h-6" />
      case "Network":
        return <Wifi className="w-6 h-6" />
      default:
        return <Server className="w-6 h-6" />
    }
  }

  const getHealthColor = (health: number) => {
    if (health >= 95) return "text-green-500"
    if (health >= 85) return "text-white"
    if (health >= 70) return "text-orange-500"
    return "text-red-500"
  }

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

      {/* System Overview Stats */}
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

      {/* Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {systems.map((system) => (
          <Card
            key={system.id}
            className="bg-neutral-900 border-neutral-700 hover:border-orange-500/50 transition-colors cursor-pointer"
            onClick={() => setSelectedSystem(system)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getSystemIcon(system.type)}
                  <div>
                    <CardTitle className="text-sm font-bold text-white tracking-wider">{system.name}</CardTitle>
                    <p className="text-xs text-neutral-400">{system.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(system.status)}
                  <Badge className={getStatusColor(system.status)}>{system.status.toUpperCase()}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">시스템 상태</span>
                <span className={`text-sm font-bold ${getHealthColor(system.health)}`}>{system.health}%</span>
              </div>
              <Progress value={system.health} className="h-2" />

              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-neutral-400 mb-1">CPU</div>
                  <div className="text-white">{system.cpu}%</div>
                  <div className="w-full bg-neutral-800 rounded-full h-1 mt-1">
                    <div
                      className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${system.cpu}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">메모리</div>
                  <div className="text-white">{system.memory}%</div>
                  <div className="w-full bg-neutral-800 rounded-full h-1 mt-1">
                    <div
                      className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${system.memory}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">저장소</div>
                  <div className="text-white">{system.storage}%</div>
                  <div className="w-full bg-neutral-800 rounded-full h-1 mt-1">
                    <div
                      className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${system.storage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>가동시간:</span>
                  <span className="text-white">{system.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span>위치:</span>
                  <span className="text-white">{system.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Detail Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                {getSystemIcon(selectedSystem.type)}
                <div>
                  <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedSystem.name}</CardTitle>
                  <p className="text-sm text-neutral-400">
                    {selectedSystem.id} • {selectedSystem.type}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedSystem(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">시스템 상태</h3>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedSystem.status)}
                      <Badge className={getStatusColor(selectedSystem.status)}>
                        {selectedSystem.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">시스템 정보</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">위치:</span>
                        <span className="text-white">{selectedSystem.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">가동시간:</span>
                        <span className="text-white">{selectedSystem.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">마지막 유지보수:</span>
                        <span className="text-white">{selectedSystem.lastMaintenance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">상태 점수:</span>
                        <span className={`${getHealthColor(selectedSystem.health)}`}>{selectedSystem.health}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 tracking-wider mb-2">리소스 사용량</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-neutral-400">CPU 사용량</span>
                          <span className="text-white">{selectedSystem.cpu}%</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${selectedSystem.cpu}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-neutral-400">메모리 사용량</span>
                          <span className="text-white">{selectedSystem.memory}%</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${selectedSystem.memory}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-neutral-400">저장소 사용량</span>
                          <span className="text-white">{selectedSystem.storage}%</span>
                        </div>
                        <div className="w-full bg-neutral-800 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${selectedSystem.storage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-neutral-700">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">시스템 재시작</Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  로그 보기
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  유지보수 예약
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
