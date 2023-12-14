import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { SendingIcon } from '../../../components/common/Icons/Icons'
import SellerSearch from './SellerSearch'
import ImageSetting from './ImageSetting'

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BizmInputs>({
    defaultValues: {
      buttonType: 'app_link',
    },
  })

  // 페칭 데이터로 초기 값 설정하고 싶을 때
  // useForm({ defaultValues: async () => await fetch() })

  //functions

  //forData submit
  const onSubmitBizm: SubmitHandler<BizmInputs> = (data) => console.log(data)

  return (
    <StyledBizMSeller>
      <div className="bizm__wrapper">
        <header className="bizm__header">
          <span>
            <SendingIcon width={20} height={20} />
          </span>
          <span>발송 예약 | 비즈엠</span>
        </header>

        {/* TODO: 테스트 후, 폴더 파일 스플리팅 */}
        <form className="bizm__form" onSubmit={handleSubmit(onSubmitBizm)}>
          {/* 셀러번호 검색 */}
          <SellerSearch register={register} watch={watch} />

          {/* 이미지 설정 */}
          <ImageSetting register={register} watch={watch} />

          {/* 버튼 설정 */}
          <div>
            <table>
              <thead>
                <tr>
                  {['버튼 타입', '버튼명', '버튼 URL'].map((tableHeader, index) => (
                    <th key={index}>{tableHeader}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select defaultValue="app_link" {...register('buttonType')} disabled>
                      <option value="app_link">앱링크</option>
                    </select>
                  </td>
                  <td>
                    <input type="text" {...register('buttonName', { required: true })} />
                  </td>
                  <td>
                    {['android', 'ios'].map((os, index) => (
                      <div key={index}>
                        <label htmlFor={os}>{os}</label>
                        {os === 'android' ? (
                          <input type="text" id={os} {...register('androidUrl', { required: true })} />
                        ) : (
                          <input type="text" id={os} {...register('iosUrl', { required: true })} />
                        )}
                      </div>
                    ))}
                    {['mobile', 'pc'].map((device, index) => (
                      <div key={index}>
                        <label htmlFor={device}>{device}</label>
                        {device === 'mobile' ? (
                          <input type="text" id={device} {...register('mobileUrl', { required: true })} />
                        ) : (
                          <input type="text" id={device} {...register('pcUrl', { required: true })} />
                        )}
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 캠페인 설정 */}
          <div className="campaign__settings" style={{ display: 'flex' }}>
            <label htmlFor="campaignName">캠페인명</label>
            <input {...register('campaignName', { required: true })} type="text" id="campaignName" />
          </div>

          {/* 데이터 업로드 - TODO: 정책 정해지면 그때 반영 */}

          {/* 예약발송 */}
          <div>
            <input type="checkbox" />
            <label htmlFor="reservation">예약발송</label>
            <input disabled type="text" style={{ width: '20%', height: '20px' }} value={watch('reservation_date')} />
            <input type="date" id="reservation" {...register('reservation_date')} />
          </div>

          {/* 제출 */}
          <input type="submit" value="발송하기" />
        </form>
      </div>
    </StyledBizMSeller>
  )
}

export default BizMSeller

const StyledBizMSeller = styled.div`
  padding: 32px 0 0 32px;
  font-size: ${({ theme }) => theme.font.getSize(16)};
  width: 95%;

  .bizm__wrapper {
    background-color: white;
    border-radius: 4px;
    border: 1px solid rgb(233 236 239);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px;
  }

  .bizm__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.white200};
    padding: ${({ theme }) => theme.spacing.margin100};
    gap: 4px;
  }

  .bizm__form {
    padding: ${({ theme }) => theme.spacing.margin100};

    .image__container {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.margin100};
      margin: ${({ theme }) => theme.spacing.margin100} 0;

      .image__title {
      }

      .image__description {
        display: flex;
        gap: 16px;
      }

      .image__settings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .sending__container {
    display: flex;
  }
`
