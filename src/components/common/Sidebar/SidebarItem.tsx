import { useState } from 'react'
import { OnOffIcon, ToggleDownIcon, ToggleUpIcon } from '../Icons/Icons'
import { useNavigate } from 'react-router-dom'

type SidebarItemProps = {
  label: string
  path?: string
  icon?: React.ReactNode
  hasOnOff?: boolean
  description?: string
  children?: SidebarItemProps[]
  isPointData?: boolean
  isAdminPage?: boolean
}

const SidebarItem = ({
  label,
  path,
  icon,
  hasOnOff,
  description,
  children,
  isPointData,
  isAdminPage,
}: SidebarItemProps) => {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const naviagte = useNavigate()

  return (
    <>
      {children ? (
        <li style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', position: 'relative' }}>
          <div>
            <span>{icon}</span>
            {label}
            {isToggleOn ? (
              <ToggleUpIcon style={{ position: 'absolute', right: 0 }} onClick={() => setIsToggleOn((prev) => !prev)} />
            ) : (
              <ToggleDownIcon
                style={{ position: 'absolute', right: 0 }}
                onClick={() => setIsToggleOn((prev) => !prev)}
              />
            )}
          </div>
          {isToggleOn && (
            <ul>
              {children.map((item, index) => {
                return (
                  <li style={{ background: 'red' }} onClick={() => naviagte(item.path as string)} key={index}>
                    {item.label}
                  </li>
                )
              })}
            </ul>
          )}
        </li>
      ) : (
        <>
          {isPointData && (
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: 'linear-gradient(270deg, #A8164A 0%, #A8164A 0.01%, #C2255C 45.83%, #F0365C 100%)',
              }}
            >
              <div>
                <span>{icon}</span>
                {label}
              </div>
              <p>{description}</p>
            </li>
          )}
          {hasOnOff && (
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{label}</div>

              <OnOffIcon width={44} height={22} />
            </li>
          )}

          {!isPointData && !hasOnOff && (
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span>{icon}</span>
                {label}
              </div>
              <p>{description}</p>
            </li>
          )}
        </>
      )}
    </>
  )
}

export default SidebarItem
