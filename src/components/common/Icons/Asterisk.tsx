import styled from 'styled-components'

type AsteriskProps = {
  width?: string
  height?: string
} & React.HTMLAttributes<HTMLParagraphElement>

const Asterisk = ({ width = '12px', height = '12px', ...rest }: AsteriskProps) => {
  return (
    <StyledAsterisk style={{ width: width, height: height }} {...rest}>
      *
    </StyledAsterisk>
  )
}

export default Asterisk

const StyledAsterisk = styled.span`
  color: ${({ theme }) => theme.color.primary100};
  font-weight: 700;
  margin-left: 4px;
`
