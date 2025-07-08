"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Download, Trash2 } from "lucide-react"

interface RentRollTableProps {
  rentRolls: any[]
  onSelectRentRoll: (rentRoll: any) => void
}

export default function RentRollTable({ rentRolls, onSelectRentRoll }: RentRollTableProps) {
  return (
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
              {rentRolls.map((rentRoll) => (
                <tr
                  key={rentRoll.id}
                  className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer"
                  onClick={() => onSelectRentRoll(rentRoll)}
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
  )
}
