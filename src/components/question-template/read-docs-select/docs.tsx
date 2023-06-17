import { memo } from "react"

interface Props {
  name?: string,
  content?: string,
}

const DocsComponent: React.FC<Props> = ({ name, content }) => {
  return (
    <>
      <div className="mt-5 mb-10">
        <p className="text-center mb-3 text-lg font-bold">{name}</p>
        <div className="leading-tight" dangerouslySetInnerHTML={{ __html: content?.replace(/\n/g, '<br />') ?? '' }}></div>
      </div>
    </>
  )
}

export default memo(DocsComponent)