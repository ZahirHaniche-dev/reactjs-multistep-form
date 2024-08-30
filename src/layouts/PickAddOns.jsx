import FormAdds from "./Form/FormAdds";
import SideBarDesktop from "./SideBar/SideBarDesktop";
import SideBarMobile from "./SideBar/SideBarMobile";

export default function PickAddOns({ step, onNext}) {
  return (
    <div>
        {/* Bloc de gauche Mobile : Étapes */}
        <SideBarMobile  step={step} />
        <div className=" flex items-center justify-center p-6 sm:p-12 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full bg-white shadow-md rounded-lg">

            {/* Bloc de gauche Desktop : Étapes */}
            <SideBarDesktop step={step} />

            {/* Bloc de droite : Formulaire */}
            <FormAdds onNext={onNext}/>

          </div>
        </div>
      </div>
  )
}
