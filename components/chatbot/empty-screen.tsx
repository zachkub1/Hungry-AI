export function EmptyScreen (): JSX.Element {
  return (
    <div className='mx-auto max-w-2xl px-4'>
      <div className='flex flex-col gap-2 rounded-lg border bg-background p-8'>
        <h1 className='text-lg font-semibold'>
          Welcome to Medical Student AI!
        </h1>
        <p className='leading-normal text-muted-foreground'>
          Welcome to Medical Student Ai. Type a disease or medication in chat to begin learning.
        </p>
      </div>
    </div>
  )
}
