import Button from "../components/Button"

import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="quality" className="w-full flex justify-center min-h-screen gap-20 max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">We Provide you <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Our dedication to detail and excellence ensures your satisfaction.</p>
        <Button label="View details"/>  
      </div>
      
      <div className="">
        <img src={shoe8} alt="shoes quality image" width={900} height={900} className=""></img>
      </div>
    </section>
  )
}

export default SuperQuality