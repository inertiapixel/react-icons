import React from "react";

export const ChessKnightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58558)">
<path d="M8.96065 1.98838L8.81365 2.01637L8.69865 2.04537C8.57227 2.08548 8.45513 2.15032 8.35403 2.23612C8.25294 2.32192 8.16993 2.42697 8.10981 2.54515C8.0497 2.66334 8.01368 2.79229 8.00387 2.92452C7.99406 3.05675 8.01064 3.18961 8.05265 3.31537L8.80165 5.56037L5.98665 7.29537C5.53507 7.57339 5.21238 8.01937 5.08955 8.53526C4.96672 9.05114 5.0538 9.59469 5.33165 10.0464L5.42065 10.1794C5.60635 10.4332 5.84927 10.6396 6.12971 10.7819C6.41014 10.9242 6.72018 10.9984 7.03465 10.9984L8.59765 10.9974L6.98365 15.6714C6.93152 15.822 6.91617 15.983 6.93886 16.1407C6.96156 16.2985 7.02164 16.4486 7.11411 16.5785C7.20658 16.7083 7.32876 16.8142 7.47045 16.8872C7.61214 16.9603 7.76924 16.9984 7.92865 16.9984H15.8897C16.1511 16.9984 16.4022 16.8961 16.5891 16.7133C16.776 16.5305 16.8839 16.2818 16.8897 16.0204L17.0017 11.0204C17.0017 7.19338 15.4467 4.14237 12.3317 3.05438L9.93265 2.22438L9.55765 2.10338L9.29965 2.02937L9.16465 1.99838L9.06365 1.98538L9.00865 1.98438L8.96065 1.98738V1.98838Z" />
<path d="M18 18H6C5.73478 18 5.48043 18.1054 5.29289 18.2929C5.10536 18.4804 5 18.7348 5 19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.4903 21.0001 17.9636 20.8201 18.33 20.4942C18.6963 20.1682 18.9301 19.719 18.987 19.232L18.998 19.058C19.0059 18.922 18.9859 18.7859 18.9394 18.658C18.8928 18.53 18.8206 18.4129 18.7271 18.3138C18.6337 18.2148 18.521 18.1358 18.3959 18.0819C18.2709 18.0279 18.1362 18 18 18Z" />
</g>
<defs>
<clipPath id="clip0_802_58558">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
