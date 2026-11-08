import React, { useEffect, useRef, useState } from "react";
import { hospitals } from "../data/hospitals";

const HospitalPage = () => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const clustererRef = useRef(null);

  const [keyword, setKeyword] = useState("");
  const [visible, setVisible] = useState([]);

  useEffect(() => {

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false&libraries=clusterer`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const map = new window.kakao.maps.Map(
          document.getElementById("map"),
          {
            center: new window.kakao.maps.LatLng(37.3207, 127.1277),
            level: 4,
          }
        );

        mapRef.current = map;

        clustererRef.current = new window.kakao.maps.MarkerClusterer({
          map,
          averageCenter: true,
          minLevel: 8,
        });

        updateVisible();
        window.kakao.maps.event.addListener(map, "idle", updateVisible);
      });
    };

    return () => document.head.removeChild(script);
  }, []);

  const updateVisible = () => {
    if (!mapRef.current) return;

    const bounds = mapRef.current.getBounds();

    const filtered = hospitals.filter(p =>
      bounds.contain(new window.kakao.maps.LatLng(p.lat, p.lng))
    );

    setVisible(filtered);

    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];
    clustererRef.current.clear();

    const markers = filtered.map(p => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(p.lat, p.lng),
      });

      const info = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:13px;">${p.name}</div>`,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        info.open(mapRef.current, marker);
      });

      return marker;
    });

    clustererRef.current.addMarkers(markers);
    markersRef.current = markers;
  };

  const searched = visible.filter(h =>
    h.name.includes(keyword)
  );

  return (
    <div style={{ display: "flex", height: "92.8vh" }}>
      {/* 지도 */}
      <div id="map" style={{ flex: 1 }} />

      {/* 오른쪽 리스트 */}
      <div
        style={{
          width: "340px",
          padding: "12px",
          borderLeft: "1px solid #ddd",
          overflowY: "auto",
        }}
      >
        <input
          placeholder="병원 검색"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          style={{
            width: "95%",
            padding: "8px",
            marginBottom: "10px",
          }}
        />

        {searched.map(p => (
          <div
            key={`${p.lat}-${p.lng}`}
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>{p.name}</strong>

            <div style={{ fontSize: "14px", color: "#555" }}>
              <div>{p.address}</div>
              <div style={{ color: "green" }}>
                {p.phone}
              </div>
            </div>

            {/* 상세보기 */}
            <div
              style={{
                fontSize: "14px",
                color: "#0066cc",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  `/hospital-detail?name=${encodeURIComponent(p.name)}&address=${encodeURIComponent(p.address)}&phone=${encodeURIComponent(p.phone)}`,
                  "_blank"
                )
              }
            >
              예약하기
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalPage;
