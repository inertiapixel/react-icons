import React from "react";

export const SquareRoundedXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57167)">
<path d="M12 2L12.324 2.001L12.642 2.005L13.258 2.022L13.557 2.035L14.136 2.069L14.689 2.115C19.474 2.579 21.421 4.526 21.885 9.311L21.931 9.864L21.965 10.443C21.97 10.541 21.975 10.641 21.978 10.742L21.995 11.358L22 12L21.995 12.642L21.978 13.258L21.965 13.557L21.931 14.136L21.885 14.689C21.421 19.474 19.474 21.421 14.689 21.885L14.136 21.931L13.557 21.965C13.459 21.97 13.359 21.975 13.258 21.978L12.642 21.995L12 22L11.358 21.995L10.742 21.978L10.443 21.965L9.864 21.931L9.311 21.885C4.526 21.421 2.579 19.474 2.115 14.689L2.069 14.136L2.035 13.557C2.03014 13.4574 2.0258 13.3577 2.022 13.258L2.005 12.642C2.002 12.432 2 12.218 2 12L2.001 11.676L2.005 11.358L2.022 10.742L2.035 10.443L2.069 9.864L2.115 9.311C2.579 4.526 4.526 2.579 9.311 2.115L9.864 2.069L10.443 2.035C10.541 2.03 10.641 2.025 10.742 2.022L11.358 2.005C11.568 2.002 11.782 2 12 2ZM10.511 9.14C10.3015 9.01528 10.0536 8.9714 9.81401 9.01663C9.57441 9.06186 9.35959 9.19307 9.20995 9.38558C9.06031 9.5781 8.98617 9.81865 9.00146 10.062C9.01675 10.3054 9.12043 10.5347 9.293 10.707L10.585 12L9.293 13.293L9.21 13.387C9.05459 13.588 8.98151 13.8406 9.0056 14.0935C9.02969 14.3464 9.14916 14.5807 9.33972 14.7488C9.53029 14.9168 9.77767 15.006 10.0316 14.9982C10.2856 14.9905 10.527 14.8863 10.707 14.707L12 13.415L13.293 14.707L13.387 14.79C13.588 14.9454 13.8406 15.0185 14.0935 14.9944C14.3464 14.9703 14.5807 14.8508 14.7488 14.6603C14.9168 14.4697 15.006 14.2223 14.9982 13.9684C14.9905 13.7144 14.8863 13.473 14.707 13.293L13.415 12L14.707 10.707L14.79 10.613C14.9454 10.412 15.0185 10.1594 14.9944 9.90647C14.9703 9.65355 14.8508 9.41928 14.6603 9.25125C14.4697 9.08321 14.2223 8.99402 13.9684 9.00177C13.7144 9.00953 13.473 9.11365 13.293 9.293L12 10.585L10.707 9.293L10.613 9.21L10.511 9.14Z" />
</g>
<defs>
<clipPath id="clip0_802_57167">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
