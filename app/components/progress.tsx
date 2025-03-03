type progressProps = {
  percentage: string
}

const Progress = ({ percentage }: progressProps) => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
      <div
        className='bg-[#238b45] h-2.5 rounded-full'
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

export default Progress
