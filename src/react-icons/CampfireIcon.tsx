import React from "react";

export const CampfireIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58668)">
<path d="M19.7588 16.0295C20.0061 15.9681 20.2675 16.0034 20.4896 16.1282C20.7117 16.253 20.8778 16.4578 20.954 16.701C21.0302 16.9441 21.0107 17.2071 20.8995 17.4363C20.7884 17.6656 20.5939 17.8437 20.3558 17.9345L20.2448 17.9695L4.24482 21.9695C3.99756 22.0308 3.73619 21.9955 3.51407 21.8707C3.29196 21.7459 3.12586 21.5411 3.04967 21.298C2.97348 21.0548 2.99296 20.7918 3.10412 20.5626C3.21528 20.3333 3.40975 20.1552 3.64782 20.0645L3.75882 20.0295L19.7588 16.0295Z" />
<path d="M3.02997 16.7572C3.08946 16.5195 3.23413 16.312 3.43653 16.1739C3.63893 16.0358 3.88498 15.9769 4.12797 16.0082L4.24297 16.0302L20.243 20.0302C20.4905 20.0921 20.705 20.2461 20.8426 20.4609C20.9802 20.6758 21.0305 20.935 20.9832 21.1857C20.936 21.4364 20.7947 21.6595 20.5883 21.8095C20.3819 21.9594 20.126 22.0248 19.873 21.9922L19.757 21.9702L3.75697 17.9702C3.49972 17.9058 3.2786 17.7418 3.14226 17.5143C3.00592 17.2868 2.96553 17.0145 3.02997 16.7572Z" />
<path d="M13.553 2.10547C9.379 4.19147 7 7.46347 7 10.9995C7 12.3255 7.52678 13.5973 8.46447 14.535C9.40215 15.4727 10.6739 15.9995 12 15.9995C13.3261 15.9995 14.5979 15.4727 15.5355 14.535C16.4732 13.5973 17 12.3255 17 10.9995C17 9.95247 16.812 9.19147 16.394 8.29447L16.225 7.94947L15.895 7.30247C15.274 6.06247 15 4.96447 15 2.99947C14.9999 2.82908 14.9563 2.66153 14.8733 2.51274C14.7902 2.36394 14.6706 2.23883 14.5256 2.14927C14.3806 2.05971 14.2152 2.00868 14.045 2.00101C13.8748 1.99335 13.7054 2.0293 13.553 2.10547Z" />
</g>
<defs>
<clipPath id="clip0_802_58668">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
