import Image from 'next/image';
import nbc from '../assets/image/nbc.png';
import fox from '../assets/image/fox.png';
import com1 from '../assets/image/1.png';
import com2 from '../assets/image/2.png';
import com3 from '../assets/image/3.png';
import com4 from '../assets/image/4.png';

const VideoSection = () => {

    const brands = [
        'forbes', 'wired', 'buzzfeed', 'parents', 'fortune',
        'inc42', 'venturebeat', 'world-economic-forum', 'business-insider'
    ];

    return (
        <section className="py-16 px-4">
            <div className="xl:max-w-7xl max-w-full w-full mx-auto flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                    <div className='lg:order-1 order-2'>
                        <iframe className='md:h-[350px] h-[250px] w-full' src="https://www.youtube.com/embed/jeSUiZ2lonU?si=wsBr8naRiHZ2IpEG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </div>
                    <div className='lg:order-2 order-1'>
                        <h2 className="text-2xl font-bold mb-4">AS SEEN ON</h2>
                        <div className="flex items-center gap-4">
                            <Image
                                src={fox}
                                alt="FOX 11"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                            <span className="text-2xl text-secondary">&</span>
                            <Image
                                src={nbc}
                                alt="NBC"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-600 mt-4 text-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com1}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com2}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com3}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com4}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com1}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com2}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com3}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <div className="relative aspect-square w-full max-w-[120px] mx-auto">
                    <Image
                        src={com4}
                        alt="company 1"
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;