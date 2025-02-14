
export default function SubHeader() {
  return (
    <ul className=" mt-7 flex flex-col md:flex-row  items-center justify-between shadow-[5px_5px_5px] shadow-orange-300  bg-orange-100 border rounded-xl px-6 py-4">
          <li className="border-b-2 border-b-stone-950 w-full md:border-b-0 py-3">
            <h3 className=" text-2xl font-bold  ">+7000</h3>
            <span className=" text-xs">Students Passed Out</span>
          </li>
          <li className="border-b-2 border-b-stone-950 w-full md:border-b-0 py-3">
            <h3 className=" text-2xl font-bold">+37</h3>
            <span className=" text-xs">Awards & Recognitions</span>
          </li>
          <li className="w-full py-3 ">
            <h3 className=" text-2xl font-bold">+15</h3>
            <span className=" text-xs">Experience Educators</span>
          </li>
          
        </ul>
  )
}
