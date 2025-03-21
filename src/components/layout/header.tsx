import { PiEnvelopeSimple, PiMapPin, PiWhatsappLogo } from "react-icons/pi";
import { Outlet } from "react-router-dom";

export function Header() {
    return (
        <div>
            <div className="w-full bg-gray-100 py-2 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 text-xs">
                <div className="mb-2 md:mb-0">
                    <h2>Bem-vindo... Profissionalismo e Qualidade</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="border-r border-neutral-400 pr-4 md:pr-8">
                        <a href="#" className="flex flex-row gap-2 items-center">
                            <PiMapPin size={20} color="red" />
                            <h2>R. São Francisco - centro</h2>
                        </a>
                    </div>
                    <div className="border-r border-neutral-400 pr-4 md:pr-8">
                        <a href="#" className="flex flex-row gap-2 items-center">
                            <PiWhatsappLogo size={20} color="red" />
                            <h2>82 9 9999-9999</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex flex-row gap-2 items-center">
                            <PiEnvelopeSimple size={20} color="red" />
                            <h2>rogerioveiculos@veiculos.com</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 bg-neutral-800 flex flex-row items-center justify-between text-white px-40">
                <div>
                    <a href="">
                        <img src="logoCar.png" width={130} height={130} alt="" />
                    </a>
                </div>
                <nav>
                    <ul className="flex flex-row gap-14">
                        <li>
                            <a href="/home">
                                <h2>Home</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>Estoque</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>Venda seu carro</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>Financie</h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>Sobre nós</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </div>
    );
}