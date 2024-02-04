import { StudioIcon } from '@/icons'

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center">
      <StudioIcon className="h-[30px] w-[30px]" />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
