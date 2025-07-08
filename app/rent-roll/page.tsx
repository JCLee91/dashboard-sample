"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Plus, Search, Filter } from "lucide-react"
import RentRollStats from "@/components/rent-roll/rent-roll-stats"
import RentRollTable from "@/components/rent-roll/rent-roll-table"
import RentRollModal from "@/components/rent-roll/rent-roll-modal"

export default function RentRollPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRentRoll, setSelectedRentRoll] = useState(null)

  const rentRolls = [
    {
      id: "RR-001",
      name: "강남구 오피스빌딩 A동",
      createdDate: "2025-01-08",
      status: "완료",
      totalUnits: 24,
      occupiedUnits: 22,
      totalRent: "156,000,000",
      occupancyRate: 91.7,
      lastUpdated: "2025-01-08 14:30",
    },
    {
      id: "RR-002",
      name: "서초구 상가건물 B동",
      createdDate: "2025-01-07",
      status: "완료",
      totalUnits: 18,
      occupiedUnits: 16,
      totalRent: "89,500,000",
      occupancyRate: 88.9,
      lastUpdated: "2025-01-07 16:45",
    },
    {
      id: "RR-003",
      name: "마포구 복합건물 C동",
      createdDate: "2025-01-06",
      status: "생성중",
      totalUnits: 32,
      occupiedUnits: 0,
      totalRent: "0",
      occupancyRate: 0,
      lastUpdated: "2025-01-06 09:15",
    },
  ]

  const filteredRentRolls = rentRolls.filter(
    (rentRoll) =>
      rentRoll.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rentRoll.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">렌트롤 관리</h1>
          <p className="text-sm text-neutral-400">임대차계약서를 분석하여 렌트롤을 생성하고 관리하세요</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="w-4 h-4 mr-2" />새 렌트롤 생성
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Upload className="w-4 h-4 mr-2" />
            계약서 업로드
          </Button>
        </div>
      </div>

      <RentRollStats />

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="렌트롤 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400"
          />
        </div>
        <Button
          variant="outline"
          className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 bg-transparent"
        >
          <Filter className="w-4 h-4 mr-2" />
          필터
        </Button>
      </div>

      <RentRollTable rentRolls={filteredRentRolls} onSelectRentRoll={setSelectedRentRoll} />

      {/* Upload Section */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-white">새 렌트롤 생성</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-neutral-600 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <p className="text-white font-medium mb-2">임대차계약서 파일들을 업로드하세요</p>
            <p className="text-sm text-neutral-400 mb-4">
              여러 개의 PDF 파일을 한 번에 업로드하여 렌트롤을 자동 생성합니다
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Upload className="w-4 h-4 mr-2" />
              파일 선택
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedRentRoll && (
        <RentRollModal selectedRentRoll={selectedRentRoll} onClose={() => setSelectedRentRoll(null)} />
      )}
    </div>
  )
}
