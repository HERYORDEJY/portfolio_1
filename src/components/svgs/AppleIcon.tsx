import {memo, SVGProps} from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={31}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M22.795 29.622c-1.75 1.629-3.663 1.371-5.504.6-1.947-.789-3.735-.823-5.79 0-2.573 1.063-3.931.754-5.468-.6C-2.687 21-1.401 7.868 8.499 7.388c2.413.12 4.092 1.269 5.504 1.372 2.109-.412 4.128-1.594 6.38-1.44 2.698.206 4.736 1.234 6.076 3.085-5.576 3.206-4.253 10.252.858 12.223-1.019 2.571-2.341 5.125-4.54 7.011l.018-.017Zm-8.97-22.336C13.556 3.463 16.79.309 20.508 0c.518 4.423-4.182 7.714-6.683 7.286Z"
      />
    </svg>
  );
}

const AppleIcon = memo(SvgComponent)
export default AppleIcon
