import React from "react";

export const HexagonLetterNIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58053)">
<path d="M13.666 1.42714L20.416 5.40714L20.512 5.47014L20.605 5.54814L20.711 5.62214C21.086 5.90309 21.3952 6.26251 21.617 6.67531C21.8388 7.08811 21.9678 7.54434 21.995 8.01214L22 8.21614V15.5001C22 16.6751 21.357 17.7561 20.377 18.2931L13.573 22.5951C12.593 23.1331 11.407 23.1331 10.373 22.5631L3.678 18.3261C3.171 18.0484 2.74784 17.6396 2.45269 17.1425C2.15753 16.6454 2.0012 16.0783 2 15.5001V8.21514C2 7.10914 2.57 6.08714 3.476 5.51014L10.426 1.41214C11.426 0.860144 12.64 0.860144 13.666 1.42714ZM10.894 7.55114C10.423 6.60714 9 6.94314 9 7.99814V15.9981C9 16.2634 9.10536 16.5177 9.29289 16.7053C9.48043 16.8928 9.73478 16.9981 10 16.9981L10.117 16.9911C10.3603 16.9625 10.5845 16.8456 10.7473 16.6625C10.91 16.4795 11 16.2431 11 15.9981V12.2341L13.106 16.4451C13.577 17.3891 15 17.0531 15 15.9981V7.99814C15 7.73293 14.8946 7.47857 14.7071 7.29104C14.5196 7.1035 14.2652 6.99814 14 6.99814L13.883 7.00514C13.6397 7.0338 13.4155 7.15074 13.2527 7.33377C13.09 7.51681 13 7.75321 13 7.99814V11.7621L10.894 7.55114Z" />
</g>
<defs>
<clipPath id="clip0_802_58053">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
