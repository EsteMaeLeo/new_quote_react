

function Button({operator, fn}) {

  return (
    <button
        type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-600 rounded-full hover:outline-none hover:ring-4 hover:ring-offset-2 hover:ring-lime-600"
        onClick={fn}
    >
        {operator}
  </button>
  )
}

export default Button