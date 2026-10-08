type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  lede?: string
  as?: 'h1' | 'h2'
  id?: string
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  as = 'h2',
  id,
}: SectionHeaderProps) {
  const Title = as
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="idx">{index}</span>
        {eyebrow}
      </p>
      <Title id={id} className="section-title">
        {title}
      </Title>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  )
}
