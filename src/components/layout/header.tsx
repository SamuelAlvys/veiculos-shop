import { Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { PiMagnifyingGlass, PiWhatsappLogo } from "react-icons/pi";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CarouselBrands } from "../carroselcard";
import { Cardstock } from "../cardstock";

export function Header() {
    return (
        <div className="bg-slate-900 pt-4">
            <div className="h-[700px] rounded-2xl mx-4 bg-[url('/background-img.jpg')] bg-cover bg-no-repeat">
                <div className="py-5 px-15 text-white flex flex-row justify-between">
                    <div>
                        <a href="#">
                            <h1>
                                ROGERIO VEICULOS
                            </h1>
                        </a>
                    </div>
                    <nav>
                        <ul className="flex flex-row gap-12">
                            <li>
                                <a href="#">
                                    <h2>Home</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h2>Estoque</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h2>Venda seu carro</h2>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h2>Sobre</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Button className="text-black">
                            <PiWhatsappLogo size={30}/>
                            Contato
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                        <div className="w-full flex flex-col justify-center mt-8">
                            <h1 className="text-white text-5xl">
                                SEU SONHO ESTÁ AQUI
                            </h1>
                            <div className="w-full mt-10 flex justify-center">
                                <div className="max-w-sm space-x-2">
                                    <Popover>
                                        <PopoverTrigger className="py-2 px-4 rounded-2xl">Qual veículo você está buscando?</PopoverTrigger>
                                        <PopoverContent>
                                            <div className="flex flex-row gap-2">
                                                <Input type="text" placeholder="Marca ou modelo" className="text-black"/>
                                                <Button type="submit">
                                                    <PiMagnifyingGlass size={32} color="black" />
                                                </Button>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Carrossel com cards das marcas*/}
            <div className="mt-20 flex flex-row justify-center">
                <CarouselBrands />
            </div>
            {/*Lista com últimos carros adicionados ao sistema*/}
            <div className="py-5 px-15 mt-15">
                <h2 className="text-white text-xl">
                    Últimas novidades 
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    <Cardstock>
                        <img src="/background-img.jpg" alt="" />
                    </Cardstock>
                    <Cardstock>
                        <img src="/background-img.jpg" alt="" />
                    </Cardstock>
                    <Cardstock>
                        <img src="/background-img.jpg" alt="" />
                    </Cardstock>
                    
                </div>
            </div>
            <div className="mt-40">
                .
            </div>

            <Outlet />
        </div>
    );
}