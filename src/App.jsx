import { RxDownload } from "react-icons/rx";
import logo from "./assets/logo.png";
import "./App.scss";

function App() {
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between py-4 px-16">
          <img src={logo} alt="Patify" className="w-80 h-auto" />
          <ul className="flex gap-16 text-white text-2xl cursor-pointer">
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Músicas</li>
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Eventos</li>
            <li className="py-3 px-4 rounded-xl hover:bg-[#fb9f89]">Contato</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center my-16">
        <h1 className="my-8 text-white text-6xl uppercase">Músicas</h1>
        <hr className="border-t border-solid border-zinc-400 w-1/2" />
        <table className="text-white border border-solid border-white mt-32">
          <thead className="text-left">
            <tr className="">
              <th className="px-8">Nome</th>
              <th className="px-8">Duração</th>
              <th className="px-8">Download</th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            <tr className="border-b border-solid border-white">
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                Tudo Novo de Novo
              </td>
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                2:01
              </td>
              <td className="px-3 py-4">
                <RxDownload className="mx-auto w-8 h-8 cursor-pointer" />
              </td>
            </tr>
            <tr className="border-b border-solid border-white">
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                CORRA!
              </td>
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                2:53
              </td>
              <td className="px-3 py-4">
                <RxDownload className="mx-auto w-8 h-8 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                Fugir
              </td>
              <td className="border-r border-solid border-zinc-400 px-8 py-4">
                7:33
              </td>
              <td className="px-3 py-4">
                <RxDownload className="mx-auto w-8 h-8 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
