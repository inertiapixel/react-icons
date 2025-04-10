import React from "react";

export const RadarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57601)">
<path d="M12.0003 9.99818C12.3338 9.9981 12.662 10.0814 12.9551 10.2405C13.2481 10.3996 13.4968 10.6295 13.6783 10.9092L13.7313 10.9982H21.0003L21.1173 11.0052C21.3606 11.0338 21.5849 11.1508 21.7476 11.3338C21.9104 11.5168 22.0003 11.7532 22.0003 11.9982C22.0003 17.5212 17.5233 21.9982 12.0003 21.9982C11.7351 21.9982 11.4808 21.8928 11.2932 21.7053C11.1057 21.5177 11.0003 21.2634 11.0003 20.9982V13.7292L10.9113 13.6762C10.6527 13.5084 10.4363 13.2831 10.2792 13.0178C10.122 12.7526 10.0283 12.4546 10.0053 12.1472L10.0003 11.9982C10.0003 11.4677 10.2111 10.959 10.5861 10.584C10.9612 10.2089 11.4699 9.99818 12.0003 9.99818ZM21.4283 8.66418C21.507 8.9115 21.4864 9.17971 21.3709 9.41213C21.2555 9.64456 21.0542 9.82298 20.8095 9.90971C20.5649 9.99644 20.2962 9.98468 20.0601 9.87691C19.824 9.76914 19.6391 9.5738 19.5443 9.33218C19.0925 8.05906 18.3256 6.92111 17.3151 6.02443C16.3047 5.12776 15.0836 4.50157 13.7658 4.20426C12.448 3.90694 11.0764 3.94819 9.77879 4.32415C8.48122 4.70011 7.3 5.39853 6.34526 6.3543C5.39052 7.31007 4.69336 8.49205 4.3188 9.79002C3.94424 11.088 3.90447 12.4597 4.20321 13.7772C4.50194 15.0946 5.12944 16.315 6.0272 17.3245C6.92497 18.334 8.06374 19.0997 9.33735 19.5502C9.46118 19.5939 9.5752 19.6616 9.67287 19.7494C9.77055 19.8372 9.84997 19.9434 9.90662 20.0618C9.96326 20.1803 9.99601 20.3088 10.003 20.44C10.01 20.5711 9.99108 20.7023 9.94735 20.8262C9.90362 20.95 9.83592 21.064 9.74813 21.1617C9.66034 21.2594 9.55417 21.3388 9.43568 21.3954C9.3172 21.4521 9.18871 21.4848 9.05757 21.4918C8.92642 21.4988 8.79518 21.4799 8.67135 21.4362C7.07906 20.8734 5.65525 19.9165 4.53271 18.6547C3.41017 17.393 2.62546 15.8675 2.25178 14.2205C1.87809 12.5735 1.92761 10.8588 2.3957 9.23611C2.86379 7.61346 3.73521 6.13578 4.92869 4.9409C6.12216 3.74602 7.59881 2.87287 9.22092 2.40287C10.843 1.93287 12.5577 1.88134 14.2051 2.25309C15.8525 2.62484 17.379 3.40775 18.642 4.52881C19.9051 5.64987 20.8637 7.07256 21.4283 8.66418ZM16.8003 8.39818C16.9595 8.61035 17.0278 8.87705 16.9903 9.1396C16.9528 9.40215 16.8125 9.63905 16.6003 9.79818C16.3882 9.95731 16.1215 10.0256 15.8589 9.98813C15.5964 9.95062 15.3595 9.81035 15.2003 9.59818C14.8565 9.13971 14.4181 8.76048 13.915 8.48616C13.4118 8.21185 12.8556 8.04887 12.2839 8.00824C11.7123 7.96761 11.1386 8.0503 10.6016 8.25069C10.0647 8.45109 9.57716 8.76451 9.17192 9.16975C8.76669 9.57498 8.45326 10.0626 8.25286 10.5995C8.05247 11.1364 7.96979 11.7101 8.01041 12.2817C8.05104 12.8534 8.21402 13.4096 8.48834 13.9128C8.76265 14.416 9.14188 14.8543 9.60035 15.1982C9.81252 15.3573 9.95279 15.5942 9.9903 15.8568C10.0278 16.1193 9.95948 16.386 9.80035 16.5982C9.64122 16.8104 9.40432 16.9506 9.14177 16.9881C8.87922 17.0256 8.61252 16.9573 8.40035 16.7982C7.71264 16.2824 7.1438 15.6249 6.73233 14.8701C6.32086 14.1153 6.07638 13.281 6.01544 12.4235C5.9545 11.566 6.07853 10.7055 6.37912 9.90012C6.67972 9.09476 7.14986 8.36339 7.75771 7.75554C8.36556 7.14768 9.09693 6.67754 9.90229 6.37695C10.7077 6.07636 11.5682 5.95233 12.4257 6.01327C13.2832 6.07421 14.1175 6.31869 14.8723 6.73016C15.627 7.14162 16.2846 7.71047 16.8003 8.39818Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57601">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
