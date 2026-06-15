import Image from "../assets/hometofooter.png"
import Image2 from "../assets/mobilehome.png"
export default function AppDownload() {
  return (
    <section className="bg-slate-50 py-20 text-center">
      <div className="hidden md:block">
         <img src={Image} alt="" />
      </div>
       
<div className="md:hidden">
<img src={Image2} alt="" />
</div>
        
{/* 
      <h2 className="text-4xl font-bold">
        Download The App
      </h2>

      <p className="mt-4">
        Available on Android and Apple
      </p>

      <div className="flex justify-center gap-6 mt-6">

        <button className="bg-black text-white px-6 py-3 rounded">
          Android
        </button>

        <button className="bg-gray-800 text-white px-6 py-3 rounded">
          Apple
        </button>

      </div> */}

    </section>
  );
}