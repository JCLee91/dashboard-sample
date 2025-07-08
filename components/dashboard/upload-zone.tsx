"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function UploadZone() {
  return (
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
  )
}
