import React from "react";

export const SquareRoundedLetterXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57230)">
<path d="M11.676 2.001L12 2C19.752 2 22 4.248 22 12L21.995 12.642C21.869 19.877 19.534 22 12 22L11.358 21.995C4.228 21.87 2.063 19.6 2 12.325V12C2 4.357 4.185 2.064 11.676 2.001ZM14.447 7.106C14.2099 6.98758 13.9354 6.96814 13.684 7.05196C13.4325 7.13577 13.2246 7.31599 13.106 7.553L12 9.763L10.894 7.553C10.7846 7.33378 10.5984 7.16237 10.371 7.0713C10.1435 6.98024 9.89049 6.97586 9.66 7.059L9.553 7.106C9.31599 7.22465 9.13577 7.43254 9.05196 7.68399C8.96814 7.93544 8.98758 8.20987 9.106 8.447L10.88 12L9.105 15.553C8.99544 15.772 8.97005 16.0236 9.03364 16.2601C9.09723 16.4966 9.24538 16.7015 9.45 16.836L9.552 16.894C9.78913 17.0124 10.0636 17.0319 10.315 16.948C10.5665 16.8642 10.7744 16.684 10.893 16.447L12 14.236L13.106 16.447C13.2154 16.6662 13.4016 16.8376 13.629 16.9287C13.8565 17.0198 14.1095 17.0241 14.34 16.941L14.447 16.894C14.684 16.7754 14.8642 16.5675 14.948 16.316C15.0319 16.0646 15.0124 15.7901 14.894 15.553L13.118 12L14.894 8.447C15.0036 8.228 15.0289 7.9764 14.9654 7.73993C14.9018 7.50345 14.7536 7.29852 14.549 7.164L14.447 7.106Z" />
</g>
<defs>
<clipPath id="clip0_802_57230">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
