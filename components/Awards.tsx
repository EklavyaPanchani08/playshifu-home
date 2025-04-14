import Image from 'next/image';
import logo from '../assets/image/award.png';
const Awards = () => {
    const awards = [
        { src: logo, alt: 'TOTY Finalist Award' },
        { src: logo, alt: 'Excellence Award' },
        { src: logo, alt: 'CES 2021 Award' },
        { src: logo, alt: 'Parents Choice Award' },
        { src: logo, alt: 'Smart Toy Award' },
        { src: logo, alt: 'National Parenting Award' },
    ];

    return (
        <section className="py-10 mx-auto px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                Multi award winning toys
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {awards.map((award, index) => (
                    <div key={index} className="relative aspect-square w-full max-w-[150px] mx-auto">
                        <Image
                            src={award.src.src}
                            alt={award.alt}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;