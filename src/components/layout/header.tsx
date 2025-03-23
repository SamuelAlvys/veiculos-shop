
import { Separator } from "@/components/ui/react-separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


export function Header() {
    
    
    return (
        <div>
            <div className="w-full h-20 flex flex-row items-center justify-between px-10 bg-neutral-800">
                <div>
                    <a href="/home">
                        <h2 className="text-white text-xl">
                            Rogério Veículos 
                        </h2>
                    </a>
                </div>
                <nav>
                    <ul className="text-white flex flex-row gap-8">
                        <li>
                            <a href="/home">
                                <h2>
                                    Home
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>
                                    Estoque
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>
                                    Venda seu carro
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>
                                    Financie
                                </h2>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <h2>
                                    Sobre nós
                                </h2>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Button>
                        <h2 className="text-black">
                            Mais informações
                        </h2>
                    </Button>
                </div>
                
            </div>
            <div className="w-full py-5 flex justify-center">
                <div className=" flex flex-row gap-4">
                    <Input placeholder="Digite o modelo do veículo" className="px-3 w-88"/>
                    <Button variant={"search"}>
                        <h2 className="text-black">
                            Buscar
                        </h2>
                    </Button>
                </div>
            </div>
                <Separator />
        </div>
    );
}

















{/* const [state, setState] = useState<any>()
    //import { useEffect, useState } from "react";
    //import { api } from "@/lib/api";
         
             useEffect(() => {
                 api.get('/vehicles')
                     .then(response => {
                         setState(response.data)
                     })
             }, [])
         
             console.log(state)
         
                              <CardContent>
                                 <ul>
                                 {state?.data.length > 0 ? (
                                 <ul>
                                     {state.data.map((vehicle: any) => (
                                         <li key={vehicle.id}>
                                             <h2>{vehicle.model} - {vehicle.year}</h2>
                                         </li>
                                     ))}
                                 </ul>
                             ) : (
                                 <p>Carregando veículos...</p>
                             )}
                                 </ul>
                             </CardContent>*/}