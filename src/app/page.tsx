import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <header className="z-10 w-full items-center bg-hero-pattern bg-center">
        <nav className="max-w-5xl mx-auto items-center justify-between py-3" aria-label="Global">
          <div className="px-2 flex lg:flex-1">
            <a href="#" className="">
              <img className="h-12 w-auto" src="/logo_text.svg" alt="" />
            </a>
          </div>
        </nav>
      </header>
      <div className="z-10 w-full items-center bg-gray-100">
        <div className="max-w-5xl mx-auto items-center">
          <p className="px-2 text-gray-400 text-xs py-1"> Tra cứu </p>
        </div>
      </div>
      <div className="bg-white w-full items-center justify-between mt-4 px-4">
        <div className="shadow-md mx-auto bg-gray-50 max-w-md rounded">
          <div className="text-white p-3 bg-gray-500 rounded-t">
            <span>STT hiện tại: </span>
            <span className="font-bold text-xl ml-2">43 </span>
          </div>
          <div className="p-6">
            <input type="text" id="success" className="bg-gray-50 border-b text-green-900 block w-full py-2.5" 
            placeholder="Nhập STT của bạn" />
            <button type="submit" className="w-full mt-2 text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3">Tra cứu</button>
          </div>
          <div className="flex divide-x border-t border-gray-150">
            <div className="m-auto p-6">
              <p className="text-gray-500 font-bold">Thời gian ước tính</p>
              <p className="text-8xl font-bold text-sky-700">13:55</p>
              <p className="text-xs text-gray-400">Thứ 6, 20 Tháng 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
