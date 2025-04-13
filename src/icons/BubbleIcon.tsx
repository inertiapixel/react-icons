import React from "react";

export const BubbleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58703)">
<path d="M12.4008 2C13.5145 1.99952 14.6087 2.29291 15.5728 2.85055C16.5369 3.40819 17.3368 4.21034 17.8918 5.176L17.9818 5.338L18.1078 5.365C19.4606 5.68116 20.672 6.43327 21.5554 7.50551C22.4388 8.57775 22.9453 9.91067 22.9968 11.299L23.0008 11.533C23.0009 12.3647 22.8372 13.1884 22.519 13.9568C22.2008 14.7253 21.7343 15.4236 21.1462 16.0118C20.5582 16.5999 19.86 17.0665 19.0915 17.3848C18.3231 17.7032 17.4995 17.867 16.6678 17.867L16.6328 17.865L16.5978 17.915C16.1314 18.5312 15.5349 19.037 14.8508 19.3965C14.1667 19.756 13.4118 19.9603 12.6398 19.995L12.4008 20C11.9194 20 11.4514 19.9367 10.9968 19.81L10.9498 19.796L7.51578 21.857C7.37234 21.9433 7.20954 21.9922 7.0423 21.9992C6.87505 22.0063 6.70872 21.9712 6.55854 21.8973C6.40836 21.8233 6.27915 21.7129 6.18275 21.576C6.08635 21.4392 6.02585 21.2803 6.00678 21.114L6.00078 21V18.566L5.87978 18.506C5.32182 18.2089 4.85004 17.7728 4.51015 17.2399C4.17027 16.7069 3.9738 16.0952 3.93978 15.464L3.93378 15.267C3.93378 15.0237 3.95711 14.7847 4.00378 14.55L4.01678 14.492L3.90378 14.402C3.27847 13.8848 2.76864 13.2422 2.40725 12.5156C2.04586 11.789 1.84095 10.9947 1.80578 10.184L1.80078 9.934C1.80078 8.39574 2.41185 6.92049 3.49956 5.83278C4.58727 4.74507 6.06253 4.134 7.60078 4.134L7.65878 4.135L7.80878 3.972C8.94047 2.77804 10.4931 2.0724 12.1368 2.005L12.4008 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58703">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
