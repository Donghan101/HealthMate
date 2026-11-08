import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, Building2, User, Phone, Calendar, Clock, Home, ListOrdered } from "lucide-react";

const ReservationCompletePage = () => {
  const query = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();

  const hospital = query.get("hospital") || "병원 정보 없음";
  const patient = query.get("patient") || "이름 정보 없음";
  const phone = query.get("phone") || "연락처 정보 없음";
  const date = query.get("date") || "날짜 정보 없음";
  const time = query.get("time") || "시간 정보 없음";

  return (
    <div className="min-h-[calc(99vh-4rem)] bg-slate-50 text-slate-800 font-sans py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 text-center">

        {/* 1. 상단 성공 아이콘 & 타이틀 */}
        <div className="space-y-3">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              진료 예약이 완료되었습니다!
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              신청하신 예약 정보가 정상적으로 등록되었습니다.
            </p>
          </div>
        </div>

        {/* 2. 예약 내역 상세 카드 */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-slate-900 font-bold text-sm">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span className="truncate">{hospital}</span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>예약자</span>
              </span>
              <span className="font-semibold text-slate-800">{patient}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>연락처</span>
              </span>
              <span className="font-semibold text-slate-800">{phone}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>예약 날짜</span>
              </span>
              <span className="font-semibold text-slate-800">{date}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>예약 시간</span>
              </span>
              <span className="font-semibold text-slate-800">{time}</span>
            </div>
          </div>
        </div>

        {/* 3. 하단 액션 버튼 그룹 */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => navigate("/")}
            className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>홈으로 이동</span>
          </button>

          <button
            onClick={() => navigate("/reservation")}
            className="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ListOrdered className="w-4 h-4" />
            <span>예약 내역 확인</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReservationCompletePage;
