import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { BizmInputs } from './BizMSeller'

type ReservationSendingProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const ReservationSending = ({ register, watch }: ReservationSendingProps) => {
  return (
    <div>
      <input type="checkbox" />
      <label htmlFor="reservation">예약발송</label>
      <input disabled type="text" style={{ width: '20%', height: '20px' }} value={watch('reservation_date')} />
      <input type="date" id="reservation" {...register('reservation_date')} />
    </div>
  )
}

export default ReservationSending
