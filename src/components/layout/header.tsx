import { Outlet } from "react-router-dom";

export function Header() {
    return (
        <div className="bg-slate-900 pt-4">
            <div className="h-[700px] rounded-2xl mx-4 bg-[url('background-img.jpg')] bg-cover bg-no-repeat">
                <h1>.</h1>
            </div>
            <div>
                <h1>marcas</h1>
            </div>

            <Outlet />
        </div>
    );
}