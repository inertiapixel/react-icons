import React from "react";

export const SquareLetterQIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57395)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10V14C8.99988 14.4952 9.12237 14.9828 9.35654 15.4192C9.5907 15.8556 9.92926 16.2272 10.342 16.5009C10.7547 16.7746 11.2288 16.9419 11.7219 16.9878C12.215 17.0337 12.7118 16.9568 13.168 16.764L13.293 16.707C13.4816 16.8892 13.7342 16.99 13.9964 16.9877C14.2586 16.9854 14.5094 16.8802 14.6948 16.6948C14.8802 16.5094 14.9854 16.2586 14.9877 15.9964C14.99 15.7342 14.8892 15.4816 14.707 15.293L14.764 15.168C14.92 14.7984 15.0002 14.4012 15 14V10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7ZM13 14.001H12.941C12.6858 14.0151 12.4458 14.1268 12.2706 14.3129C12.0955 14.4991 11.9986 14.7454 12 15.001C11.8686 15.001 11.7385 14.9751 11.6171 14.9248C11.4957 14.8745 11.3854 14.8007 11.2925 14.7078C11.1997 14.6148 11.126 14.5044 11.0758 14.383C11.0256 14.2615 10.9999 14.1314 11 14V10C11 9.73478 11.1054 9.48043 11.2929 9.29289C11.4804 9.10536 11.7348 9 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10V14.001Z" />
</g>
<defs>
<clipPath id="clip0_802_57395">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
