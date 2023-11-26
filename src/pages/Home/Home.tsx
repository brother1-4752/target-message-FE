import { useState } from 'react'
import withGeneralLayout from '../../components/common/Layout/GeneralLayout'
import { DataTable } from '../../components/dataTable/DataTable'

const Home = withGeneralLayout(() => {
  const mockSellerId = 123123
  const [date, setDate] = useState<Date>(new Date())

  const date1 = new Date('2023-12-02')

  const formatted = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const date = new Date(value)
    setDate(date)
    console.dir(formatted(date1))
  }

  return (
    <div>
      <DataTable />

      {/* <h1>Home</h1> */}
      {/* <form>
        <input type="date" onChange={onChangeHandler} />
      </form> */}

      {/* <ul>
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
      </ul> */}
    </div>
  )
})

export default Home
