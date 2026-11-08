import sqlite3

# 1️⃣ DB 연결 (파일이 없으면 생성)
conn = sqlite3.connect("diseases.db")
c = conn.cursor()

# 2️⃣ 테이블 생성
c.execute('''
CREATE TABLE IF NOT EXISTS diseases (
    disease_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
)
''')

# 3️⃣ 질병 데이터 준비 (예시: 100개)
diseases = [
  {"disease_id":1,"name":"감기","description":"바이러스 감염으로 발생하는 흔한 상기도 질환으로 콧물, 기침, 발열 등의 증상이 나타난다."},
  {"disease_id":2,"name":"독감","description":"인플루엔자 바이러스에 의해 발생하는 급성 호흡기 질환으로 고열과 근육통이 동반될 수 있다."},
  {"disease_id":3,"name":"두통","description":"스트레스, 피로, 수면 부족 등 다양한 원인으로 발생하는 통증 증상이다."},
  {"disease_id":4,"name":"편두통","description":"한쪽 머리에 반복적으로 발생하는 두통으로 메스꺼움이나 빛에 대한 민감함이 동반될 수 있다."},
  {"disease_id":5,"name":"복통","description":"소화기 문제나 장 운동 이상 등으로 인해 배 부위에 통증이 발생하는 증상이다."},
  {"disease_id":6,"name":"위염","description":"위 점막에 염증이 생기는 질환으로 속쓰림이나 소화 불량 증상이 나타날 수 있다."},
  {"disease_id":7,"name":"장염","description":"바이러스나 세균 감염으로 장에 염증이 생겨 설사와 복통이 나타나는 질환이다."},
  {"disease_id":8,"name":"고혈압","description":"혈압이 정상 범위보다 지속적으로 높은 상태로 심혈관 질환의 위험 요인이 될 수 있다."},
  {"disease_id":9,"name":"저혈압","description":"혈압이 정상보다 낮아 어지럼증이나 피로감을 느낄 수 있는 상태이다."},
  {"disease_id":10,"name":"당뇨병","description":"혈당 조절에 문제가 생기는 만성 질환으로 꾸준한 관리가 필요한 질환이다."},
  {"disease_id":11,"name":"비염","description":"코 점막에 염증이 생겨 콧물, 재채기, 코막힘 증상이 반복적으로 나타난다."},
  {"disease_id":12,"name":"천식","description":"기도가 좁아지면서 호흡 곤란과 기침이 발생하는 만성 호흡기 질환이다."},
  {"disease_id":13,"name":"피부염","description":"피부에 염증이 생겨 가려움이나 발진이 나타나는 질환이다."},
  {"disease_id":14,"name":"여드름","description":"피지 분비와 모공 막힘으로 인해 얼굴이나 몸에 염증성 병변이 생기는 피부 질환이다."},
  {"disease_id":15,"name":"결막염","description":"눈의 결막에 염증이 생겨 충혈이나 눈곱이 발생하는 질환이다."},
  {"disease_id":16,"name":"중이염","description":"귀 안쪽에 염증이 생겨 귀 통증이나 청력 저하가 나타날 수 있는 질환이다."},
  {"disease_id":17,"name":"요통","description":"허리 부위에 통증이 발생하는 증상으로 자세 문제나 근육 긴장과 관련될 수 있다."},
  {"disease_id":18,"name":"관절염","description":"관절에 염증이 생겨 통증과 움직임 제한이 발생하는 질환이다."},
  {"disease_id":19,"name":"빈혈","description":"혈액 내 산소 운반 능력이 감소하여 피로감이나 어지럼증이 나타날 수 있다."},
  {"disease_id":20,"name":"불면증","description":"잠들기 어렵거나 수면을 유지하기 힘든 상태가 지속되는 수면 장애이다."},
  {"disease_id":21,"name":"신경통","description":"신경 자극이나 손상으로 인해 발생하는 통증 증상이다."},
  {"disease_id":22,"name":"골다공증","description":"뼈의 밀도가 낮아져 쉽게 골절될 수 있는 질환이다."},
  {"disease_id":23,"name":"편도염","description":"편도에 염증이 생겨 목 통증과 발열이 나타날 수 있다."},
  {"disease_id":24,"name":"인후염","description":"목구멍에 염증이 생겨 통증과 삼킴 곤란이 나타날 수 있는 질환이다."},
  {"disease_id":25,"name":"구내염","description":"입 안 점막에 염증이 생겨 통증과 궤양이 나타날 수 있다."},
  {"disease_id":26,"name":"치주염","description":"잇몸 염증으로 출혈이나 잇몸 부종이 나타나는 치과 질환이다."},
  {"disease_id":27,"name":"편평사마귀","description":"바이러스 감염으로 피부에 작은 사마귀가 나타나는 질환이다."},
  {"disease_id":28,"name":"발진","description":"피부에 붉은 반점이나 부종이 나타나는 증상이다."},
  {"disease_id":29,"name":"습진","description":"피부가 가렵고 붉어지며 건조한 상태가 반복되는 만성 질환이다."},
  {"disease_id":30,"name":"무좀","description":"곰팡이 감염으로 발이나 손톱에 염증이 생기는 피부 질환이다."},
  {"disease_id":31,"name":"기관지염","description":"기관지 점막에 염증이 생겨 기침과 가래가 발생하는 질환이다."},
  {"disease_id":32,"name":"폐렴","description":"폐에 염증이 생겨 발열, 기침, 호흡 곤란이 나타나는 질환이다."},
  {"disease_id":33,"name":"기관지천식","description":"기관지가 좁아지면서 반복적으로 호흡곤란과 기침이 발생하는 만성 질환이다."},
  {"disease_id":34,"name":"심근경색","description":"심장 근육에 혈액 공급이 차단되어 흉통과 호흡 곤란이 나타나는 응급 질환이다."},
  {"disease_id":35,"name":"협심증","description":"심장 혈류가 일시적으로 부족하여 가슴 통증이 나타나는 질환이다."},
  {"disease_id":36,"name":"심부전","description":"심장이 충분한 혈액을 펌프하지 못해 피로, 호흡 곤란 등이 나타나는 질환이다."},
  {"disease_id":37,"name":"심장판막질환","description":"심장 판막의 기능 이상으로 혈류에 장애가 생기는 질환이다."},
  {"disease_id":38,"name":"뇌졸중","description":"뇌혈관이 막히거나 터져서 뇌 기능에 문제가 생기는 질환이다."},
  {"disease_id":39,"name":"치매","description":"기억력, 사고력 등 인지 기능이 점진적으로 감소하는 질환이다."},
  {"disease_id":40,"name":"파킨슨병","description":"신경계 질환으로 운동 기능과 근육 조절에 문제가 생기는 질환이다."},
  {"disease_id":41,"name":"간염","description":"간에 염증이 생겨 피로, 황달, 소화 문제 등이 나타나는 질환이다."},
  {"disease_id":42,"name":"간경변","description":"만성 간 질환으로 간 조직이 손상되어 기능이 저하되는 상태이다."},
  {"disease_id":43,"name":"신부전","description":"신장 기능이 저하되어 체내 노폐물이 제거되지 못하는 상태이다."},
  {"disease_id":44,"name":"방광염","description":"방광 점막에 염증이 생겨 배뇨 시 통증과 빈뇨가 나타나는 질환이다."},
  {"disease_id":45,"name":"신우신염","description":"신장과 요관에 세균 감염으로 염증이 생기는 질환이다."},
  {"disease_id":46,"name":"요로결석","description":"신장이나 요로에 돌이 생겨 극심한 통증이 나타날 수 있는 질환이다."},
  {"disease_id":47,"name":"임신성 당뇨","description":"임신 중 혈당 조절이 어려워 발생하는 일시적 당뇨 상태이다."},
  {"disease_id":48,"name":"갑상선기능저하증","description":"갑상선 호르몬 분비가 감소하여 피로, 체중 증가 등의 증상이 나타나는 질환이다."},
  {"disease_id":49,"name":"갑상선기능항진증","description":"갑상선 호르몬 분비가 과다하여 체중 감소, 심계항진 등의 증상이 나타나는 질환이다."},
  {"disease_id":50,"name":"류마티스관절염","description":"자가면역 반응으로 관절에 염증이 생기고 통증과 변형이 나타나는 질환이다."},
  {"disease_id":51,"name":"강직성척추염","description":"척추와 관절에 염증이 생겨 강직과 통증이 나타나는 만성 질환이다."},
  {"disease_id":52,"name":"퇴행성관절염","description":"관절 연골이 닳아 통증과 움직임 제한이 생기는 질환이다."},
  {"disease_id":53,"name":"심방세동","description":"심장의 심방이 불규칙하게 뛰어 혈전 위험이 증가하는 질환이다."},
  {"disease_id":54,"name":"협착성대동맥판막질환","description":"대동맥판막이 좁아져 심장 혈류에 장애가 생기는 질환이다."},
  {"disease_id":55,"name":"만성폐쇄성폐질환(COPD)","description":"폐의 기류 제한으로 호흡 곤란과 기침이 반복적으로 나타나는 만성 질환이다."},
  {"disease_id":56,"name":"결핵","description":"결핵균 감염으로 폐나 다른 장기에 염증과 손상이 나타나는 질환이다."},
  {"disease_id":57,"name":"폐결절","description":"폐에 작은 혹이 생기는 상태로, 악성 가능성을 확인해야 한다."},
  {"disease_id":58,"name":"폐섬유증","description":"폐 조직이 딱딱해지고 호흡 곤란이 나타나는 질환이다."},
  {"disease_id":59,"name":"기관지확장증","description":"기관지가 비정상적으로 확장되어 만성 기침과 가래가 발생하는 질환이다."},
  {"disease_id":60,"name":"식도염","description":"식도 점막에 염증이 생겨 통증과 삼킴 곤란이 나타나는 질환이다."},
  {"disease_id":61,"name":"위궤양","description":"위 점막이 손상되어 통증과 속쓰림이 나타나는 질환이다."},
  {"disease_id":62,"name":"십이지장궤양","description":"십이지장 점막이 손상되어 복통과 소화 불량이 나타나는 질환이다."},
  {"disease_id":63,"name":"담석증","description":"담낭 내 돌이 생겨 통증과 소화 문제를 일으킬 수 있는 질환이다."},
  {"disease_id":64,"name":"간경화","description":"간 조직이 손상되어 기능이 점점 떨어지는 만성 질환이다."},
  {"disease_id":65,"name":"췌장염","description":"췌장에 염증이 생겨 복통, 구토, 소화 불량이 나타나는 질환이다."},
  {"disease_id":66,"name":"신경병증","description":"신경 손상으로 감각 이상, 통증, 저림 등이 나타나는 질환이다."},
  {"disease_id":67,"name":"말초신경병증","description":"손발 말초 신경이 손상되어 감각 이상과 통증이 나타나는 질환이다."},
  {"disease_id":68,"name":"중풍","description":"뇌혈류가 차단되어 신체 일부 마비, 언어 장애 등이 나타나는 질환이다."},
  {"disease_id":69,"name":"편측마비","description":"뇌 손상으로 몸 한쪽이 마비되는 상태이다."},
  {"disease_id":70,"name":"긴장성두통","description":"스트레스와 근육 긴장으로 발생하는 두통이다."},
  {"disease_id":71,"name":"군발두통","description":"심한 통증이 한쪽 눈 주변에서 반복적으로 나타나는 두통이다."},
  {"disease_id":72,"name":"신경성소화불량","description":"스트레스 등으로 소화기 기능에 장애가 생기는 상태이다."},
  {"disease_id":73,"name":"과민성대장증후군(IBS)","description":"복통, 설사, 변비 등이 반복적으로 나타나는 기능성 장 질환이다."},
  {"disease_id":74,"name":"장중첩증","description":"장의 한 부분이 다른 부분 속으로 들어가 통증과 장폐색을 일으키는 질환이다."},
  {"disease_id":75,"name":"치질","description":"항문 부위 혈관이 부풀어 통증과 출혈이 발생하는 질환이다."},
  {"disease_id":76,"name":"치루","description":"항문 주위에 고름 주머니가 생겨 통증과 분비물이 발생하는 질환이다."},
  {"disease_id":77,"name":"갑상선결절","description":"갑상선에 혹이 생기는 상태로 악성 여부 확인이 필요하다."},
  {"disease_id":78,"name":"갑상선암","description":"갑상선 세포가 비정상적으로 증식하는 악성 질환이다."},
  {"disease_id":79,"name":"부갑상선질환","description":"부갑상선 기능 이상으로 칼슘과 인 대사에 문제가 생기는 질환이다."},
  {"disease_id":80,"name":"부신질환","description":"부신 호르몬 이상으로 혈압, 혈당 등 다양한 문제가 나타나는 질환이다."},
  {"disease_id":81,"name":"골절","description":"뼈가 부러지거나 균열이 생기는 상태이다."},
  {"disease_id":82,"name":"염좌","description":"관절을 지지하는 인대가 손상되어 통증과 부종이 나타나는 상태이다."},
  {"disease_id":83,"name":"탈구","description":"관절 뼈가 정상 위치에서 벗어나 통증과 기능 저하가 나타나는 상태이다."},
  {"disease_id":84,"name":"근육염","description":"근육에 염증이 생겨 통증과 운동 제한이 나타나는 질환이다."},
  {"disease_id":85,"name":"근육경련","description":"근육이 갑자기 수축하며 통증이 나타나는 상태이다."},
  {"disease_id":86,"name":"류마티스열","description":"감염 후 면역 반응으로 관절과 심장 등에 염증이 생기는 질환이다."},
  {"disease_id":87,"name":"통풍","description":"요산이 관절에 쌓여 통증과 부종이 나타나는 질환이다."},
  {"disease_id":88,"name":"빈맥","description":"심장 박동이 정상보다 빠르게 뛰는 상태이다."},
  {"disease_id":89,"name":"서맥","description":"심장 박동이 정상보다 느리게 뛰는 상태이다."},
  {"disease_id":90,"name":"부정맥","description":"심장 박동이 불규칙하게 뛰는 상태로 다양한 증상이 나타날 수 있다."},
  {"disease_id":91,"name":"전립선염","description":"전립선에 염증이 생겨 배뇨 시 통증과 빈뇨가 나타나는 질환이다."},
  {"disease_id":92,"name":"전립선비대증","description":"전립선이 커져 배뇨 곤란과 빈뇨가 나타나는 질환이다."},
  {"disease_id":93,"name":"자궁근종","description":"자궁 근육층에 양성 종양이 생기는 상태이다."},
  {"disease_id":94,"name":"자궁내막증","description":"자궁 내막 조직이 자궁 밖에서 증식하여 통증과 불임이 나타나는 질환이다."},
  {"disease_id":95,"name":"난소낭종","description":"난소에 물혹이 생기는 상태로 크기와 위치에 따라 증상이 다르다."},
  {"disease_id":96,"name":"월경불순","description":"생리 주기와 양이 정상 범위에서 벗어나 나타나는 상태이다."},
  {"disease_id":97,"name":"유방섬유선종","description":"유방에 양성 결절이 생기는 상태로 통증이나 덩어리가 느껴질 수 있다."},
  {"disease_id":98,"name":"유방암","description":"유방 세포가 비정상적으로 증식하는 악성 질환이다."},
  {"disease_id":99,"name":"골수염","description":"뼈에 염증이 생겨 통증과 부종이 나타나는 질환이다."},
  {"disease_id":100,"name":"패혈증","description":"감염이 전신으로 퍼져 장기 기능에 심각한 문제가 나타나는 생명을 위협하는 상태이다."}
]

# 4️⃣ 데이터 삽입
for idx, d in enumerate(diseases, start=1):
    c.execute("INSERT INTO diseases (disease_id, name, description) VALUES (?, ?, ?)",
              (idx, d["name"], d["description"]))

# 5️⃣ 커밋 & 종료
conn.commit()
conn.close()

print("diseases.db 생성 완료! 질병 100개 삽입됨.")
