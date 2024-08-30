import bgSidebarDesktop from '../../images/bg-sidebar-mobile.svg'
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

  return (
    <>
      <div className="animate-fadeIn flex md:hidden col-span-1 bg-blue-700 p-12  flex-row 
      bg-cover bg-no-repeat shadow-lg bg-sidebar-mobile"
            style={{ backgroundImage: `url(${bgSidebarDesktop})` }} >
            <ul className="flex space-x-8 justify-center w-full">
                {data.map(sidebar => (
                    <li key={sidebar.id} className="flex items-center gap-1">
                        <span className={`h-8 w-8 flex items-center justify-center border rounded-full text-sm font-bold 
                            ${step == sidebar.number ? "bg-sky-200 text-sky-950 " : " text-white"}`}>
                            {step > sidebar.number ? <CheckIcon className="w-6 h-6 font-bold text-green-600" /> : sidebar.number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
