"use client"
import StatsCards from "@/components/dashboard/stats-cards"
import QuickActions from "@/components/dashboard/quick-actions"
import RecentAnalysis from "@/components/dashboard/recent-analysis"
import UploadZone from "@/components/dashboard/upload-zone"
import AnalysisSummary from "@/components/dashboard/analysis-summary"

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

      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <QuickActions />
        <RecentAnalysis recentAnalyses={recentAnalyses} />
        <UploadZone />
        <AnalysisSummary />
      </div>
    </div>
  )
}
