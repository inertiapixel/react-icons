import React from "react";

export const CaretLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58636)">
<path d="M13.8829 5.00891L13.9409 5.00391H14.0589L14.1169 5.00891L14.1769 5.01791L14.2289 5.02791L14.3369 5.05991L14.4039 5.08691L14.5359 5.15691L14.6259 5.22191L14.7069 5.29491L14.7899 5.38891L14.8439 5.46591L14.8979 5.56191L14.9149 5.59791L14.9419 5.66491L14.9739 5.77291L14.9839 5.82591L14.9939 5.88591L14.9979 5.94291L14.9999 6.00191V18.0019C14.9999 18.8539 14.0139 19.2989 13.3769 18.7849L13.2929 18.7089L7.29286 12.7089C7.12068 12.5367 7.01725 12.3076 7.00197 12.0646C6.98669 11.8216 7.06061 11.5813 7.20986 11.3889L7.29286 11.2949L13.2929 5.29491L13.3869 5.21191L13.4639 5.15791L13.5599 5.10391L13.5959 5.08691L13.6629 5.05991L13.7709 5.02791L13.8239 5.01791L13.8839 5.00791L13.8829 5.00891Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58636">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
