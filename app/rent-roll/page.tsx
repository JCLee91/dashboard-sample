"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  FileSpreadsheet,
  Building,
  Calendar,
  DollarSign,
} from "lucide-react"

export default function RentRollPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRentRoll, setSelectedRentRoll] = useState(null)

  const rentRolls = [
    {
      id: "RR-001",
      name: "강남구 오피스텔 A동",
      property: "강남구 테헤란로 123",
      units: 45,
      occupancy: 92,
      totalRent: 125000000,
      createdDate: "2025-01-08",
      lastUpdated: "2025-01-08",
      status: "활성",
    },
    {
      id: "RR-002",
      name: "서초구 상가건물",
      property: "서초구 강남대로 456",
      units: 12,
      occupancy: 83,
      totalRent: 45000000,
      createdDate: "2025-01-07",
      lastUpdated: "2025-01-07",
      status: "활성",
    },
    {
      id: "RR-003",
      name: "마포구 오피스 빌딩",
      property: "마포구 월드컵로 789",
      units: 28,
      occupancy: 96,
      totalRent: 89000000,
      createdDate: "2025-01-06",
      lastUpdated: "2025-01-08",
      status: "활성",
    },
    {
      id: "RR-004",
      name: "용산구 복합상가",
      property: "용산구 이태원로 321",
      units: 18,
      occupancy: 78,
      totalRent: 32000000,
      createdDate: "2025-01-05",
      lastUpdated: "2025-01-06",
      status: "검토중",
    },
  ]

  const filteredRentRolls = rentRolls.filter(
    (rentRoll) =>
      rentRoll.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rentRoll.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rentRoll.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ko-KR").format(amount) + "원"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "활성":
        return "bg-green-500/20 text-green-500"
      case "검토중":
        return "bg-orange-500/20 text-orange-500"
      case "비활성":
        return "bg-neutral-500/20 text-neutral-300"
      default:
        return "bg-neutral-500/20 text-neutral-300"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">렌트롤 관리</h1>
          <p className="text-sm text-neutral-400">임대차 현황 및 수익 분석</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="w-4 h-4 mr-2" />새 렌트롤 생성
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            일괄 다운로드
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">총 렌트롤</p>
                <p className="text-2xl font-bold text-white">{rentRolls.length}</p>
              </div>
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">총 유닛 수</p>
                <p className="text-2xl font-bold text-white">{rentRolls.reduce((sum, rr) => sum + rr.units, 0)}</p>
              </div>
              <Building className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">평균 입주율</p>
                <p className="text-2xl font-bold text-white">
                  {Math.round(rentRolls.reduce((sum, rr) => sum + rr.occupancy, 0) / rentRolls.length)}%
                </p>
              </div>
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">총 임대수익</p>
                <p className="text-2xl font-bold text-white">
                  {Math.round(rentRolls.reduce((sum, rr) => sum + rr.totalRent, 0) / 100000000)}억
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              placeholder="렌트롤 이름, 부동산명, ID로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
            />
          </div>
        </CardContent>
      </Card>

      {/* Rent Roll List */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-white">렌트롤 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRentRolls.map((rentRoll) => (
              <div
                key={rentRoll.id}
                className="border border-neutral-700 rounded-lg p-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <FileSpreadsheet className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{rentRoll.name}</h3>
                        <p className="text-sm text-neutral-400">{rentRoll.id}</p>
                        <p className="text-sm text-neutral-300 mt-1">{rentRoll.property}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">유닛 수:</span>
                        <span className="text-white ml-2">{rentRoll.units}개</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">입주율:</span>
                        <span className="text-white ml-2">{rentRoll.occupancy}%</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">총 임대료:</span>
                        <span className="text-white ml-2">{formatCurrency(rentRoll.totalRent)}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">최종 수정:</span>
                        <span className="text-white ml-2">{rentRoll.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <Badge className={getStatusColor(rentRoll.status)}>{rentRoll.status}</Badge>

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-neutral-400 hover:text-blue-500"
                        onClick={() => setSelectedRentRoll(rentRoll)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-green-500">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rent Roll Detail Modal */}
      {selectedRentRoll && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-white">{selectedRentRoll.name}</CardTitle>
                <p className="text-sm text-neutral-400">
                  {selectedRentRoll.id} • {selectedRentRoll.property}
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedRentRoll(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 mb-2">기본 정보</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">생성일:</span>
                        <span className="text-white">{selectedRentRoll.createdDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">최종 수정:</span>
                        <span className="text-white">{selectedRentRoll.lastUpdated}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">상태:</span>
                        <Badge className={getStatusColor(selectedRentRoll.status)}>{selectedRentRoll.status}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-300 mb-2">임대 현황</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">총 유닛:</span>
                        <span className="text-white">{selectedRentRoll.units}개</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">입주율:</span>
                        <span className="text-white">{selectedRentRoll.occupancy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">총 임대료:</span>
                        <span className="text-white">{formatCurrency(selectedRentRoll.totalRent)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-neutral-700">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  엑셀 다운로드
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  편집
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  복사본 생성
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
