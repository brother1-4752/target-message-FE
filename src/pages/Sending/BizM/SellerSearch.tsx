import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { Fragment, MouseEvent, useState } from 'react'
import styled from 'styled-components'

import { buttonHoverAnimation, inputTextFocusAnimation } from '../../../styles/GlobalStyle'
import Asterisk from '../../../components/common/Asterisk'
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

    const sellerNo = watch('sellerNo')

    if (sellerNo === '1234') setProductPaymentSellerInfo(mockProductPaymentSellerInfoResponse)
    else setProductPaymentSellerInfo(null)
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
      <div className="sellerNo__info" style={{ width: '100%' }}>
        {productPaymentSellerInfo && (
          <div style={{ display: 'flex' }}>
            {Object.keys(productPaymentSellerInfo).map((key, index) => (
              <div style={{ border: '1px solid black', width: '16%' }} key={index}>
                {key}
              </div>
            ))}
          </div>
        )}
        {productPaymentSellerInfo && (
          <div style={{ display: 'flex' }}>
            {Object.values(productPaymentSellerInfo).map((key, index) => (
              <div style={{ border: '1px solid black', width: '16%' }} key={index}>
                {key}
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default SellerSearch

const StyledSellerSearch = styled.div`
  width: 100%;
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
