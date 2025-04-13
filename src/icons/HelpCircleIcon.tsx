import React from "react";

export const HelpCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58110)">
<path d="M12 2C17.523 2 22 6.477 22 12C22.0021 14.6255 20.9715 17.1464 19.1309 19.0186C17.2902 20.8908 14.7872 21.9641 12.162 22.0066C9.53689 22.0491 7.00034 21.0576 5.1 19.246C3.19966 17.4344 2.08799 14.9482 2.005 12.324L2 12L2.004 11.72C2.152 6.327 6.57 2 12 2ZM12 15C11.7551 15 11.5187 15.09 11.3356 15.2527C11.1526 15.4155 11.0357 15.6397 11.007 15.883L11 16L11.007 16.127C11.0359 16.3701 11.153 16.5941 11.336 16.7566C11.519 16.9191 11.7552 17.0089 12 17.0089C12.2448 17.0089 12.481 16.9191 12.664 16.7566C12.847 16.5941 12.9641 16.3701 12.993 16.127L13 16.01L12.993 15.883C12.9643 15.6397 12.8474 15.4155 12.6644 15.2527C12.4813 15.09 12.2449 15 12 15ZM13.368 8.327C12.7694 8.02097 12.0849 7.92635 11.4257 8.05851C10.7665 8.19067 10.1714 8.54186 9.737 9.055C9.57138 9.249 9.48616 9.49896 9.49878 9.75373C9.51139 10.0085 9.62089 10.2488 9.80487 10.4255C9.98884 10.6022 10.2334 10.7019 10.4885 10.7042C10.7435 10.7066 10.9898 10.6113 11.177 10.438L11.348 10.258C11.4955 10.1226 11.681 10.0356 11.8795 10.0088C12.0779 9.98197 12.2798 10.0166 12.458 10.108C12.6501 10.2052 12.8057 10.3618 12.9016 10.5545C12.9976 10.7473 13.0288 10.9658 12.9906 11.1777C12.9524 11.3895 12.8468 11.5834 12.6896 11.7305C12.5324 11.8776 12.3319 11.97 12.118 11.994L11.886 12.006C11.6317 12.034 11.3977 12.1584 11.2323 12.3536C11.0669 12.5489 10.9827 12.8001 10.9969 13.0556C11.0111 13.3111 11.1228 13.5514 11.3088 13.7271C11.4948 13.9027 11.7411 14.0004 11.997 14C12.6716 14.002 13.3272 13.7766 13.858 13.3601C14.3887 12.9437 14.7636 12.3605 14.9221 11.7047C15.0805 11.049 15.0134 10.359 14.7314 9.74609C14.4494 9.13322 13.9691 8.63328 13.368 8.327Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58110">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
