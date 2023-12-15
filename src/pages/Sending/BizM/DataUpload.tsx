import styled from 'styled-components'

const DataUpload = () => {
  return (
    <StyledDataUpload>
      <div className="targetdata__search">
        <input type="text" placeholder="셀러번호" />
        <div className="targetdata__checkbtn">조회</div>
      </div>
      <div className="targetdata__table">{/* 셀러번호 기준으로 S3의 최신 모수타겟 리스트 fetching */}</div>
    </StyledDataUpload>
  )
}

export default DataUpload

const StyledDataUpload = styled.div`
  .targetdata__search {
    display: flex;
  }
`
