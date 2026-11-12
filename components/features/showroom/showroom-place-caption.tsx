/** Title and note under a showroom photo. */
export function ShowroomPlaceCaption({
  title,
  note,
}: {
  title: string
  note: string
}) {
  return (
    <p className="mt-4 px-1 text-sm">
      {title}
      <span className="block text-xs text-muted-foreground">{note}</span>
    </p>
  )
}
