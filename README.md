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


## 구현 결과

### 홈페이지 화면
<img src="./images/홈페이지_화면.png" width="600" alt="홈페이지 화면">

### 질병 정보
<img src="./images/질병_정보.png" width="400" alt="질병 정보">

### 약국 위치 조회
<img src="./images/약국_위치_조회.png" width="700" alt="약국 위치 조회">

### 병원 위치 조회
<img src="./images/병원_위치_조회.png" width="700" alt="병원 위치 조회">

### 진료 예약
<img src="./images/진료_예약.png" width="300" alt="진료 예약">

### AI 챗봇
<img src="./images/AI_챗봇.png" width="400" alt="AI 챗봇">
