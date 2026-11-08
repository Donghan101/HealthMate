import React, { useState, useEffect } from 'react';
import { Search, Activity } from 'lucide-react';

function DiseasePage() {
  const [diseases, setDiseases] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // 백엔드 API 데이터 호출
    fetch('http://127.0.0.1:8000/diseases')
      .then((res) => res.json())
      .then((data) => {
        setDiseases(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // 검색어 필터링
  const filteredDiseases = diseases.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 text-slate-800 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. 상단 타이틀 */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            100대 질병 백과
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            궁금한 질병명이나 증상을 검색하고 상세 정보를 확인하세요.
          </p>
        </div>

        {/* 2. 검색창 */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="질병명을 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:text-slate-400 transition-all"
          />
        </div>

        {/* 3. 질병 카드 리스트 */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map((disease) => (
              <div
                key={disease.disease_id}
                className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {disease.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {disease.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            /* 검색 결과가 없을 때의 UI */
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Activity className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-medium">검색 결과가 없습니다.</p>
              <p className="text-slate-400 text-xs mt-1">다른 검색어로 다시 시도해 보세요.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default DiseasePage;
