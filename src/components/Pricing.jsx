import Image from 'next/image';
import signIcon from '../assets/icons/sign.png';
import EnrollButton from './Shared/EnrollButton';
import TitleBadge from './Shared/TitleBadge';
const Pricing = () => {
    const benefits = [
        "6h of videos - Step-by-step deep work strategies.",
        "Templates & Trackers – Stay on track effortlessly.",
        "Live Q&As – Expert guidance & accountability.",
        "Exclusive Community – Connect with others."
    ];
    return (
        <div id='pricing' className='flex flex-col md:flex-row gap-6 justify-center max-w-7xl mx-auto mb-50 px-5 mt-32'>
            {/* left div  */}
            <div  className=''>
                <div className="w-full min-h-[530px] lg:w-[750px] bg-neutral-600/40 border border-primary-300/50 rounded-[32px] flex flex-col justify-center px-10">
                    <div>
                        <TitleBadge className={'w-40 top-5 text-white'}>Introduction</TitleBadge>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold m-5 leading-tight">
                            The Deep Work  Blueprint
                        </h1>
                    </div>

                    <div className=" ">
                        {benefits.slice(0, 2).map((benefit, i) => (
                            <div key={i} className="flex items-center  group">
                                <Image src={signIcon} alt="Check" width={200} height={200} className="opacity-80 w-22 group-hover:opacity-100" />
                                <p className="text-neutral-400 text-sm">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* right div  */}
            <div>
                <div className="w-full lg:w-[450px] bg-neutral-600/40 border border-primary-300/50 rounded-[32px] ">
                    <div className='flex justify-between items-center px-5'>
                        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold m-5 leading-tight">
                            $349
                            <span className="text-neutral-400 text-xl relative ml-2">$500
                                <div className="w-14 h-px bg-red-500 absolute top-1/2 left-0 rotate-12"></div>
                            </span>
                        </h3>
                        <button className="bg-primary-500 text-white px-4 py-2 rounded-full">30% off</button>
                    </div>
                    <p className='ml-10 text-white text-sm'>30% off until 4d : 2h : 41m : 17s</p>
                    <div className=" ">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center  group">
                                <Image src={signIcon} alt="Check" width={200} height={200} className="opacity-80 w-22 group-hover:opacity-100" />
                                <p className="text-neutral-400 text-sm">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mb-5">
                        <EnrollButton className="w-2/3 py-2 text-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing