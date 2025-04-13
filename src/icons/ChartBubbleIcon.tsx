import React from "react";

export const ChartBubbleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58594)">
<path d="M6 12C6.78261 12 7.54802 12.2296 8.20144 12.6603C8.85486 13.091 9.36758 13.7039 9.67609 14.4232C9.98459 15.1424 10.0753 15.9363 9.93708 16.7066C9.79883 17.4769 9.43765 18.1898 8.89827 18.7568C8.3589 19.3239 7.66503 19.7202 6.90261 19.8968C6.14018 20.0734 5.34271 20.0225 4.60895 19.7503C3.87519 19.4782 3.23739 18.9967 2.77454 18.3657C2.31169 17.7346 2.04413 16.9816 2.005 16.2L2 16L2.005 15.8C2.05631 14.775 2.4996 13.809 3.24319 13.1017C3.98677 12.3944 4.97376 12 6 12Z" fill="black"/>
<path d="M16 16C16.5858 16 17.1588 16.1716 17.6483 16.4935C18.1378 16.8154 18.5223 17.2736 18.7544 17.8115C18.9865 18.3494 19.056 18.9435 18.9543 19.5205C18.8527 20.0974 18.5844 20.632 18.1824 21.0582C17.7805 21.4844 17.2626 21.7836 16.6926 21.9189C16.1226 22.0542 15.5254 22.0196 14.9748 21.8195C14.4243 21.6193 13.9443 21.2623 13.5943 20.7926C13.2442 20.3228 13.0394 19.7608 13.005 19.176L13 19L13.005 18.824C13.0499 18.0601 13.385 17.3422 13.9417 16.8173C14.4985 16.2923 15.2348 16 16 16Z" fill="black"/>
<path d="M14.5 2C15.5784 2.00009 16.6329 2.31718 17.5325 2.91184C18.4321 3.5065 19.137 4.35249 19.5596 5.34459C19.9822 6.3367 20.1039 7.43116 19.9094 8.49185C19.7149 9.55253 19.2129 10.5327 18.4659 11.3103C17.7188 12.088 16.7596 12.6289 15.7075 12.8657C14.6555 13.1025 13.5571 13.0249 12.5488 12.6424C11.5405 12.2599 10.667 11.5895 10.0367 10.7145C9.40645 9.83948 9.04733 8.7985 9.004 7.721L9 7.5L9.004 7.279C9.06108 5.85964 9.6651 4.51741 10.6896 3.53339C11.714 2.54937 13.0795 1.99989 14.5 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58594">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
