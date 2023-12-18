import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import styled from 'styled-components'

import Asterisk from '../../../components/common/Asterisk'
import { BizmInputs } from './BizMSeller'

type ReservationSendingProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const ReservationSending = ({ register, watch }: ReservationSendingProps) => {
  return (
    <StyledReservationSending>
      <label className="reservation__label" htmlFor="reservation">
        예약발송
        <Asterisk />
      </label>
      <input className="reservation__input--text" disabled type="text" value={watch('reservation_date')} />
      <input className="reservation__inpout--date" type="date" id="reservation" {...register('reservation_date')} />
    </StyledReservationSending>
  )
}

export default ReservationSending

const StyledReservationSending = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .reservation__label {
    width: 145px;
    margin-right: ${({ theme }) => theme.spacing.margin300};
  }

  .reservation__input--text {
    margin-right: ${({ theme }) => theme.spacing.margin000};
  }

  .reservation__inpout--date {
  }
`
