import Image from 'next/image';
import Link from 'next/link';
import contact1 from '../assets/image/contact-1.png';
const Support = () => {
    return (
        <section className="py-16 px-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Support Card */}
                <div className="bg-[#FFF9EA] rounded-2xl overflow-hidden">
                    <div className="flex items-center">
                        <div className="w-[200px] h-[200px] relative">
                            <Image
                                src={contact1}
                                alt="Support Characters"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="ml-6 p-6">
                            <h3 className="text-2xl font-bold mb-2">Have any questions? <br /> We`re here to help 24x7</h3>
                            <Link
                                href="/contact"
                                className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-semibold transition-colors"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Card */}
                <div className="bg-[#FFF9EA] rounded-2xl overflow-hidden">
                    <div className="flex items-center">
                        <div className="w-[200px] h-[200px] relative">
                            <Image
                                src={contact1}
                                alt="FAQ Character"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="ml-6 p-6">
                            <h3 className="text-2xl font-bold mb-2">Frequently asked questions</h3>
                            <Link
                                href="/faq"
                                className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-semibold transition-colors"
                            >
                                See Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;