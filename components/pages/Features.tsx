
import EcoSystemIcon from '@/public/assets/icons/ecosystem.svg'

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-24">
     <div className="container">
      <h2 className='text-center font-bold tracking-tighter text-5xl'>Need EverDay Dark</h2>
      <div className='max-w-xl mx-auto'>
      <p className='text-center mt-5 text-xl text-white/70'>
        Ever Fail Ever Thrid No Matter Try Again Fail Batter 
      </p>
      <p className="font-bold text-center mt-5 text-xl">You World Dream</p>
      </div>
      <div className='mt-16 flex flex-col gap-4 sm:flex-row sm:flex-1 '>  
        {features.map(( fea, description) => (
          <div
          className='border border-white/30 px-5 py-10 text-center rounded-xl'
           key={fea.title}
           >
            <div 
             className="inline-flex h-14 w-14 bg-white justify-center items-center text-black rounded-lg "
             >
              <EcoSystemIcon />
            </div>
            <h3 className='mt-6 font-bold '>
              {fea.title}
            </h3>
            <p className='mt-2 text-white/70'>
              {fea.description}
            </p>
          </div>
        ))}
      </div>
     </div>
    </section>
  )
};
