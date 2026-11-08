# HealthMate
> 통합 헬스케어 웹 플랫폼

HealthMate는 100가지 주요 질환 정보, 위치 기반 약국 및 병원 위치 조회, GPT-4o mini 기반 AI 건강 상담 챗봇, 그리고 예약 관리 기능을 제공하는 통합 헬스케어 웹 애플리케이션입니다.


## 제출 서류 및 문서

* 졸업작품 포스터: [졸업작품_포스터.pdf](./졸업작품_포스터.pdf)
* 프로젝트 결과 보고서: [프로젝트_결과_보고서.pdf](./프로젝트_결과_보고서.pdf)
* 시연 영상 링크: https://youtu.be/VJLzTW_9RYw


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
├── backend/                      # FastAPI 백엔드 서버 및 API 통신
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/                     # React 프론트엔드 웹 애플리케이션
│   ├── src/
│   ├── package.json
│   └── .env.example
├── HealthMate_Poster.pdf          # 90x140 cm 발표 포스터 PDF
├── HealthMate_최종보고서.pdf        # 졸업작품 최종 결과 보고서 PDF
├── 질병 데이터.txt                 # 100가지 질환 데이터베이스 기초 문서
├── .gitignore                    # Git 추적 제외 설정 파일
└── README.md                     # 프로젝트 안내 및 사용 설명서
