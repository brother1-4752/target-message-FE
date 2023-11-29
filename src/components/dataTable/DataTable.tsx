//TODO: 재사용 가능하게 리팩토링 필요

// 테이블 헤더 제목
export interface HeaderContentProps {
  key: string
  value: string
}

interface TableBodyProps {
  productNo: number
  sellerName: string
  os: string
  dailyBudget: number
  campaignPeriod: string | null
  management: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// interface TableBodyProps {
//   buttonNo: number
//   buttonType: string
//   buttonName: string
//   buttonUrl: number
//   delete: string | null
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any
// }

const tableHeaderContents: HeaderContentProps[] = [
  {
    key: 'productNo',
    value: '상품번호',
  },
  {
    key: 'sellerName',
    value: '셀러명',
  },
  {
    key: 'os',
    value: 'OS',
  },
  {
    key: 'dailyBudget',
    value: '일일 예산',
  },
  {
    key: 'campaignPeriod',
    value: '캠페인 기간',
  },
  {
    key: 'management',
    value: '애드셋 관리',
  },
]

// 테이블 바디
const TableBodyDataLIst = [
  {
    productNo: 1,
    sellerName: '후드보이',
    os: 'iOS',
    dailyBudget: 0,
    campaignPeriod: null,
    management: '생성',
  },
  {
    productNo: 1,
    sellerName: '후드보이',
    os: 'Android',
    dailyBudget: 50000,
    campaignPeriod: '2023-11-25~2023-12-03',
    management: '수정',
  },
  {
    productNo: 2,
    sellerName: '맨투맨하우스',
    os: 'iOS',
    dailyBudget: 30000,
    campaignPeriod: '2023-11-29~2023-12-15',
    management: '수정',
  },
  {
    productNo: 2,
    sellerName: '맨투맨하우스',
    os: 'Android',
    dailyBudget: 80000,
    campaignPeriod: '2023-11-26~2023-12-07',
    management: '수정',
  },
]

const TableHeader = ({ headerContent }: { headerContent: HeaderContentProps[] }) => {
  // TODO: 헤더 컨텐츠 비어있으면 에러 던지기
  return (
    <tr>
      {headerContent.map((content, index) => (
        <th colSpan={1} key={index}>
          {content.value}
        </th>
      ))}
    </tr>
  )
}

// 캠페인 기간 검증 유틸함수
// const validateCampaignPeriod = (date:string) => {
//   const periodRegex = /^\d{4}-\d{2}-\d{2}~\d{4}-\d{2}-\d{2}$/;
//   return date.test(periodRegex)
// }

// 테이블 헤더 key배열
const headerKeys = tableHeaderContents.map((item) => item.key)

const TableBody = ({ tableBodyDataList }: { tableBodyDataList: TableBodyProps[] }) => {
  //TODO: 바디 컨텐츠 비어있으면 '데이터 없음' UI 보여주기
  return (
    <>
      {tableBodyDataList.length !== 0 ? (
        tableBodyDataList.map((content, index) => (
          <tr key={index}>
            {headerKeys.map((key, index) => {
              if (key === 'management')
                return (
                  <td key={key + index}>
                    <button>{content[key]}</button>
                  </td>
                )

              return <td key={key + index}>{content[key] ?? '~'}</td>
            })}
          </tr>
        ))
      ) : (
        <div>데이터 없음</div>
      )}
    </>
  )
}

export const DataTable = () => {
  return (
    <table>
      <thead>
        <TableHeader headerContent={tableHeaderContents} />
      </thead>
      <tbody>
        <TableBody tableBodyDataList={TableBodyDataLIst} />
      </tbody>
    </table>
  )
}
