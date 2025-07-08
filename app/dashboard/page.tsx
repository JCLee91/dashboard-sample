"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, TrendingUp, Building, DollarSign, Upload, Download, Eye } from "lucide-react"

export default function DashboardPage() {
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
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">부동산 투자 분석 대시보드</h1>
        <p className="text-neutral-400">임대차계약서를 업로드하여 자동으로 렌트롤을 생성하고 투자 분석을 받아보세요</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-1">총 분석 건수</p>
                <p className="text-2xl font-bold text-white">1,247</p>
                <p className="text-xs text-green-500 mt-1">+12% 이번 달</p>
              </div>
              <FileText className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-1">생성된 렌트롤</p>
                <p className="text-2xl font-bold text-white">89</p>
                <p className="text-xs text-green-500 mt-1">+8% 이번 달</p>
              </div>
              <FileText className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-1">평균 임대료</p>
                <p className="text-2xl font-bold text-white">2.8M</p>
                <p className="text-xs text-green-500 mt-1">+5.2% 전월 대비</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400 mb-1">분석 중인 문서</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-xs text-neutral-500 mt-1">실시간 처리</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">빠른 작업</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start">
              <Upload className="w-4 h-4 mr-2" />
              임대차계약서 업로드
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <FileText className="w-4 h-4 mr-2" />
              렌트롤 생성
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <Download className="w-4 h-4 mr-2" />
              분석 보고서 다운로드
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <Building className="w-4 h-4 mr-2" />
              포트폴리오 관리
            </Button>
          </CardContent>
        </Card>

        {/* Recent Analysis */}
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

        {/* Upload Zone */}
        <Card className="lg:col-span-6 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">문서 업로드</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-neutral-600 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-white font-medium mb-2">임대차계약서를 드래그하거나 클릭하여 업로드</p>
              <p className="text-sm text-neutral-400 mb-4">PDF, DOC, DOCX 파일 지원 (최대 10MB)</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">파일 선택</Button>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Summary */}
        <Card className="lg:col-span-6 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">분석 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-400">이번 달 처리량</span>
                <span className="text-lg font-bold text-white">156건</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">94%</p>
                  <p className="text-xs text-neutral-400">분석 정확도</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">2.3초</p>
                  <p className="text-xs text-neutral-400">평균 처리시간</p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-700">
                <p className="text-sm text-neutral-400 mb-2">최근 업로드된 지역</p>
                <div className="flex flex-wrap gap-2">
                  {["강남구", "서초구", "마포구", "용산구", "성동구"].map((area) => (
                    <span key={area} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
