import { IconList } from "./IconList";
import ImagenPortada from "../assets/PortadaPrincipal.jpg";

export function MainSection() {
  return (
    <div className="bg-slate-50  2xl:mt-24 xl:mt-24 lg:mt-24 md:mt-24 mt-16 mb-48 w-11/12 2xl:w-8/12 xl:w-10/12 md:w-10/12 lg:w-10/12">
      <div className="2xl:grid xl:grid lg:grid grid-cols-5 place-items-center -mt-0 md:block sm:block xs:block">
        <div className="col-span-3">
          <h1 className="mb-5 font-bold 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl text-4xl text-center lg:text-left xl:text-left 2xl:text-left">
            Hola, me llamo<br></br>
            <span className="text-violet-900">Sergio Carrascosa</span>
          </h1>
          <p className=" text-base font-medium text-slate-900 mb-2 xl:mb-5 2xl:mb-5 lg:mb-5 text-justify 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-base 2xl:p-0-xl xl:p-0 lg:p-0 md:p-0 pl-3 pr-3">
            Actualmente estoy buscando mi primera oportunidad laboral como
            desarrollador web, principalmente{" "}
            <span className="text-violet-900 font-bold">Frontend</span> o{" "}
            <span className="text-violet-900 font-bold">Full Stack</span>!{" "}
            <br></br>
            Me encantaría trabajar con{" "}
            <span className="text-violet-900 font-bold">React</span>, aunque
            estoy abierto a todo tipo de ofertas, porque también me gusta
            aprender cosas nuevas. <br></br>
          </p>
          <div className="grid place-content-center lg:block xl:block 2xl:block mb-4">
          <IconList list={["Twitter", "Github", "Linkedin"]} />
          </div>
        </div>
        <div className="col-span-2 2xl:w-full 2xl:pl-36 2xl:pt-12 2xl:pb-12 xl:w-full xl:pl-36 xl:pt-12 xl:pb-12 lg:pt-6 lg:pb-6 lg:pl-28 lg:w-full w-72 pt-0 pb-0">
          <img
            src={ImagenPortada}
            alt="Imagen de perfil para la portada de la web"
            className="rounded-lg transform scale-x-[-1]"
          ></img>
        </div>
      </div>
    </div>
  );
}
