# HealthMate


## 1. 프로젝트 개요
HealthMate는 질병 정보 탐색, 주변 병원·약국 위치 검색, 24시간 AI 건강 상담, 그리고 진료 예약을 단일 플랫폼에서 제공하는 통합 헬스케어 웹 서비스입니다.


## 2. 주요 기능
* 메인 대시보드: Slate/Blue 톤앤매너 디자인 시스템 기반 반응형 통합 UI
* 100대 질병 백과: 주요 질환 원인·증상·예방 가이드 제공 및 실시간 키워드/카테고리 검색
* 위치 기반 병원·약국 탐색: Kakao Maps API 연동 주변 의료 기관 위치 시각화 및 상세 정보 제공
* 24시간 AI 건강 상담 챗봇: OpenAI GPT-4o mini 기반 증상 분석 및 실시간 건강 질의응답
* 진료 예약 및 내역 관리: LocalStorage 및 SQLite DB 연동 진료 예약 신청, 조회 및 취소 관리


## 3. 기술 스택

### Frontend
* Framework / Library: React, React Router
* Styling & UI: Tailwind CSS, Lucide Icons

### Backend & Database
* Framework: FastAPI
* Database: SQLite RDBMS

### External APIs
* AI Engine: GPT-4o mini
* Map Service: Kakao Maps API



## 4. 실행 방법

### (1) Backend 환경 설정 & 실행
1. `backend` 폴더 내 `.env.example` 파일을 복사하여 `.env` 파일을 생성합니다.
2. `.env` 파일 내에 본인의 OpenAI API 키와 Kakao Maps API 키를 입력합니다.

### (2) Backend & Frontend 실행
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload

cd backend
node server.js

cd frontend
npm start