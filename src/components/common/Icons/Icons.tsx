import { SVGProps, memo } from 'react'

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  marginRight?: string
  color?: string
  width?: number
  height?: number
}

export const BrandiIcon = memo(({ marginRight = '5', color = '#fff', ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    baseProfile="tiny-ps"
    className="symbol"
    viewBox="0 0 41 41"
    style={{ marginRight: marginRight }}
    {...rest}
  >
    <defs>
      <clipPath id="cp1" clipPathUnits="userSpaceOnUse">
        <path d="M0 0h41.06v41.07H0V0Z" />
      </clipPath>
    </defs>
    <g id="Layer">
      <path
        fillRule="evenodd"
        d="M25.49 18.08a4.668 4.668 0 0 1 2.37 1.7c.29.4.52.84.68 1.31.15.47.23.96.23 1.46 0 2.63-2.06 4.69-4.69 4.69H13.83V16.98c0-.61.12-1.22.36-1.79.23-.57.58-1.09 1.01-1.52.44-.44.96-.78 1.52-1.02.57-.23 1.18-.36 1.8-.36.49 0 .99.08 1.46.24.47.15.91.38 1.31.67.4.3.75.65 1.04 1.05.29.4.51.85.66 1.32-3.47.52-5.97 3.48-5.97 7.29 0 .65.53 1.18 1.19 1.18 2.09 0 3.98-.73 5.33-2.06.26-.26.5-.54.72-.84.22-.3.41-.62.57-.95a6.547 6.547 0 0 0 .66-2.11Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        d="M19.54 21.53c1.89-.42 3.23-1.75 3.58-3.58-1.81.36-3.15 1.71-3.58 3.58Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        d="M19.54 21.53c1.89-.42 3.23-1.75 3.58-3.58-1.81.36-3.15 1.71-3.58 3.58Z"
        fill={color}
      />
      <g id="Clip-Path: Clip-Path" clipPath="url(#cp1)">
        <path
          id="Clip-Path"
          fillRule="evenodd"
          d="M41.06 20.54c0 11.34-9.19 20.53-20.53 20.53C9.19 41.07 0 31.88 0 20.54 0 9.19 9.19 0 20.53 0c11.34 0 20.53 9.19 20.53 20.54Zm-16.98 9.07c3.96 0 7.06-3.1 7.06-7.06 0-3.43-2.46-6.29-5.7-6.93-.64-3.24-3.5-5.69-6.92-5.69-3.89 0-7.06 3.16-7.06 7.05v11.44c0 .16.03.31.09.46.06.14.15.27.26.38.11.11.24.2.38.26.15.06.3.09.46.09h11.43Z"
          fill={color}
        />
      </g>
    </g>
  </svg>
))

export const OnOffIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <rect width={44} height={22} fill="#DB4D6E" rx={11} />
    <path
      fill="#fff"
      d="M13.719 11c0 .844-.153 1.573-.457 2.188-.305.614-.723 1.088-1.254 1.421-.531.334-1.138.5-1.82.5-.683 0-1.29-.166-1.82-.5-.532-.333-.95-.807-1.255-1.421-.304-.615-.457-1.344-.457-2.188 0-.844.153-1.573.457-2.188.305-.614.723-1.088 1.254-1.421.531-.334 1.138-.5 1.82-.5.683 0 1.29.166 1.82.5.532.333.95.807 1.255 1.421.304.615.457 1.344.457 2.188Zm-.938 0c0-.693-.116-1.277-.347-1.754-.23-.476-.54-.837-.934-1.082a2.42 2.42 0 0 0-1.313-.367 2.44 2.44 0 0 0-1.316.367c-.39.245-.702.606-.934 1.082-.229.477-.343 1.061-.343 1.754 0 .693.114 1.277.343 1.754.232.476.543.837.934 1.082a2.44 2.44 0 0 0 1.316.367 2.42 2.42 0 0 0 1.313-.367c.393-.245.704-.606.934-1.082.231-.477.347-1.061.347-1.754Zm8.91-4v8h-.937l-4.36-6.281h-.078V15h-.968V7h.937l4.375 6.297h.078V7h.953Z"
    />
    <rect width={14} height={14} x={27} y={4} fill="#fff" rx={7} />
  </svg>
))

export const ToggleDownIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-chevron-down fa-xs"
    data-icon="chevron-down"
    data-prefix="fal"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4l180.7-180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z"
    />
  </svg>
))

export const ToggleUpIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-chevron-up fa-xs"
    data-icon="chevron-up"
    data-prefix="fal"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M244.7 116.7c6.2-6.2 16.4-6.2 22.6 0l192 192c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 150.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192z"
    />
  </svg>
))

export const HomeIcon = memo(({ marginRight = '5', color, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-house"
    data-icon="house"
    data-prefix="fal"
    viewBox="0 0 576 512"
    width="1em"
    height="1em"
    style={{ marginRight }}
    {...rest}
  >
    <path
      fill={color}
      d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235v197c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432V206.7L288 37.3l192 169.4V432c0 26.5-21.5 48-48 48h-64V320c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v160h-64c-26.5 0-48-21.5-48-48zm144 48V320h96v160h-96z"
    />
  </svg>
))

export const ListMenuIncon = memo(({ width = 16, height = 16, marginRight, color, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-bars"
    data-icon="bars"
    data-prefix="fas"
    viewBox="0 0 448 512"
    width={width}
    height={height}
    style={{ marginRight }}
    {...rest}
  >
    <path
      fill={color ? color : 'var(--color-black-3)'}
      d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
    />
  </svg>
))
