import Link from 'next/link';
import { AiTwotoneTool } from 'react-icons/ai';
import { BsInboxes } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { LuTag } from 'react-icons/lu';
import { TbCirclePercentage } from 'react-icons/tb';

const TopAction = () => {
    const menuItems = [
        { icon: <LuTag className='text-lg mr-2'/>, label: 'Shop by category' },
        { icon: <BsInboxes className='text-lg mr-2'/>, label: 'Shop by age' },
        { icon: <TbCirclePercentage className='text-lg mr-2'/>, label: 'Deals and Discounts' },
        { icon: <AiTwotoneTool className='text-lg mr-2'/>, label: 'Support' },
        { icon: <FaRegSmile className='text-lg mr-2'/>, label: 'Parents and Educators' },
        { icon: <IoBookOutline className='text-lg mr-2'/>, label: 'Blog' },
        { icon: <IoMdInformationCircleOutline className='text-lg mr-2'/>, label: 'About us' },
    ];

    return (
        <nav className="w-full md:block hidden">
            <div className="px-8 py-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="flex items-center text-gray-600 hover:text-gray-900 text-md font-medium ml-0"
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link
                            href="#"
                            className="text-md text-gray-600 hover:text-gray-900 font-medium"
                        >
                            Track order
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopAction;