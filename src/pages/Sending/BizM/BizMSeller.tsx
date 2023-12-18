import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useState } from 'react'

import ReservationSending from './ReservationSending'
import CampaignSetting from './CampaignSetting'
import ButtonSetting from './ButtonSetting'
import ImageSetting from './ImageSetting'
import SellerSearch from './SellerSearch'
import BizmHeader from './BizmHeader'
import DataUpload from './DataUpload'
import { buttonHoverAnimation } from '../../../styles/GlobalStyle'

export type BizmInputs = {
  sellerNo: string // 타겟메세지 상품 결제 셀러 조회용 셀러번호
  imageUrl: string // 이미지 URL
  imageLink: string // 이미지 클릭 시, 이동할 랜딩페이지 링크
  buttonType: string // 버튼 타입
  buttonName: string // 버튼명
  androidUrl: string // 버튼 url
  iosUrl: string // 버튼 url
  mobileUrl: string // 버튼 url
  pcUrl: string // 버튼 url
  campaignName: string //캠페인 명
  reservation_date: string // 예약발송 날짜
}

const BizMSeller = () => {
  //state
  const { register, handleSubmit, watch } = useForm<BizmInputs>({
    defaultValues: {
      buttonType: 'app_link',
    },
  })
  const [isAtLeastOneFieldFilled, setIsAtLeastOneFieldFilled] = useState(true)

  // 페칭 데이터로 초기 값 설정하고 싶을 때
  // useForm({ defaultValues: async () => await fetch() })

  //form submit
  const onSubmitBizm: SubmitHandler<BizmInputs> = (data) => {
    // android, ios, mobile, pc 중 최소 1개 이상의 버튼 링크가 입력되었는지 확인
    const { androidUrl, iosUrl, mobileUrl, pcUrl } = data
    const hasAtLeastOneFieldFilled = androidUrl || iosUrl || mobileUrl || pcUrl
    hasAtLeastOneFieldFilled ? (setIsAtLeastOneFieldFilled(true), console.log(data)) : setIsAtLeastOneFieldFilled(false)
  }

  return (
    <StyledBizMSeller>
      <div className="bizm__wrapper">
        <BizmHeader />

        <form className="bizm__form" onSubmit={handleSubmit(onSubmitBizm)}>
          {/* 셀러번호 검색 */}
          <SellerSearch register={register} watch={watch} />

          {/* 이미지 설정 */}
          <ImageSetting register={register} watch={watch} />

          {/* 버튼 설정 */}
          <ButtonSetting register={register} />
          {!isAtLeastOneFieldFilled && <p>버튼 링크 최소 1개를 입력해주세요.</p>}
          {/* 캠페인 설정 */}
          <CampaignSetting register={register} />

          {/* 데이터 업로드 - TODO: 정책 정해지면 그때 반영 */}
          <DataUpload />

          {/* 예약발송 */}
          <ReservationSending register={register} watch={watch} />

          {/* 제출 */}
          <div className="submit__area">
            <input className="cancel--btn" type="submit" value="취소" />
            <input className="submit--btn" type="submit" value="발송" />
          </div>
        </form>
      </div>
    </StyledBizMSeller>
  )
}

export default BizMSeller

const StyledBizMSeller = styled.div`
  padding: 32px 0 0 32px;
  font-size: ${({ theme }) => theme.font.getSize(14)};
  width: 93%;

  .bizm__wrapper {
    background-color: white;
    border-radius: 4px;
    border: 1px solid rgb(233 236 239);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px;
  }

  .bizm__form {
    padding: ${({ theme }) => theme.spacing.margin100};

    .submit__area {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      margin: ${({ theme }) => theme.spacing.margin000} 0;
      .cancel--btn,
      .submit--btn {
        ${buttonHoverAnimation}
        zoom: 1.2;
        margin: ${({ theme }) => theme.spacing.margin100} 0;
      }
    }
  }
`
