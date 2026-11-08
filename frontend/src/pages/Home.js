import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock, 
  Bot, 
  Search, 
  ChevronRight,
  Sparkles,
  Building2,
  Pill
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(99vh-4rem)] bg-slate-50 text-slate-800 font-sans">

      {/* 1. Hero Section */}
      <section className="pt-10 pb-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* 헤드라인 */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            우리 학교 근처 의료 서비스, <span className="text-blue-600">HealthMate</span>
          </h1>
          
          {/* 부제목 한 줄 요약 */}
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            질병 검색부터 주변 병원·약국 탐색, 실시간 예약 및 AI 상담까지 한곳에서 이용하세요.
          </p>

        </div>
      </section>

      {/* 2. 핵심 기능 4대 카드 */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Feature 1: 질병 백과 */}
            <div 
              onClick={() => navigate('/diseases')}
              className="group p-6 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100대 질병 백과</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                다양한 질병의 명칭과 증상을 검색하고 상세 정보를 확인할 수 있습니다.
              </p>
              <span className="text-xs font-bold text-blue-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>질병 백과 이동</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            {/* Feature 2: 약국 지도 */}
            <div 
              onClick={() => navigate('/pharmacies')}
              className="group p-6 rounded-2xl bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">근처 약국 찾기</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                우리 학교 기준으로 가까운 약국의 위치 지도와 상세 리스트를 제공합니다.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>약국 찾기 이동</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            {/* Feature 3: 병원 예약 */}
            <div 
              onClick={() => navigate('/hospitals')}
              className="group p-6 rounded-2xl bg-white hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">병원 찾기 & 예약</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                주변 병원 목록을 조회하고 원하는 진료 시간을 선택하여 예약 신청합니다.
              </p>
              <span className="text-xs font-bold text-indigo-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>병원 예약 이동</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            {/* Feature 4: 예약 내역 관리 */}
            <div 
              onClick={() => navigate('/reservation')}
              className="group p-6 rounded-2xl bg-white hover:bg-purple-50/50 border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">예약 내역 관리</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                병원 예약 내역을 실시간으로 확인하고 필요 시 간편하게 취소합니다.
              </p>
              <span className="text-xs font-bold text-purple-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>내역 관리 이동</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AI Chatbot Banner Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>AI 스마트 어시스턴트</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                어디가 아픈지 확실하지 않으신가요?<br />AI 챗봇에게 물어보세요!
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                증상 검색부터 근처 병원 안내까지,<br />
                HealthMate AI가 24시간 언제든 친절하게 상담해 드립니다.
              </p>
            </div>

            <button 
              onClick={() => navigate('/chatbot')}
              className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105 whitespace-nowrap flex items-center space-x-2"
            >
              <Bot className="w-5 h-5 text-blue-600" />
              <span>AI 챗봇 상담 시작하기</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}