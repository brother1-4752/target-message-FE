import withGeneralLayout from '../../components/common/Layout/GeneralLayout'

const Home = withGeneralLayout(() => {
  const mockSellerId = 123123
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <a href="/sign-in">로그인</a>
        </li>
        <li>
          <a href="/sign-up">회원가입</a>
        </li>
        <li>
          <a href="/biz-center">비즈센터</a>
          <ul>
            <li>
              <a href={`/biz-center/bizm/seller/${mockSellerId}`}>카카오 비즈엠 셀러({mockSellerId})</a>
            </li>
            <li>
              <a href="/biz-center/bizm/admin">카카오 비즈엠 어드민</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
})

export default Home
