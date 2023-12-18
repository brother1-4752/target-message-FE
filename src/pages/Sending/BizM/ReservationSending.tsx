import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import styled from 'styled-components'

import Asterisk from '../../../components/common/Icons/Asterisk'
import { BizmInputs } from './BizMSeller'
// import { DateIcon } from '../../../components/common/Icons/Icons'

type ReservationSendingProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const ReservationSending = ({ register, watch }: ReservationSendingProps) => {
  // 현재 년-월-일
  const startDate = new Date()
  const currentYear = startDate.getFullYear()
  const currentMonth = startDate.getMonth() + 1
  const currentDay = startDate.getDate()

  return (
    <StyledReservationSending>
      <label className="reservation__label" htmlFor="reservation">
        예약발송
        <Asterisk />
      </label>
      <input className="reservation__input--text" disabled type="text" value={watch('reservation_date') ?? ''} />
      <div className="reservation__date--area">
        <input
          className="reservation__input--date"
          type="date"
          id="reservation"
          {...register('reservation_date')}
          min={`${currentYear}-${currentMonth}-${currentDay}`}
        />
        {/* <DateIcon className="dateicon" /> */}
      </div>
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
    height: 20px;
  }

  .reservation__date--area {
    position: relative;
    .reservation__input--date {
      cursor: pointer;
      padding: 4px;
      color: ${({ theme }) => theme.color.gray200};
      border: 1px solid ${({ theme }) => theme.color.gray100};
      border-radius: 4px;

      &::-webkit-calendar-picker-indicator {
        /* filter: invert(1); */
      }
    }
    /* .dateicon {
      position: absolute;
      right: 0;
      top: 6px;
    } */
  }
`
