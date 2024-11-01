import Link from "next/link";
import { GiOrange } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav className="justify-between sticky top-0 h-20 border border-neutral-200 shadow-md p-4 px-8 flex items-center">
            <section className="text-xl text-neutral-900 font-bold">
                <h1 className="flex gap-1.5 items-center"><span className="text-orange-400 flex gap-1.5 items-center"><GiOrange className="w-8 h-8" />Orange</span> Pharmacy</h1>
            </section>
            <section className="flex items-center gap-16">
                <ol className="flex gap-8 text-neutral-500">
                    <li><Link className="hover:text-neutral-800 transition-all ease-in-ou" href="/produtos/remedios">Remedios</Link></li>
                    <li><Link className="hover:text-neutral-800 transition-all ease-in-ou" href="/produtos/cosmeticos">Cosmeticos</Link></li>
                    <li><Link className="hover:text-neutral-800 transition-all ease-in-ou" href="/produtos/acessorios">Acessorios</Link></li>
                </ol>
                <div className="text-black flex gap-4">
                    <h1>Carrinho</h1>
                    <h1>Perfil</h1>
                </div>
            </section>
        </nav>
    );
}

export default NavBar;