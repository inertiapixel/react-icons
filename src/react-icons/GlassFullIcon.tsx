import React from "react";

export const GlassFullIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58134)">
<path d="M5.003 10.229L5 10.043L5.001 9.93L5.009 9.859L6.009 2.859C6.04013 2.63979 6.14312 2.43711 6.30184 2.28274C6.46055 2.12837 6.66601 2.03103 6.886 2.006L6.999 2H16.999C17.2203 1.99988 17.4353 2.07315 17.6105 2.20832C17.7856 2.34349 17.911 2.53294 17.967 2.747L17.989 2.859L18.995 9.909L18.999 10C18.999 13.226 16.439 15.564 12.999 15.945V20H15.999C16.2539 20.0003 16.499 20.0979 16.6844 20.2728C16.8697 20.4478 16.9812 20.687 16.9962 20.9414C17.0111 21.1958 16.9283 21.4464 16.7647 21.6418C16.6011 21.8373 16.3691 21.9629 16.116 21.993L15.999 22H7.999C7.74412 21.9997 7.49897 21.9021 7.31363 21.7272C7.1283 21.5522 7.01677 21.313 7.00183 21.0586C6.98689 20.8042 7.06967 20.5536 7.23326 20.3582C7.39686 20.1627 7.6289 20.0371 7.882 20.007L7.999 20H10.999V15.945C7.641 15.574 5.121 13.336 5.003 10.229ZM16.132 4H7.865L7.258 8.258C8.11674 7.99766 9.02294 7.93322 9.90989 8.06942C10.7968 8.20562 11.6419 8.53899 12.383 9.045L12.599 9.2C13.2133 9.66095 13.9474 9.9353 14.7134 9.99028C15.4795 10.0452 16.2452 9.87852 16.919 9.51L16.132 4Z" />
</g>
<defs>
<clipPath id="clip0_802_58134">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
