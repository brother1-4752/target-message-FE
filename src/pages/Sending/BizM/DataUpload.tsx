import styled from 'styled-components'
import { buttonHoverAnimation, inputTextFocusAnimation } from '../../../styles/GlobalStyle'
import Asterisk from '../../../components/common/Asterisk'

const DataUpload = () => {
  const onClickTargetData = () => {
    console.log('타겟 모수 조회')
  }

  return (
    <StyledDataUpload>
      <div className="targetdata__search">
        <label htmlFor="sellerNo" className="targetdata__label">
          타겟 모수 조회
          <Asterisk />
        </label>
        <input className="targetdata__input" id="sellerNo" type="text" placeholder="셀러번호" />
        <button className="targetdata__search--btn" onClick={onClickTargetData}>
          조회
        </button>
      </div>
      <div className="targetdata__table">{/* 셀러번호 기준으로 S3의 최신 모수타겟 리스트 fetching */}</div>
    </StyledDataUpload>
  )
}

export default DataUpload

const StyledDataUpload = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .targetdata__search {
    height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.margin100};

    .targetdata__label {
      width: 145px;
      margin-right: ${({ theme }) => theme.spacing.margin300};
    }

    .targetdata__input {
      ${inputTextFocusAnimation}
      padding: 4px 8px;

      &::placeholder {
        text-align: center;
      }
    }

    .targetdata__search--btn {
      ${buttonHoverAnimation}
    }
  }
`
