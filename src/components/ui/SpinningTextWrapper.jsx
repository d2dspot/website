import { SpinningText } from "@/components/magicui/spinning-text";

/**
 * Reusable SpinningTextWrapper component
 *
 * Props:
 * - children: string (required)
 * - className: string (optional)
 * - radius: number (optional, default 7)
 * - duration: number (optional, default 12)
 * - fontSize: number (optional, default 1)
 * - reverse: boolean (optional, default false)
 * - ...rest: any other SpinningText props
 */
export function SpinningTextWrapper({
  children,
  className = "",
  radius = 7,
  duration = 12,
  fontSize = 1,
  reverse = false,
  ...rest
}) {
  return (
    <SpinningText
      radius={radius}
      duration={duration}
      fontSize={fontSize}
      className={className}
      reverse={reverse}
      {...rest}
    >
      {children}
    </SpinningText>
  );
}
