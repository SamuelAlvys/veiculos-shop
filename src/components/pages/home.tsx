import { CardShop } from "../card-shop";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export function Home() {

    return (
        <div>
             <div className="w-full py-5 flex justify-center my-2">
                <div className=" flex flex-row gap-2">
                    <Input placeholder="Digite o modelo do veículo" className="px-5 w-96 py-6"/>
                    <Button className="px-5 py-6">
                        <h2 className="text-white">
                            Buscar
                        </h2>
                    </Button>
                </div>
            </div>
            <Separator />
            <div className="px-15 pt-7 text-xl bg-gray-100 pb-[500px]">
                <div>
                    <h2>
                        Últimas novidades
                    </h2>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-6 justify-center">
                {[...Array(3)].map((_, index) => (
                    <CardShop
                    key={index}
                    carImg="/car.jpg"
                    title="Garantia do ano"
                    model="Toyota YARIS 1.5 I6V FLEX XL PLUS CONNECT MULTIDRIVE"
                    year="2020/2021"
                    mileage="81.257"
                    price="R$ 80.990"
                    />
                ))}
                </div>
            </div>
        </div>
)}