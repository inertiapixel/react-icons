import React from "react";

export const HexagonMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58014)">
<path d="M13.666 1.42714L20.416 5.40714L20.512 5.47014L20.605 5.54814L20.711 5.62214C21.086 5.90309 21.3952 6.26251 21.617 6.67531C21.8388 7.08811 21.9678 7.54434 21.995 8.01214L22 8.21614V15.5001C22 16.6751 21.357 17.7561 20.377 18.2931L13.573 22.5951C12.593 23.1331 11.407 23.1331 10.373 22.5631L3.678 18.3261C3.171 18.0484 2.74784 17.6396 2.45269 17.1425C2.15753 16.6454 2.0012 16.0783 2 15.5001V8.21514C2 7.10914 2.57 6.08714 3.476 5.51014L10.426 1.41214C11.426 0.860144 12.64 0.860144 13.666 1.42714ZM15 10.9981H9C8.73478 10.9981 8.48043 11.1035 8.29289 11.291C8.10536 11.4786 8 11.7329 8 11.9981C8 12.2634 8.10536 12.5177 8.29289 12.7053C8.48043 12.8928 8.73478 12.9981 9 12.9981H15C15.2652 12.9981 15.5196 12.8928 15.7071 12.7053C15.8946 12.5177 16 12.2634 16 11.9981C16 11.7329 15.8946 11.4786 15.7071 11.291C15.5196 11.1035 15.2652 10.9981 15 10.9981Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58014">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
