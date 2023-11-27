import { ChangeEvent, FormEvent, useState } from 'react'
import { BrandiIcon, BrandiTypographyIcon } from '../../components/common/Icons/Icons'
import { StyledSignIn } from './Signin.styled'
import axios from 'axios'

const SignIn = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const onChangePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    formData.forEach((value, key) => {
      console.log(key, value)
    })

    const response = await axios.post('http://localhost:8080/api/login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    })
    console.log(response)
  }

  return (
    <StyledSignIn>
      <header className="signin__header">
        <div className="signin__header--title">
          <BrandiIcon width={20} height={20} color="black" />
          <BrandiTypographyIcon className="signin__header--typography" width={100} height={30} color="black" />
        </div>
        <div className="signin__header--description">
          <p>BRANDI ADMIN</p>
        </div>
      </header>

      <main className="signin__main">
        <div className="signin__form--container">
          <form className="signin__form" onSubmit={onSubmitHandler}>
            <div className="signin__form--title">
              <p>브랜디 어드민 로그인</p>
            </div>
            <div className="signin__form--input">
              <input type="text" placeholder="셀러 아이디" onChange={onChangeEmailHandler} />
              <input type="password" placeholder="셀러 비밀번호" onChange={onChangePasswordHandler} />
            </div>
            <div className="signin__form--button">
              <button type="submit">로그인</button>
            </div>

            <div className="signin__additionals">
              <div className="signin__additionals--left">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">아이디/비밀번호 기억하기</label>
              </div>
              <div className="signin__additionals--right">
                <div>비밀번호 찾기</div>
                <div>셀러 가입</div>
              </div>
            </div>
          </form>

          <hr className="signin__hr" />
          <div className="signin__etc">
            <button type="submit">입점 문의</button>
          </div>
        </div>

        <div className="signin__banners">
          <section className="signin__main--right-top">
            <img src='banner1.png' alt="banner" width={'100%'} height={'100%'} />
          </section>
          <section className="signin__main--right-bottom">
            <img src="banner2.png" alt="banner" width={'100%'} height={'100%'} />
          </section>
        </div>
      </main>

      <footer className="signin__footer--container">
        <section className="signin__footer">
          <div className="signin__footer--top">
            <p>
              회사명 : (주)브랜디 | 주소 : 서울 성동구 왕십리로 125, 11층(성수동1가, 케이디타워) | 사업자등록번호 :
              220-88-93187 I 통신판매업신고 : 2023-서울성동-1739
            </p>
            <p>이메일 : brandis@brandi.co.kr | 2020 © brandi inc.</p>
          </div>
          <div className="signin__footer--bottom">
            <span>이용약관 | 개인정보처리방침</span>
          </div>
        </section>
      </footer>
    </StyledSignIn>
  )
}

export default SignIn
