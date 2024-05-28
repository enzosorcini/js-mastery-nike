import Button from "../components/Button"

import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="w-full flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">We Provide you <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="lg:max-w-lg mt-4 info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="lg:max-w-lg mt-6 info-text">Our dedication to detail and excellence ensures your satisfaction.</p>
        
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>
      
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoes quality image" width={570} height={522} className="object-contain"></img>
      </div>
    </section>
  )
}

export default SuperQuality