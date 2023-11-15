function Switch() {
  return (
    <label className='relative cursor-pointer'>
      <input type='checkbox' value='' className='peer sr-only' />
      <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors after:absolute after:inset-y-0 after:left-[5%] after:my-auto after:h-5 after:w-5 after:rounded-full after:bg-orange-400 after:transition-transform after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full" />
    </label>
  )
}

export default Switch
