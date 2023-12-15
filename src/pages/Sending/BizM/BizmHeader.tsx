import { SendingIcon } from '../../../components/common/Icons/Icons'
import styled from 'styled-components'

const BizmHeader = () => {
  return (
    <StyledBizmHeader className="bizm__header">
      <span>
        <SendingIcon width={20} height={20} />
      </span>
      <span>발송 예약 | 비즈엠</span>
    </StyledBizmHeader>
  )
}

export default BizmHeader

const StyledBizmHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.white200};
  padding: ${({ theme }) => theme.spacing.margin100};
  gap: 4px;
  font-size: ${({ theme }) => theme.font.getSize(16)};
  font-family: 'SpoqaHanSans';
`
