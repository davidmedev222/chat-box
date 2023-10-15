function StatList() {
  return (
    <ul className='grid rounded-2xl text-center text-base md:grid-cols-3'>
      <li className='space-y-2 p-8'>
        <div className='text-5xl font-medium'>+80.000</div>
        <p>Monthly Active Users</p>
      </li>
      <li className='space-y-2 p-8'>
        <div className='text-5xl font-medium'>+324.000</div>
        <p>Number of Messages Sent Daily</p>
      </li>
      <li className='space-y-2 p-8'>
        <div className='text-5xl font-medium'>90%</div>
        <p>User Satisfaction Levels</p>
      </li>
    </ul>
  )
}

export default StatList
