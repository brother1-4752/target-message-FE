import { UseFormRegister } from 'react-hook-form'
import { BizmInputs } from './BizMSeller'

type CampaignSettingProps = {
  register: UseFormRegister<BizmInputs>
}

const CampaignSetting = ({ register }: CampaignSettingProps) => {
  return (
    <div className="campaign__settings" style={{ display: 'flex' }}>
      <label htmlFor="campaignName">캠페인명</label>
      <input {...register('campaignName', { required: true })} type="text" id="campaignName" />
    </div>
  )
}

export default CampaignSetting
