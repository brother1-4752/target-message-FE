import { SVGProps, memo } from 'react'
import styled from 'styled-components'

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  marginRight?: string
  color?: string
  width?: number
  height?: number
}

const LoadingSpinnerIcon = memo(({ width = 83, height = 83, color = '#db4d6e', ...rest }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: 'auto',
      //   background: 'transparent',
      display: 'block',
      shapeRendering: 'auto',
    }}
    viewBox="0 0 100 100"
    {...rest}
  >
    <circle
      cx={50}
      cy={50}
      r={36}
      fill="none"
      stroke={color}
      strokeDasharray="169.64600329384882 58.548667764616276"
      strokeWidth={5}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
))

const LoadingSpinnerText = () => {
  return <div className="loading__text">Loading</div>
}

export const LoadingSpinner = memo(() => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerIcon />
      <LoadingSpinnerText />
    </LoadingSpinnerContainer>
  )
})

const LoadingSpinnerContainer = styled.div`
  width: 83px;
  height: 83px;
  position: relative;

  .loading__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #db4d6e;
    font-size: ${({ theme }) => theme.font.getSize(12)};
  }
`
