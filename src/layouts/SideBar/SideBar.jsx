import bgSidebarDesktop from '../../images/bg-sidebar-desktop.svg'
import { getData } from "../../features/sidebarSlice";
import { CheckIcon } from '@heroicons/react/16/solid';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function SideBar({step}) {
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.sidebarReducer);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    console.log(step);

  return (
    <>
      <div className="hidden sm:flex col-span-1 bg-blue-700 pt-12 pl-6 rounded-l-lg flex-col bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgSidebarDesktop})` }} >
        <ul className="space-y-8">
          { data.map(sidebar => (
              <li key={sidebar.id} className="flex items-center gap-1">
                  <span className={`h-8 w-8 flex items-center justify-center border rounded-full text-sky-950 text-sm font-bold 
                    ${step == sidebar.number ? "bg-sky-200" : ""}`}>

                      {step > sidebar.number ? <CheckIcon className="size-3 text-green-600" /> : sidebar.number}
                  </span>

                  <span className="ml-4 flex flex-col justify-center space-y-0 ">
                    <div className="text-gray-400 text-sm font-normal uppercase">{sidebar.step}</div>
                    <div className="text-gray-300 text-sm uppercase mt-1 font-semibold">{sidebar.text_step}</div>
                  </span>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}
