import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
export function CarouselBrands() {

    return(
        <div className="w-full mx-48">
            <Carousel opts={{slidesToScroll: 1}} className="w-full">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 sm:basis-1/3 md:basis-1/5 lg:basis-1/10">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center">
                                    <div className="flex flex-col gap-1">
                                        <img src="/logos/BMW.svg" alt="" />
                                        <h2>
                                            BMW
                                        </h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}