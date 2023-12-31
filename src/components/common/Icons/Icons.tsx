import { SVGProps, memo } from 'react'
import theme from '../../../styles/theme'

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

export const OnOffIcon = memo(({ color, width, height, ...rest }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width ?? '1em'} height={height ?? '1em'} fill="none" {...rest}>
    <rect width={44} height={22} fill={theme.color.primary100} rx={11} />
    <path
      fill={color ?? theme.color.white100}
      d="M13.719 11c0 .844-.153 1.573-.457 2.188-.305.614-.723 1.088-1.254 1.421-.531.334-1.138.5-1.82.5-.683 0-1.29-.166-1.82-.5-.532-.333-.95-.807-1.255-1.421-.304-.615-.457-1.344-.457-2.188 0-.844.153-1.573.457-2.188.305-.614.723-1.088 1.254-1.421.531-.334 1.138-.5 1.82-.5.683 0 1.29.166 1.82.5.532.333.95.807 1.255 1.421.304.615.457 1.344.457 2.188Zm-.938 0c0-.693-.116-1.277-.347-1.754-.23-.476-.54-.837-.934-1.082a2.42 2.42 0 0 0-1.313-.367 2.44 2.44 0 0 0-1.316.367c-.39.245-.702.606-.934 1.082-.229.477-.343 1.061-.343 1.754 0 .693.114 1.277.343 1.754.232.476.543.837.934 1.082a2.44 2.44 0 0 0 1.316.367 2.42 2.42 0 0 0 1.313-.367c.393-.245.704-.606.934-1.082.231-.477.347-1.061.347-1.754Zm8.91-4v8h-.937l-4.36-6.281h-.078V15h-.968V7h.937l4.375 6.297h.078V7h.953Z"
    />
    <rect width={14} height={14} x={27} y={4} fill={theme.color.white100} rx={7} />
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
    width={14}
    height={14}
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
      fill={color ?? theme.color.black300}
      d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
    />
  </svg>
))

export const BrandiTypographyIcon = memo(
  ({ width, height = 16, marginRight = '5', color = '#fff', ...rest }: CustomIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" style={{ marginRight }} {...rest}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.485 7.269c1.105.664 1.769 1.758 1.769 2.936 0 1.959-1.764 3.55-3.924 3.55H1.312c0-.006-.006-.006-.006-.006h-.039s-.006 0-.006.005h-.01c-.581 0-1.072-.446-1.072-.97V3.277c0-.536.48-.971 1.071-.971h3.377c1.926 0 3.494 1.412 3.494 3.148a2.92 2.92 0 0 1-.636 1.814ZM2.339 4.26v2.417h2.288c.737 0 1.334-.552 1.334-1.222 0-.67-.586-1.195-1.334-1.195H2.339Zm4.755 5.945c0-.073-.006-.14-.017-.207-.106-.714-.742-1.272-1.568-1.356-.011-.006-.028-.006-.045-.006-.011 0-.028 0-.044-.005H2.339v3.164H5.33c.62-.005 1.15-.284 1.468-.703a.117.117 0 0 1 .022-.033c.006-.012.012-.017.023-.028.005-.011.01-.023.017-.034a.117.117 0 0 0 .022-.033v-.006c.028-.039.05-.084.072-.123l.05-.134a1.357 1.357 0 0 0 .09-.496Zm29.877 2.227a.902.902 0 0 1-.028.73c-.122.252-.346.442-.636.537a1.212 1.212 0 0 1-.38.055c-.457 0-.865-.25-1.021-.62l-.882-2.042h-4.376l-.881 2.043c-.174.38-.581.62-1.039.62-.134 0-.256-.017-.38-.056a1.056 1.056 0 0 1-.636-.536.641.641 0 0 1-.06-.173.746.746 0 0 1-.029-.19.74.74 0 0 1 .011-.19.942.942 0 0 1 .05-.178l4.086-9.494c.179-.38.614-.631 1.06-.614.453-.017.871.223 1.056.614l4.085 9.494Zm-3.773-3.277-1.367-3.164-1.368 3.164h2.735ZM50.06 2.47c.581 0 1.067.435 1.067.954v9.36c0 .525-.486.971-1.066.971-.296 0-.598-.133-.799-.351a.389.389 0 0 1-.1-.112l-5.587-6.96v6.452c0 .525-.48.971-1.05.971-.591 0-1.071-.435-1.071-.97v-9.36a.927.927 0 0 1 .43-.827c.49-.301 1.15-.2 1.479.212l5.643 7.016V3.423c0-.524.474-.954 1.054-.954Zm8.674-.179c3.494 0 6.34 2.557 6.34 5.704 0 3.165-2.846 5.738-6.34 5.738h-2.12c-.587 0-1.067-.435-1.067-.971V3.256c0-.542.469-.966 1.066-.966h2.121Zm4.186 5.704c0-2.07-1.88-3.75-4.186-3.75h-1.032v7.535h1.032c2.344-.017 4.186-1.68 4.186-3.785Zm7.641-5.687c.603 0 1.088.435 1.088.971v9.505c0 .536-.485.971-1.088.971-.597 0-1.066-.43-1.066-.97V3.277c0-.541.469-.971 1.066-.971Zm-49.697 6.19c.05.039.1.078.15.123.051.039.101.083.146.128.045.045.09.095.134.145.045.05.084.1.123.15.022.029.044.057.061.084.023.034.045.062.062.09.022.033.039.061.055.09.023.033.04.06.056.094.207.368.302.698.302 1.038v2.344c0 .536-.486.971-1.089.971-.586 0-1.066-.435-1.066-.97 0-.18-.005-.358-.005-.537-.006-.435-.006-.893.01-1.34.012-.206.006-.446-.1-.652a1.258 1.258 0 0 0-.368-.396 2.428 2.428 0 0 0-.793-.386c-.38-.106-.614-.117-1.027-.106-.301.012-.926.006-1.328.006l-.363-.006v3.416c0 .536-.485.971-1.083.971-.591 0-1.071-.435-1.071-.97V3.277c0-.541.469-.971 1.071-.971h3.545c2.16 0 3.918 1.59 3.918 3.55 0 1.021-.475 1.953-1.34 2.64Zm-.815-2.64c0-.882-.792-1.597-1.763-1.597h-2.456v3.154h2.456c.97 0 1.763-.698 1.763-1.557Z"
        clipRule="evenodd"
      />
    </svg>
  )
)

export const BizTypographyIcon = memo(({ width = 21, height = 11, ...rest }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" {...rest}>
    <path
      fill="#DB4D6E"
      d="M.759 13V4.273h1.815v3.281h.055a2.4 2.4 0 0 1 .345-.537 1.82 1.82 0 0 1 .597-.46c.247-.125.554-.188.92-.188.478 0 .918.125 1.322.375.403.247.725.621.967 1.121.241.497.362 1.12.362 1.87 0 .73-.118 1.347-.354 1.85-.233.5-.55.88-.954 1.138-.4.256-.85.383-1.347.383-.352 0-.652-.058-.899-.174a1.86 1.86 0 0 1-.6-.44 2.23 2.23 0 0 1-.359-.54h-.08V13H.758Zm1.777-3.273c0 .39.053.729.161 1.019.108.29.265.515.47.677.204.16.452.239.745.239.295 0 .545-.081.75-.243.204-.165.36-.392.464-.682.108-.292.162-.629.162-1.01 0-.378-.052-.71-.157-.997a1.485 1.485 0 0 0-.465-.673 1.177 1.177 0 0 0-.754-.243 1.2 1.2 0 0 0-.75.234 1.47 1.47 0 0 0-.465.665 2.877 2.877 0 0 0-.161 1.014ZM8.353 13V6.455h1.816V13H8.353Zm.912-7.39a.986.986 0 0 1-.694-.268.87.87 0 0 1-.286-.652c0-.25.095-.464.286-.643a.978.978 0 0 1 .694-.273c.27 0 .5.091.69.273.194.179.29.393.29.643 0 .253-.096.47-.29.652a.971.971 0 0 1-.69.269ZM11.59 13v-1.082l3.204-3.968v-.047H11.7V6.455h5.28v1.18l-3.01 3.87v.046h3.12V13H11.59Z"
    />
  </svg>
))

export const SendingIcon = memo(({ width = 20, height = 20, marginRight = '5', color, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-chart-user"
    data-icon="chart-user"
    data-prefix="fal"
    viewBox="0 0 640 512"
    width={width}
    height={height}
    style={{ marginRight }}
    {...rest}
  >
    <path
      fill={color ?? theme.color.primary100}
      d="M576 32H224c-17.7 0-32 14.3-32 32v36c-10.2-2.6-21-4-32-4V64c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H336.8c-5.3-11.4-11.8-22.2-19.5-32H576c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-176 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-57.4L395.3 267.3c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7 89.4-89.4H416c-8.8 0-16-7.2-16-16zM160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm-26.7 256c-54.2 0-98.4 42.5-101.2 96h255.8c-2.8-53.5-47-96-101.2-96h-53.4zm0-32h53.3c73.7 0 133.4 59.7 133.4 133.3 0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3 0 411.7 59.7 352 133.3 352z"
    />
  </svg>
))

export const ClockIcon = memo(({ width = 16, height = 16, color, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="svg-inline--fa fa-clock mr-2"
    data-icon="clock"
    data-prefix="fal"
    viewBox="0 0 512 512"
    width={width}
    height={height}
    {...rest}
  >
    <path
      fill={color ?? theme.color.black300}
      d="M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0zm240-144v144c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
    />
  </svg>
))

export const NoImageIcon = memo(({ width = 80, height = 80, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="white"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBox="0 0 24 24"
    {...rest}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <path d="M20.4 14.5 16 10 4 20" />
  </svg>
))

export const DateIcon = memo(({ width = 24, height = 24, color, ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    stroke={color ?? theme.color.primary100}
    strokeWidth={2}
    className="react-daterange-picker__calendar-button__icon react-daterange-picker__button__icon"
    {...rest}
  >
    <path fill="none" d="M2 2h15v15H2z" />
    <path d="M6 0v4M13 0v4" />
  </svg>
))
