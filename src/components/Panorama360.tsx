import React, { useRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import "@photo-sphere-viewer/core/index.css";

/**
 * URL ảnh 360 equirectangular mẫu.
 * Muốn dùng ảnh phòng nội thất: tải JPG equirectangular từ Poly Haven
 * (vd. polyhaven.com/a/hotel_room, /a/reading_room) rồi host hoặc đổi src.
 */
const DEFAULT_PANORAMA_URL =
  "https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg";

export interface Panorama360Props {
  /** URL ảnh panorama 360 (equirectangular) */
  src?: string;
  /** ClassName cho container */
  className?: string;
  /** Chiều cao (CSS), ví dụ "100%" hoặc "400px" */
  height?: string | number;
  /** Ẩn navbar (zoom, fullscreen) để giao diện gọn */
  hideNavbar?: boolean;
  /** Cho phép zoom bằng scroll */
  mousewheel?: boolean;
}

export function Panorama360({
  src = DEFAULT_PANORAMA_URL,
  className = "",
  height = "100%",
  hideNavbar = true,
  mousewheel = true,
}: Panorama360Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ height, width: "100%" }}
    >
      <ReactPhotoSphereViewer
        src={src}
        height={height}
        width="100%"
        hideNavbarButton={hideNavbar}
        navbar={hideNavbar ? false : undefined}
        mousewheel={mousewheel}
        mousemove
        loadingTxt="Loading 360°..."
      />
    </div>
  );
}
