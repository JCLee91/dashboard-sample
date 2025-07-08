"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalysisSummary() {
  const recentAreas = ["강남구", "서초구", "마포구", "용산구", "성동구"]

  return (
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
              {recentAreas.map((area) => (
                <span key={area} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
