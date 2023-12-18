import { UseFormRegister } from 'react-hook-form'
import { BizmInputs } from './BizMSeller'
import styled from 'styled-components'
import Asterisk from '../../../components/common/Icons/Asterisk'
import { inputTextFocusAnimation } from '../../../styles/GlobalStyle'

type ButtonSettingProps = { register: UseFormRegister<BizmInputs> }

const ButtonSetting = ({ register }: ButtonSettingProps) => {
  return (
    <StyledButtonSetting>
      <h1 className="buttonsetting__title">
        버튼 설정
        <Asterisk />
      </h1>
      <div className="buttonsetting__wrapper">
        <table className="buttonsetting__table">
          <thead>
            <tr className="table__header">
              {['버튼 타입', '버튼명', '버튼 URL'].map((tableHeader, index) => (
                <th className="table__header--data" key={index}>
                  {tableHeader}
                  <Asterisk />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table__body">
              <td className="table__body--data">
                <select defaultValue="app_link" {...register('buttonType')} disabled>
                  <option value="app_link">앱링크</option>
                </select>
              </td>
              <td className="table__body--data">
                <input className="buttonName__input" type="text" {...register('buttonName', { required: true })} />
              </td>
              <td className="table__body--data buttonUrl__list">
                {['android', 'ios'].map((os, index) => (
                  <div className="buttonUrl__listItem" key={index}>
                    <label className="buttonUrl__label" htmlFor={os}>
                      {os}
                    </label>
                    {os === 'android' ? (
                      <input className="buttonUrl__input" type="text" id={os} {...register('androidUrl')} />
                    ) : (
                      <input className="buttonUrl__input" type="text" id={os} {...register('iosUrl')} />
                    )}
                  </div>
                ))}
                {['mobile', 'pc'].map((device, index) => (
                  <div className="buttonUrl__listItem" key={index}>
                    <label className="buttonUrl__label" htmlFor={device}>
                      {device}
                    </label>
                    <select className="buttonUrl__select" defaultValue="http://">
                      <option value="http://">http://</option>
                      <option value="https://">https://</option>
                    </select>
                    {device === 'mobile' ? (
                      <input className="buttonUrl__input" type="text" id={device} {...register('mobileUrl')} />
                    ) : (
                      <input className="buttonUrl__input" type="text" id={device} {...register('pcUrl')} />
                    )}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledButtonSetting>
  )
}

export default ButtonSetting

const StyledButtonSetting = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.margin100};
  font-size: ${({ theme }) => theme.font.getSize(14)};

  .buttonsetting__title {
    margin-bottom: ${({ theme }) => theme.spacing.margin000};
    font-size: ${({ theme }) => theme.font.getSize(18)};
    font-family: 'SpoqaHanSansM';
  }

  .buttonsetting__wrapper {
    width: 70%;

    .buttonsetting__table {
      width: 100%;
      .table__header,
      .table__body {
        display: grid;
        grid-template-columns: 110px 200px auto;

        .buttonName__input {
          ${inputTextFocusAnimation}
        }
      }

      .buttonUrl__list {
        display: flex;
        flex-direction: column;

        .buttonUrl__listItem {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: ${({ theme }) => theme.spacing.margin000};

          .buttonUrl__label {
            width: 60px;
            margin-right: 8px;
          }

          .buttonUrl__select {
            margin-right: 8px;
            text-align: center;
            width: 80px;
            opacity: 0.7;
          }

          .buttonUrl__input {
            ${inputTextFocusAnimation}
            width: 60%;
          }
        }
      }
    }
  }

  .table__header--data,
  .table__body--data {
    border: 1px solid ${({ theme }) => theme.color.gray300};
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .table__header--data {
    background-color: #f8f9fa;
  }
`
