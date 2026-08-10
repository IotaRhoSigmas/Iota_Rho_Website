import { ImageResponse } from "next/og";

export const alt = "Phi Beta Sigma Iota Rho Chapter at UCF";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#020617",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            borderRadius: 999,
            filter: "blur(130px)",
            height: 380,
            left: -100,
            opacity: 0.32,
            position: "absolute",
            top: -120,
            width: 380,
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "70px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: 24,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            University of Central Florida
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: -3,
              marginTop: 30,
            }}
          >
            Phi Beta Sigma
          </div>
          <div style={{ fontSize: 44, fontWeight: 300, marginTop: 14 }}>
            Iota Rho Chapter
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.68)",
              fontSize: 22,
              letterSpacing: 5,
              marginTop: 42,
              paddingTop: 28,
              textTransform: "uppercase",
            }}
          >
            Brotherhood • Scholarship • Service
          </div>
        </div>
      </div>
    ),
    size,
  );
}
