import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Building2, MapPin, Phone, Calendar, Clock, User, FileText, CheckCircle } from "lucide-react";

const HospitalDetailPage = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);

  const name = query.get("name") || "병원 이름 미지정";
  const address = query.get("address") || "주소 정보가 없습니다.";
  const phone = query.get("phone") || "연락처 정보가 없습니다.";

  const [form, setForm] = useState({
    patientName: "",
    patientPhone: "",
    date: "",
    time: "",
    memo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      hospital: name,
      patient: form.patientName,
      phone: form.patientPhone,
      date: form.date,
      time: form.time,
      memo: form.memo,
      createdAt: new Date().toISOString(),
    };

    const prev = JSON.parse(localStorage.getItem("reservations")) || [];
    localStorage.setItem("reservations", JSON.stringify([...prev, newReservation]));

    navigate(
      `/reservation-complete?hospital=${encodeURIComponent(name)}&patient=${encodeURIComponent(form.patientName)}&phone=${encodeURIComponent(form.patientPhone)}&date=${form.date}&time=${form.time}`
    );
  };

  return (
    <div className="min-h-[calc(99vh-4rem)] bg-slate-50 text-slate-800 font-sans py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-xl w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        
        {/* 1. 병원 기본 정보 카드 헤더 */}
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              {name}
            </h1>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-1">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{phone}</span>
            </p>
          </div>
        </div>

        {/* 2. 예약 폼 영역 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-bold text-base">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>진료 예약</span>
          </div>

          {/* 환자 이름 */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>이름</span>
            </label>
            <input
              type="text"
              name="patientName"
              placeholder="예약자 성함을 입력하세요"
              value={form.patientName}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>연락처</span>
            </label>
            <input
              type="tel"
              name="patientPhone"
              placeholder="010-0000-0000"
              value={form.patientPhone}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>

          {/* 날짜 및 시간 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>예약 날짜</span>
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>예약 시간</span>
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* 요청 사항 */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>증상 및 요청사항 (선택)</span>
            </label>
            <textarea
              name="memo"
              placeholder="특이 증상이나 전달할 요청사항을 적어주세요."
              value={form.memo}
              onChange={handleChange}
              rows={3}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>예약하기</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default HospitalDetailPage;
