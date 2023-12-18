import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { Fragment, MouseEvent, useState } from 'react'
import styled from 'styled-components'

import { buttonHoverAnimation, inputTextFocusAnimation } from '../../../styles/GlobalStyle'
import Asterisk from '../../../components/common/Icons/Asterisk'
import { BizmInputs } from './BizMSeller'

//TODO: 실제 API 연동 후 삭제
//브랜디 셀러번호 기준으로 api 호출
//예시로, 아래 mockData는 브랜디 셀러번호 1234와 일치한 상품 결제 셀러 정보를 의미한다.
type ProductPaymentSellerInfoResponse = {
  ad_product_name: string
  ad_order_no: string
  ad_orderer_no: string
  ad_seller_name: string
  order_date: string
}

const mockProductPaymentSellerInfoResponse: ProductPaymentSellerInfoResponse = {
  ad_product_name: '타겟메세지 A',
  ad_order_no: '1231231',
  ad_orderer_no: '1231231231',
  ad_seller_name: '네모네모네모',
  order_date: '2023-12-25',
}

type SellerSearchProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const SellerSearch = ({ register, watch }: SellerSearchProps) => {
  //state
  const [productPaymentSellerInfo, setProductPaymentSellerInfo] = useState<ProductPaymentSellerInfoResponse | null>()

  //functions
  const onClickSellerNo = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const sellerNo = parseInt(watch('sellerNo'))

    sellerNo === 1234
      ? setProductPaymentSellerInfo(mockProductPaymentSellerInfoResponse)
      : setProductPaymentSellerInfo(null)
  }

  return (
    <Fragment>
      {/* 셀러번호 검색 */}
      <StyledSellerSearch>
        <label htmlFor="sellerNo" className="bizm__sellerno">
          브랜디 셀러번호
          <Asterisk />
        </label>
        <input type="text" id="sellerNo" {...register('sellerNo', { required: true })} />
        <button onClick={onClickSellerNo} className="sellerno__search--btn">
          검색
        </button>
      </StyledSellerSearch>
      <StyledSellerNoInfo>
        {productPaymentSellerInfo && (
          <div className="sellerInfo__wrapper">
            {Object.keys(productPaymentSellerInfo).map((key, index) => (
              <div className="sellerInfo__key" key={index}>
                {key}
              </div>
            ))}
          </div>
        )}
        {productPaymentSellerInfo && (
          <div className="sellerInfo__wrapper">
            {Object.values(productPaymentSellerInfo).map((value, index) => (
              <div className="sellerInfo__value" key={index}>
                {value}
              </div>
            ))}
          </div>
        )}
      </StyledSellerNoInfo>
    </Fragment>
  )
}

export default SellerSearch

const StyledSellerSearch = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  .bizm__sellerno {
    width: 145px;
    margin-right: ${({ theme }) => theme.spacing.margin300};
  }

  #sellerNo {
    ${inputTextFocusAnimation}
  }

  .sellerno__search--btn {
    ${buttonHoverAnimation}
  }
`

const StyledSellerNoInfo = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.margin100};

  .sellerInfo__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    .sellerInfo__key,
    .sellerInfo__value {
      border: 1px solid ${({ theme }) => theme.color.gray300};
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sellerInfo__key {
      background-color: #f8f9fa;
    }
  }
`
