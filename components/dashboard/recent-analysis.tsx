"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export default function RecentAnalysis() {
  const recentAnalyses = [
    {
      id: "DOC-001",
      fileName: "강남구_오피스텔_임대차계약서.pdf",
      uploadDate: "2025-01-08",
      status: "분석완료",
      rentAmount: "2,500,000",
      deposit: "50,000,000",
      area: "84.5㎡",
    },
    {
      id: "DOC-002",
      fileName: "서초구_상가_임대차계약서.pdf",
      uploadDate: "2025-01-07",
      status: "분석완료",
      rentAmount: "3,200,000",
      deposit: "100,000,000",
      area: "120.3㎡",
    },
    {
      id: "DOC-003",
      fileName: "마포구_사무실_임대차계약서.pdf",
      uploadDate: "2025-01-07",
      status: "처리중",
      rentAmount: "-",
      deposit: "-",
      area: "-",
    },
  ]

  return (
    <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-white">최근 분석 결과</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">파일명</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">업로드일</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">상태</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">월세</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">보증금</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">면적</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-400">작업</th>
              </tr>
            </thead>
            <tbody>
              {recentAnalyses.map((analysis) => (
                <tr key={analysis.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                  <td className="py-3 px-2 text-sm text-white max-w-48 truncate">{analysis.fileName}</td>
                  <td className="py-3 px-2 text-sm text-neutral-300">{analysis.uploadDate}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        analysis.status === "분석완료"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-orange-500/20 text-orange-500"
                      }`}
                    >
                      {analysis.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm text-white">{analysis.rentAmount}</td>
                  <td className="py-3 px-2 text-sm text-white">{analysis.deposit}</td>
                  <td className="py-3 px-2 text-sm text-white">{analysis.area}</td>
                  <td className="py-3 px-2">
                    <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400">
                      <Eye className="w-4 h-4" />
                    </Button>
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
