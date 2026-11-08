import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { HeartPulse, Sparkles } from "lucide-react";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DiseasePage from "./pages/DiseasePage";
import HospitalPage from "./pages/HospitalPage";
import HospitalDetailPage from "./pages/HospitalDetailPage";
import PharmacyPage from "./pages/PharmacyPage";
import ReservationCompletePage from "./pages/ReservationCompletePage";
import ReservationListPage from "./pages/ReservationListPage";

import ChatBot from "./components/ChatBot";

// 상단 네비게이션 바 컴포넌트
function NavigationBar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="flex items-center space-x-2 text-decoration-none">
          <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md shadow-blue-500/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl text-slate-900 tracking-tight">HealthMate</span>
        </Link>

        {/* 중앙 카테고리 메뉴 */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <Link to="/diseases" className="hover:text-blue-600 transition-colors text-decoration-none text-slate-600">질병 백과</Link>
          <Link to="/pharmacies" className="hover:text-blue-600 transition-colors text-decoration-none text-slate-600">약국 찾기</Link>
          <Link to="/hospitals" className="hover:text-blue-600 transition-colors text-decoration-none text-slate-600">병원 찾기</Link>
          <Link to="/reservation" className="hover:text-blue-600 transition-colors text-decoration-none text-slate-600">예약 내역</Link>
        </nav>

        {/* 우측 버튼 (AI 상담 및 로그인) */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/chatbot')}
            className="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3.5 py-2 rounded-xl font-medium text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI 건강 상담</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      {/* 모든 페이지 상단에 공통 네비게이션 바 표시 */}
      <NavigationBar />

      {/* 페이지 라우터 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/diseases" element={<DiseasePage />} />
        <Route path="/hospitals" element={<HospitalPage />} />
        <Route path="/hospital-detail" element={<HospitalDetailPage />} />
        <Route path="/pharmacies" element={<PharmacyPage />} />
        <Route path="/reservation-complete" element={<ReservationCompletePage />} />
        <Route path="/reservation" element={<ReservationListPage />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
