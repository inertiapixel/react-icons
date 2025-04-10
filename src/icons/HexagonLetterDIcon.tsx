import React from "react";

export const HexagonLetterDIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58083)">
<path d="M13.666 1.42714L20.416 5.40714L20.512 5.47014L20.605 5.54814L20.711 5.62214C21.086 5.90309 21.3952 6.26251 21.617 6.67531C21.8388 7.08811 21.9678 7.54434 21.995 8.01214L22 8.21614V15.5001C22 16.6751 21.357 17.7561 20.377 18.2931L13.573 22.5951C12.593 23.1331 11.407 23.1331 10.373 22.5631L3.678 18.3261C3.171 18.0484 2.74784 17.6396 2.45269 17.1425C2.15753 16.6454 2.0012 16.0783 2 15.5001V8.21514C2 7.10914 2.57 6.08714 3.476 5.51014L10.426 1.41214C11.426 0.860144 12.64 0.860144 13.666 1.42714ZM12 6.99814H10C9.73478 6.99814 9.48043 7.1035 9.29289 7.29104C9.10536 7.47857 9 7.73293 9 7.99814V15.9981C9 16.2634 9.10536 16.5177 9.29289 16.7053C9.48043 16.8928 9.73478 16.9981 10 16.9981H12C12.7956 16.9981 13.5587 16.6821 14.1213 16.1195C14.6839 15.5569 15 14.7938 15 13.9981V9.99814C15 9.20249 14.6839 8.43943 14.1213 7.87682C13.5587 7.31421 12.7956 6.99814 12 6.99814ZM12 8.99814C12.2652 8.99814 12.5196 9.1035 12.7071 9.29104C12.8946 9.47857 13 9.73293 13 9.99814V13.9981C13 14.2634 12.8946 14.5177 12.7071 14.7053C12.5196 14.8928 12.2652 14.9981 12 14.9981H11V8.99814H12Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58083">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
