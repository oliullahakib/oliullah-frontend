import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';

const NoWorries = () => {
  const images = ['https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411909/pexels-annushka-ahuja-8055837_dafvqs.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411860/jozsef-hocza-hhASRAL_1io-unsplash_1_spnvhd.png']
  return (
    <section className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Large Image (Desktop Only) */}
          <div className="hidden lg:block lg:flex-1 relative aspect-4/4.5 rounded-3xl overflow-hidden border border-neutral-800/50">
            <Image
              src={'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png'}
              alt="Person concentrating"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content Card */}
          <div className="flex-[1.2] bg-neutral-800/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-neutral-800/50 relative overflow-hidden group">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 lg:mb-20">
              
              {/* Badge */}
              <TitleBadge className='w-40' >
                <span className="text-white">No worries</span>
              </TitleBadge>

              {/* Social Proof (Avatar Stack) */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {images.map((avatar, i) => (
                    <div key={i} className="relative w-8 h-8 rounded-full border-2 border-neutral-900 overflow-hidden shadow-lg">
                      <Image 
                      src={avatar} 
                      alt="Student" 
                      fill 
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-neutral-400 text-xs md:text-sm font-medium">
                  Join with 5K other students
                </p>
              </div>

            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-end justify-between">
              
              {/* Text Block */}
              <div className="flex-1 space-y-6 lg:space-y-3 max-w-1/3">
                <h6 className="text-neutral-500  font-medium leading-relaxed max-w-[400px]">
                  The ability to concentrate deeply is the ultimate productivity hack
                </h6>
                <h4 className="text-white font-bold ">
                  And fortunately it’s a skill you can train & develop.
                </h4>
              </div>

              {/* Right Strip: Horizontal on Mobile, Vertical on Tablet/Desktop */}
              <div className="w-full md:w-auto flex flex-row md:flex-col gap-3 md:gap-4 items-center">
                {images.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative flex-1 md:flex-none w-full md:w-28 lg:w-36 aspect-square md:aspect-4/5 rounded-xl md:rounded-2xl overflow-hidden border border-neutral-800/50 transition-all duration-500 hover:scale-105"
                  >
                    <Image src={img} alt="Focus visual" fill className="object-cover" />
                  </div>
                ))}
              </div>

            </div>

            {/* Glowing background hint */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 blur-[100px] pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NoWorries;
