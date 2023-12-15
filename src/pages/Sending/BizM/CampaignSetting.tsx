import { UseFormRegister } from 'react-hook-form'
import { BizmInputs } from './BizMSeller'
import styled from 'styled-components'
import Asterisk from '../../../components/common/Asterisk'
import { inputTextFocusAnimation } from '../../../styles/GlobalStyle'

type CampaignSettingProps = {
  register: UseFormRegister<BizmInputs>
}

const CampaignSetting = ({ register }: CampaignSettingProps) => {
  return (
    <StyledCampaignSetting className="campaign__settings">
      <label className="campaign__label" htmlFor="campaignName">
        캠페인명
        <Asterisk />
      </label>
      <input
        className="campaign__input"
        {...register('campaignName', { required: true })}
        type="text"
        id="campaignName"
      />
    </StyledCampaignSetting>
  )
}

export default CampaignSetting

const StyledCampaignSetting = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.margin100};

  .campaign__label {
    width: 145px;
    margin-right: ${({ theme }) => theme.spacing.margin300};
  }

  .campaign__input {
    ${inputTextFocusAnimation}
  }
`
