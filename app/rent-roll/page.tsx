"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Upload, Download, FileSpreadsheet, Search, Filter, Plus, Eye, Trash2 } from "lucide-react"

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

  const sampleRentRollData = [
    {
      unit: "101호",
      tenant: "㈜테크솔루션",
      area: "84.5㎡",
      rent: "2,500,000",
      deposit: "50,000,000",
      startDate: "2024-03-01",
      endDate: "2026-02-28",
      status: "임대중",
    },
    {
      unit: "102호",
      tenant: "디자인스튜디오",
      area: "76.2㎡",
      rent: "2,200,000",
      deposit: "44,000,000",
      startDate: "2024-06-01",
      endDate: "2026-05-31",
      status: "임대중",
    },
    {
      unit: "103호",
      tenant: "-",
      area: "92.1㎡",
      rent: "-",
      deposit: "-",
      startDate: "-",
      endDate: "-",
      status: "공실",
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">총 렌트롤</p>
                <p className="text-2xl font-bold text-white">89</p>
              </div>
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">평균 공실률</p>
                <p className="text-2xl font-bold text-white">8.3%</p>
              </div>
              <FileSpreadsheet className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">총 임대수익</p>
                <p className="text-2xl font-bold text-white">2.4억</p>
              </div>
              <FileSpreadsheet className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">생성 중</p>
                <p className="text-2xl font-bold text-orange-500">3</p>
              </div>
              <FileSpreadsheet className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

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

      {/* Rent Roll List */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">렌트롤 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">ID</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">건물명</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">생성일</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">상태</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">총 세대수</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">입주율</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">총 임대료</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-neutral-400 tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody>
                {filteredRentRolls.map((rentRoll) => (
                  <tr
                    key={rentRoll.id}
                    className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer"
                    onClick={() => setSelectedRentRoll(rentRoll)}
                  >
                    <td className="py-3 px-4 text-sm text-white">{rentRoll.id}</td>
                    <td className="py-3 px-4 text-sm text-white">{rentRoll.name}</td>
                    <td className="py-3 px-4 text-sm text-neutral-300">{rentRoll.createdDate}</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          rentRoll.status === "완료"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-orange-500/20 text-orange-500"
                        }
                      >
                        {rentRoll.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-white">{rentRoll.totalUnits}</td>
                    <td className="py-3 px-4 text-sm text-white">{rentRoll.occupancyRate}%</td>
                    <td className="py-3 px-4 text-sm text-white">{rentRoll.totalRent}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

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

      {/* Rent Roll Detail Modal */}
      {selectedRentRoll && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-neutral-900 border-neutral-700 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-white tracking-wider">{selectedRentRoll.name}</CardTitle>
                <p className="text-sm text-neutral-400">
                  {selectedRentRoll.id} • 마지막 업데이트: {selectedRentRoll.lastUpdated}
                </p>
              </div>
              <div className="flex gap-2">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  엑셀 다운로드
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedRentRoll(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-neutral-800 p-4 rounded">
                  <p className="text-sm text-neutral-400">총 세대수</p>
                  <p className="text-xl font-bold text-white">{selectedRentRoll.totalUnits}</p>
                </div>
                <div className="bg-neutral-800 p-4 rounded">
                  <p className="text-sm text-neutral-400">입주 세대</p>
                  <p className="text-xl font-bold text-white">{selectedRentRoll.occupiedUnits}</p>
                </div>
                <div className="bg-neutral-800 p-4 rounded">
                  <p className="text-sm text-neutral-400">입주율</p>
                  <p className="text-xl font-bold text-white">{selectedRentRoll.occupancyRate}%</p>
                </div>
                <div className="bg-neutral-800 p-4 rounded">
                  <p className="text-sm text-neutral-400">총 임대료</p>
                  <p className="text-xl font-bold text-white">{selectedRentRoll.totalRent}</p>
                </div>
              </div>

              {/* Detailed Rent Roll Table */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">상세 렌트롤</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">호실</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">임차인</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">면적</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">월세</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">보증금</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">계약시작</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">계약종료</th>
                        <th className="text-left py-2 px-3 text-xs font-medium text-neutral-400">상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleRentRollData.map((unit, index) => (
                        <tr key={index} className="border-b border-neutral-800">
                          <td className="py-2 px-3 text-sm text-white">{unit.unit}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.tenant}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.area}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.rent}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.deposit}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.startDate}</td>
                          <td className="py-2 px-3 text-sm text-white">{unit.endDate}</td>
                          <td className="py-2 px-3">
                            <Badge
                              className={
                                unit.status === "임대중"
                                  ? "bg-green-500/20 text-green-500"
                                  : "bg-red-500/20 text-red-500"
                              }
                            >
                              {unit.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
