"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

interface RentRollModalProps {
  selectedRentRoll: any
  onClose: () => void
}

export default function RentRollModal({ selectedRentRoll, onClose }: RentRollModalProps) {
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

  return (
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
            <Button variant="ghost" onClick={onClose} className="text-neutral-400 hover:text-white">
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
                            unit.status === "임대중" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
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
  )
}
