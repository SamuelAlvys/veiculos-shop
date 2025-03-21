import { Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { PiMagnifyingGlass, PiWhatsappLogo } from "react-icons/pi";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function Header() {
    return (
        <div className="bg-slate-900 pt-4">
            <div className="h-[700px] rounded-2xl mx-4 bg-[url('background-img.jpg')] bg-cover bg-no-repeat">
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
            <div>
                <h1>marcas</h1>
            </div>

            <Outlet />
        </div>
    );
}