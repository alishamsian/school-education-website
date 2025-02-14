
export default function Divider() {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className="w-5 h-5 bg-white border-2 border-black rounded-full"></div>

      <div className="flex-grow flex items-center ">
        <div className="h-1 w-full bg-black flex items-center justify-around">
          <div className="h-1 w-5 bg-white  mx-1"></div>
          <div className="h-1 w-5 bg-white mx-1"></div>
          <div className="h-1 w-5 bg-white mx-1"></div>
          <div className="h-1 w-5 bg-white mx-1"></div>
        </div>
      </div>

      <div className="w-5 h-5 bg-white border-2 border-black rounded-full"></div>
    </div>
  )
}
