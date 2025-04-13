import React from "react";

export const HexagonLetterQIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58044)">
<path d="M13.666 1.42714L20.416 5.40714L20.512 5.47014L20.605 5.54814L20.711 5.62214C21.086 5.90309 21.3952 6.26251 21.617 6.67531C21.8388 7.08811 21.9678 7.54434 21.995 8.01214L22 8.21614V15.5001C22 16.6751 21.357 17.7561 20.377 18.2931L13.573 22.5951C12.593 23.1331 11.407 23.1331 10.373 22.5631L3.678 18.3261C3.171 18.0484 2.74784 17.6396 2.45269 17.1425C2.15753 16.6454 2.0012 16.0783 2 15.5001V8.21514C2 7.10914 2.57 6.08714 3.476 5.51014L10.426 1.41214C11.426 0.860144 12.64 0.860144 13.666 1.42714ZM12 6.99814C11.2044 6.99814 10.4413 7.31421 9.87868 7.87682C9.31607 8.43943 9 9.20249 9 9.99814V13.9981C8.99988 14.4934 9.12237 14.981 9.35654 15.4173C9.5907 15.8537 9.92926 16.2254 10.342 16.4991C10.7547 16.7728 11.2288 16.94 11.7219 16.9859C12.215 17.0318 12.7118 16.955 13.168 16.7621L13.293 16.7051C13.4816 16.8873 13.7342 16.9881 13.9964 16.9858C14.2586 16.9835 14.5094 16.8784 14.6948 16.693C14.8802 16.5076 14.9854 16.2567 14.9877 15.9945C14.99 15.7323 14.8892 15.4797 14.707 15.2911L14.764 15.1661C14.92 14.7965 15.0002 14.3993 15 13.9981V9.99814C15 9.20249 14.6839 8.43943 14.1213 7.87682C13.5587 7.31421 12.7956 6.99814 12 6.99814ZM13 14.0001H12.941C12.6861 14.0142 12.4464 14.1256 12.2713 14.3113C12.0962 14.4971 11.9991 14.7429 12 14.9981C11.7348 14.9981 11.4804 14.8928 11.2929 14.7053C11.1054 14.5177 11 14.2634 11 13.9981V9.99814C11 9.73293 11.1054 9.47857 11.2929 9.29104C11.4804 9.1035 11.7348 8.99814 12 8.99814C12.2652 8.99814 12.5196 9.1035 12.7071 9.29104C12.8946 9.47857 13 9.73293 13 9.99814V14.0001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58044">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
