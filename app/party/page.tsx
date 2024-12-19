import Localization from "../ui/localization";
import Phone from "../ui/phone";

export const metadata = {
  title: "Ven a la fiesta",
  description: "Ven a la fiesta",
};

export default function Page() {
  
  return (
    <div className="relative overflow-hidden h-screen after:absolute 2xl:after:bg-contain after:bg-cover after:top-0 after:start-0 after:bg-no-repeat after:w-full after:h-full after:bg-[url('/bg-party.jpg')] after:blur-sm">
      <div className=" gap-3 h-screen dark:bg-darkgray relative z-[100] bg-transparent overflow-auto">
        <div className="flex flex-col align-middle items-center justify-center px-4 md:px-10">
          <h1 className="text-orange-500 text-2xl font-bold pt-11">
            ¡After Party Navideño Inolvidable!
          </h1>
          <h2 className="text-orange-500 text-xl font-bold py-4">
            ¡La Fiesta Navideña continúa!
          </h2>

          <p className="text-white font-semibold text-justify">
            Nos encantaría que nos acompañaras en nuestro exclusivo{" "}
            <span className="highlight">After Party Navideño</span>. Prepárate
            para una tarde - noche llena de música, amigos y la mejor compañía.
          </p>

          <p className="text-white font-semibold pt-10">
            <strong>📅 Fecha:</strong> 20-12-2024
          </p>
          <p className="text-white font-semibold pt-4">
            <strong>🕒 Hora:</strong> 18:00
          </p>
          <p className="text-white font-semibold pt-4 text-justify">
            <strong>📍 Ubicación:</strong> Av. Jorge Guzmán Rueda y Miramontes -
            Conjunto Solar del Río. Diagonal a la puerta vehicular de la
            Universidad Católica
          </p>

          <h3 className="text-white font-semibold pt-4">
            🎉 <span className="font-bold">Colaboración:</span>
          </h3>
          <p className="text-white font-semibold ">Tu entrada será con:</p>
          <ul className="text-white font-semibold">
            <li>🍾 <span className="font-bold text-lg">Una botella</span> (de tu elección, ¡la que prefieras!)</li>
            <li>💵 <span className="font-bold text-lg">$10 dólares</span>  (¡para que disfrutes más de la fiesta!)</li>
          </ul>

          <p className="text-white font-semibold text-xl py-5">¡No faltes!</p>

          

          <div className="text-white font-semibold">
            <p>
              Para más detalles o preguntas, no dudes en contactarnos:
            </p>
            <div className="flex w-full justify-between p-4 flex-wrap gap-4 items-center align-middle">
              <Phone name="Fernando" phone="+593986884823" />
              <Phone name="Santiago" phone="+593979844203" />
              <Phone name="José" phone="+593984510405" />
              <Phone name="Cristian" phone="+593963282192" />
            </div>

            <div>
              <p className="py-2">Te dejamos la ubicación del lugar de encuentro</p>
              <Localization />
            </div>
            <p className="py-2 text-center">¡Nos vemos!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
