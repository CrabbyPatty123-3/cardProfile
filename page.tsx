import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2x1 p-6 text-center mt-6">
      <img src="/prom.png" alt="Photo of Charles"  className="w-24 h-24 mx-auto rounded-full mb-4"/>
      <h2 className="text-xl text-black font-semibold">Charles Dowie T. Calunod</h2> 
      <p className="text-black">2nd Year Student / BSIT</p>
      <div className="flex justify-center gap-4 mt-4">
        <a target="_blank" href="https://www.facebook.com/charles.dowie.calunod" className="text-black dark:md:hover:bg-blue-300">Facebook</a>
      <a target="_blank" href="https://www.instagram.com/dowee.12/" className="text-black dark:md:hover:bg-pink-300">Instagram</a>
      <a target="_blank" href="https://github.com/CrabbyPatty123-3" className="text-black dark:md:hover:bg-gray-300">GitHub</a>
      </div>
    
    </div>
    
    
  );
}
