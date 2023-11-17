import clsx from 'clsx'

interface Props {
  tab: number
  changeTab: (number: number) => () => void
}

function Tab({ tab, changeTab }: Props) {
  const classes = {
    tab: clsx('grid grid-cols-3 bg-orange-400 px-4 text-center font-medium'),
    active: clsx(
      'w-full border-b-[3px] border-transparent p-4 text-gray-200 data-[tab-active=true]:border-white data-[tab-active=true]:text-white'
    ),
    badge: clsx('rounded-full bg-white px-1 py-0.5 text-xs text-orange-400')
  }

  return (
    <ul className={classes.tab}>
      <li>
        <button onClick={changeTab(0)} className={classes.active} data-tab-active={tab === 0}>
          Chats <span className={classes.badge}>16</span>
        </button>
      </li>
      <li>
        <button onClick={changeTab(1)} className={classes.active} data-tab-active={tab === 1}>
          Status <span className={classes.badge}>12</span>
        </button>
      </li>
      <li>
        <button onClick={changeTab(2)} className={classes.active} data-tab-active={tab === 2}>
          Calls <span className={classes.badge}>12</span>
        </button>
      </li>
    </ul>
  )
}

export default Tab
