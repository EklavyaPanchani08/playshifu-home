import Image from 'next/image';
import amazon from '../assets/image/amazon.png';
const RetailPartners = () => {


    return (
        <section className="bg-primary py-12 px-8">
            <h2 className="text-2xl font-extrabold mb-4">Also Available at</h2>
            <div className="flex flex-wrap md:gap-6 gap-2 justify-between items-center w-full ">
                <div className="bg-white border-black border-2 rounded-lg p-5 ">
                    <Image
                        src={amazon}
                        alt="Retail Partner 1"
                        style={{ height: 'auto', position: "unset" }}
                        className="object-contain md:w-[130px] w-[100px]"
                    />
                </div>
                <div className="bg-white border-black border-2 rounded-lg p-5 ">
                    <Image
                        src={amazon}
                        alt="Retail Partner 1"
                        style={{ height: 'auto', position: "unset" }}
                        className="object-contain md:w-[130px] w-[100px]"
                    />
                </div>
                <div className="bg-white border-black border-2 rounded-lg p-5 ">
                    <Image
                        src={amazon}
                        alt="Retail Partner 1"
                        style={{ height: 'auto', position: "unset" }}
                        className="object-contain md:w-[130px] w-[100px]"
                    />
                </div>
                <div className="bg-white border-black border-2 rounded-lg p-5 ">
                    <Image
                        src={amazon}
                        alt="Retail Partner 1"
                        style={{ height: 'auto', position: "unset" }}
                        className="object-contain md:w-[130px] w-[100px]"
                    />
                </div>
                <div className="bg-white border-black border-2 rounded-lg p-5 ">
                    <Image
                        src={amazon}
                        alt="Retail Partner 1"
                        style={{ height: 'auto', position: "unset" }}
                        className="object-contain md:w-[130px] w-[100px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default RetailPartners;