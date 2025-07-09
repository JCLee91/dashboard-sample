"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import TopToolbar from "@/components/dashboard/top-toolbar"
import DashboardPage from "./dashboard/page"
import RentRollPage from "./rent-roll/page"
import SystemsPage from "./systems/page"

export default function PropAnalyzerDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${!sidebarCollapsed ? "md:ml-0" : ""}`}>
        <TopToolbar activeSection={activeSection} />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {activeSection === "dashboard" && <DashboardPage />}
          {activeSection === "rent-roll" && <RentRollPage />}
          {activeSection === "systems" && <SystemsPage />}
        </div>
      </div>
    </div>
  )
}
