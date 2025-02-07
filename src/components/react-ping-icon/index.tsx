import { tm } from '@/utils/tw-merge';

interface ReactPingIconProps {
  size: number;
}

function ReactPingIcon({ size }: ReactPingIconProps) {
  return (
    <span className="relative">
      <img src="/react.svg" alt="React" height={size} width={size} />
      <img
        role="presentation"
        className={tm(
          'absolute inset-0 animate-[ping_2s_ease-out_3s_infinite] opacity-45',
          'hover:animate-none'
        )}
        src="/react.svg"
        alt=""
        height={size}
        width={size}
      />
    </span>
  );
}

export default ReactPingIcon;
