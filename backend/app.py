from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # React에서 호출 가능하게

def safe_float(value):
    """숫자로 변환할 수 없는 값은 0.0으로 처리"""
    try:
        return float(value)
    except (ValueError, TypeError):
        return 0.0

@app.route("/api/hospitals", methods=["GET"])
def get_hospitals():
    # 엑셀 파일 읽기
    df = pd.read_excel("1.병원정보서비스 2025.3.xlsx")

    # 필요한 컬럼만 선택하고 좌표 안전하게 변환
    hospitals = []
    for _, row in df.iterrows():
        hospitals.append({
            "name": row.get("요양기관명", ""),
            "address": row.get("주소", ""),
            "x": safe_float(row.get("좌표(X)", 0)),
            "y": safe_float(row.get("좌표(Y)", 0))
        })

    return jsonify(hospitals)

if __name__ == "__main__":
    # 서버 실행
    app.run(port=5000, debug=True)
