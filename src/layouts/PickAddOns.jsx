import FormAdds from "./Form/FormAdds";
import SideBar from "./SideBar/SideBar";

export default function PickAddOns({ step, onNext}) {
  return (
    <div>
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6 sm:p-12 lg:px-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full bg-white shadow-md rounded-lg">

            {/* Bloc de gauche Desktop : Étapes */}
            <SideBar step={step} />

            {/* Bloc de droite : Formulaire */}
            <FormAdds onNext={onNext}/>

          </div>
        </div>
      </div>
  )
}
