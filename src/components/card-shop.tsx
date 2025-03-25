import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CarPhoto {
  carImg: string;
  title: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
}

export function CardShop({ carImg, title, model, year, mileage, price }: CarPhoto) {
  return (
    <div className="w-full ">
      <a href="/">
        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="mb-2">
            <span className="text-xs font-semibold bg-black py-1 px-3 rounded-2xl text-white">{title}</span>
          </div>
          
          <div className="max-w-md mb-3">
            <img 
              src={carImg} 
              alt="Imagem do veículo"
              className="w-full h-auto rounded"
            />     
          </div>
          
          <div className="mb-1">
            <h2 className="text-lg font-bold">{model}</h2>
            <p className="text-sm text-gray-600">
              {year} • {mileage} km
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-muted-foreground">{price}</span>
            <Button>
                Ver mais
            </Button>
          </div>
        </Card>
      </a>
    </div>
  );
}