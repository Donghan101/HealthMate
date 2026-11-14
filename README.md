# HealthMate
> 통합 헬스케어 웹 플랫폼

HealthMate는 100가지 주요 질환 정보, 위치 기반 약국 및 병원 위치 조회, GPT-4o mini 기반 AI 건강 상담 챗봇, 그리고 예약 관리 기능을 제공하는 통합 헬스케어 웹 애플리케이션입니다.


## 제출 서류 및 영상 링크

* 졸업작품 포스터: [졸업작품_포스터.pdf](./졸업작품_포스터.pdf)
* 프로젝트 결과 보고서: [프로젝트_결과_보고서.pdf](./프로젝트_결과_보고서.pdf)
* 시연 영상 링크: https://youtu.be/VJLzTW_9RYw


## 주요 기능

1. 100가지 주요 질환 백과사전
   - 카테고리별/증상별 주요 질환 검색 및 상세 가이드 제공
   - 질환 기초 데이터베이스 기반 백과사전 서비스

2. 위치 기반 약국 & 병원 검색
   - Kakao Maps API 연동을 통한 사용자 위치 중심의 지도 탐색
   - 주변 병원/약국 검색 및 진료 시간/상세 정보 안내

3. 진료 예약 및 내역 관리
   - SQLite 데이터베이스 기반 사용자별 병원 진료 일정 저장
   - 예약 내역 조회, 수정, 취소 등 체계적인 예약 관리

4. OpenAI GPT-4o mini 기반 AI 건강 상담 챗봇
   - 사용자 증상 입력을 통한 맞춤형 실시간 1:1 건강 상담
   - FastAPI 백엔드 연동을 통한 신속한 대화형 응답 제공


## 기술 스택

### Frontend
- Framework / Library: React.js, HTML5, CSS3, JavaScript
- API: Kakao Maps API

### Backend & Database
- Framework: Python, FastAPI / Uvicorn
- AI Model: OpenAI API (GPT-4o mini)
- Database: SQLite


## 프로젝트 구조

```text
HealthMate/
├── backend/
│   ├── 1.병원정보서비스 2025.3.xlsx    # 전국 병원 정보 공공데이터 원본 (Excel)
│   ├── 2.약국정보서비스 2025.3.xlsx    # 전국 약국 정보 공공데이터 원본 (Excel)
│   ├── app.py                        # FastAPI 백엔드 서버 (질환 및 API 처리)
│   ├── create_db.py                  # 질병 텍스트 데이터를 SQLite DB로 변환하는 스크립트
│   ├── diseases.db                   # 질환 정보 SQLite 데이터베이스
│   ├── excelToHospital.js            # 병원 엑셀 데이터를 JS 데이터로 변환하는 스크립트
│   ├── excelToPharmacy.js            # 약국 엑셀 데이터를 JS 데이터로 변환하는 스크립트
│   ├── server.js                     # Node.js 백엔드 서버 (OpenAI 챗봇 API 연동)
│   ├── .env.example                  # 백엔드 환경변수 설정 예시
│   ├── package.json                  # Node.js 백엔드 의존성 패키지 목록
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html                # 메인 HTML 템플릿 (Kakao Maps SDK 로드)
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatBot.js            # AI 건강 상담 챗봇 컴포넌트
│   │   ├── data/
│   │   │   ├── hospitals.js          # 변환된 병원 위치·상세 데이터
│   │   │   └── pharmacies.js         # 변환된 약국 위치·상세 데이터
│   │   ├── pages/
│   │   │   ├── DiseasePage.js        # 질환 백과사전 검색 및 조회 페이지
│   │   │   ├── DiseasePage.css       # 질환 페이지 스타일시트
│   │   │   ├── Home.js               # 메인 홈 화면 페이지
│   │   │   ├── HospitalDetailPage.js # 병원 상세 정보 및 예약 연결 페이지
│   │   │   ├── HospitalPage.js       # 위치 기반 병원 검색 페이지
│   │   │   ├── LoginPage.js          # 사용자 로그인 페이지
│   │   │   ├── PharmacyPage.js       # 위치 기반 약국 검색 페이지
│   │   │   ├── ReservationCompletePage.js # 진료 예약 완료 확인 페이지
│   │   │   └── ReservationListPage.js     # 진료 예약 내역 조회·관리 페이지
│   │   ├── App.js                    # 전체 페이지 라우팅 및 레이아웃 구성
│   │   ├── App.css                   # 전역 스타일시트
│   │   ├── index.js                  # React 애플리케이션 진입점
│   │   ├── index.css                 # Tailwind CSS 및 기본 스타일 설정
│   │   ├── tailwind.config.js        # Tailwind CSS 설정 파일
│   │   ├── postcss.config.js         # PostCSS 설정 파일
│   │   ├── App.test.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .env.example                  # 프론트엔드 환경변수 설정 예시
│   ├── package.json                  # 프론트엔드 의존성 패키지 목록
│   ├── package-lock.json
│   └── README.md
├── images/
│   ├── AI_챗봇.png                    # AI 챗봇 기능 시연 캡처
│   ├── 병원_위치_조회.png               # 병원 위치 조회 화면 캡처
│   ├── 약국_위치_조회.png               # 약국 위치 조회 화면 캡처
│   ├── 진료_예약.png                   # 진료 예약 화면 캡처
│   ├── 질병_정보.png                   # 질병 정보 조회 화면 캡처
│   └── 홈페이지_화면.png                # 메인 홈페이지 화면 캡처
├── diseases.db                       # 루트 경로 SQLite 데이터베이스 백업
├── 질병 데이터.txt                     # 주요 질환 기초 텍스트 데이터
├── 졸업작품_포스터.pdf                  # 졸업작품 전시회 포스터 (PDF)
├── 프로젝트_결과_보고서.pdf              # 최종 프로젝트 결과보고서 (PDF)
├── package.json                      # 루트 프로젝트 패키지 설정
├── package-lock.json
└── README.md                         # 프로젝트 소개 및 실행 가이드
