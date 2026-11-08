import React, { useEffect, useState } from "react";
import { Clock, Calendar, Building2, User, Phone, Trash2, CheckCircle2 } from "lucide-react";

const ReservationHistoryPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(saved);
  }, []);

  const cancelReservation = (index) => {
    if (window.confirm("이 예약을 취소하시겠습니까?")) {
      const updated = reservations.filter((_, i) => i !== index);
      setReservations(updated);
      localStorage.setItem("reservations", JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-[calc(99vh-4rem)] bg-slate-50 text-slate-800 font-sans py-8 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full space-y-8 flex-1 flex flex-col">

        {/* 예약 내역 영역 */}
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">
          {reservations.length === 0 ? (

            <div className="text-center py-12 px-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 my-auto w-full">
              <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-800">예약 내역이 없습니다</h2>
            </div>
          ) : (
            <div className="space-y-4 my-auto w-full">
              {reservations.map((r, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 relative overflow-hidden space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-medium block">예약 병원</span>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                          {r.hospital || "병원 이름 미기재"}
                        </h2>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-600 font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>예약 완료</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Calendar className="w-4 h-4 text-purple-500 shrink-0" />
                      <span className="text-slate-400 text-xs shrink-0">날짜:</span>
                      <span className="font-semibold text-slate-800">{r.date}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                      <span className="text-slate-400 text-xs shrink-0">시간:</span>
                      <span className="font-semibold text-slate-800">{r.time}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <User className="w-4 h-4 text-purple-500 shrink-0" />
                      <span className="text-slate-400 text-xs shrink-0">예약자:</span>
                      <span className="font-semibold text-slate-800">{r.patient}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Phone className="w-4 h-4 text-purple-500 shrink-0" />
                      <span className="text-slate-400 text-xs shrink-0">연락처:</span>
                      <span className="font-semibold text-slate-800">{r.phone}</span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-slate-100">
                    <button
                      onClick={() => cancelReservation(index)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>예약 취소하기</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ReservationHistoryPage;
