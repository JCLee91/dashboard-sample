"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, TrendingUp, Building, Users, Calendar, Download, Eye } from "lucide-react"

export default function DashboardPage() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    console.log("업로드된 파일:", files)
    // 파일 처리 로직 추가
  }

  const recentAnalyses = [
    {
      id: "DOC-001",
      fileName: "강남구_오피스텔_임대차계약서.pdf",
      uploadDate: "2025-01-08",
      status: "완료",
      rentRoll: "생성됨",
    },
    {
      id: "DOC-002",
      fileName: "서초구_상가_임대차계약서.pdf",
      uploadDate: "2025-01-07",
      status: "분석중",
      rentRoll: "대기중",
    },
    {
      id: "DOC-003",
      fileName: "마포구_오피스_임대차계약서.pdf",
      uploadDate: "2025-01-06",
      status: "완료",
      rentRoll: "생성됨",
    },
  ]

  const quickStats = [
    {
      title: "이번 달 분석",
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "text-white",
    },
    {
      title: "생성된 렌트롤",
      value: "89",
      change: "+8%",
      icon: Building,
      color: "text-green-500",
    },
    {
      title: "활성 사용자",
      value: "1,247",
      change: "+23%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "평균 처리시간",
      value: "2.3초",
      change: "-15%",
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wider">메인 대시보드</h1>
          <p className="text-sm text-neutral-400">임대차계약서 분석 및 렌트롤 생성 현황</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Upload className="w-4 h-4 mr-2" />
            파일 업로드
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Download className="w-4 h-4 mr-2" />
            보고서 다운로드
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-neutral-900 border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-green-500">{stat.change}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* File Upload Area */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-white">임대차계약서 업로드</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-orange-500 bg-orange-500/10" : "border-neutral-600 hover:border-neutral-500"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">파일을 여기에 드래그하거나 클릭하여 업로드</h3>
            <p className="text-sm text-neutral-400 mb-4">PDF 파일만 지원됩니다. 최대 10MB까지 업로드 가능합니다.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">파일 선택</Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Analyses and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Analyses */}
        <Card className="lg:col-span-2 bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">최근 분석 결과</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div
                  key={analysis.id}
                  className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-neutral-400" />
                    <div>
                      <h4 className="text-sm font-medium text-white">{analysis.fileName}</h4>
                      <p className="text-xs text-neutral-400">
                        {analysis.id} • {analysis.uploadDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        analysis.status === "완료"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-orange-500/20 text-orange-500"
                      }
                    >
                      {analysis.status}
                    </Badge>
                    <Badge
                      className={
                        analysis.rentRoll === "생성됨"
                          ? "bg-blue-500/20 text-blue-500"
                          : "bg-neutral-500/20 text-neutral-300"
                      }
                    >
                      {analysis.rentRoll}
                    </Badge>
                    <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-orange-500">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">빠른 작업</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start">
              <FileText className="w-4 h-4 mr-2" />새 렌트롤 생성
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <Building className="w-4 h-4 mr-2" />
              부동산 포트폴리오
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              계약 만료 알림
            </Button>
            <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              수익성 분석
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Processing Status */}
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-white">처리 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98.7%</div>
              <div className="text-sm text-neutral-400">분석 정확도</div>
              <div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "98.7%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2.3초</div>
              <div className="text-sm text-neutral-400">평균 처리시간</div>
              <div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.2%</div>
              <div className="text-sm text-neutral-400">시스템 가동률</div>
              <div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "99.2%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
