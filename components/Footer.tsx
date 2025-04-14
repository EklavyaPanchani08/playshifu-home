import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const footerLinks = {
        'Shop by category': [
            'Problem Solving',
            'Geography',
            'Language & Numbers',
            'STEM',
            'Coding',
            'Animals & Dinosaurs',
            'Space and Music',
            'Packs and Combos'
        ],
        'Support': [
            'Device Compatibility',
            'FAQ',
            'Contact us'
        ],
        'Parents & Educators': [
            'Free E- Storybooks',
            'Parent Hub',
            'Shifu in Classrooms'
        ],
        'Blog': [
            'Creative Hub',
            'Newscast',
            'Spotlight',
            'Technology',
            'PlayShifu Digest'
        ],
        'About us': [
            'Company',
            'Press',
            'Contact',
            'Careers'
        ]
    };

    const paymentMethods = [
        { name: 'Visa', image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fvisa.webp&w=1920&q=75' },
        { name: 'Apple Pay', image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fapplepay.webp&w=1920&q=75' },
        { name: 'Mastercard', image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fmastercard.webp&w=1920&q=75' },
        { name: 'Google Pay', image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fgpay.webp&w=1920&q=75' }
    ];

    return (
        <footer className="bg-white py-16 px-8 border-t-2 border-b-2">
            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-6 gap-8 mb-12">
                <div className="col-span-1">
                    <h3 className="text-xl font-bold mb-4">Join the PlayShifu Club</h3>
                    <p className="text-gray-600 mb-4">viverra ullamcorper Quisque Morbi dolor in efficitur. Nullam venenatis</p>
                    <button className="bg-secondary text-white px-6 py-2 rounded-full">Join the club</button>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Need Help in something</h3>
                        <p className="text-gray-600 mb-4">viverra ullamcorper Quisque Morbi dolor in efficitur. Nullam venenatis</p>
                        <button className="bg-secondary text-white px-6 py-2 rounded-full">Contact us</button>
                    </div>
                </div>

                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title} className="col-span-1">
                        <h3 className="text-xl font-bold mb-4">{title}</h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
                <div className="border-b pb-6">
                    <h3 className="text-xl font-bold mb-2">Join the PlayShifu club</h3>
                    <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="bg-secondary text-white px-6 py-2 rounded-full">Join the club</button>
                </div>

                <div className="border-b pb-6">
                    <h3 className="text-xl font-bold mb-2">Need help in something?</h3>
                    <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="bg-secondary text-white px-6 py-2 rounded-full">Contact Us</button>
                </div>

                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title} className="border-b pb-6">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <h3 className="text-xl font-bold">{title}</h3>
                                <span className="transform group-open:rotate-180 transition-transform">
                                    ▼
                                </span>
                            </summary>
                            <ul className="mt-4 space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                ))}
            </div>

            {/* Social and Payment - Both Views */}
            <div className="pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                        <span className="font-semibold text-md">Connect with us</span>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook size={24} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram size={24} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={24} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter size={24} /></Link>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {paymentMethods.map((method) => (
                            <div key={method.name} className="w-12 h-8 relative">
                                <Image
                                    src={method.image}
                                    alt={method.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;