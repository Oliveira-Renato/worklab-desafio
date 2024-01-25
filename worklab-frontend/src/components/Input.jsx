export default function Input({name}) {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name.toLowerCase()}
          className="block w-full rounded-md ring-1 border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm sm:leading-5 outline-none transition-all duration-300 ease-in-out"
        />
      </div>
  </div>
  )
}