
import {RiShieldCheckFill} from 'react-icons/ri'
import {BiCycling, BiLike, BiHappyAlt} from 'react-icons/bi'
import {BsHeadset} from 'react-icons/bs'
import {GiShatteredGlass, GiPiggyBank} from 'react-icons/gi'
import {MdOutlineAlarmOn} from 'react-icons/md'

export default function HowTo() {
    function Card ({title, subtitle, icon, bgColor}){
        return(
            <article className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2">
            <div className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden pb-2">
                <div className={"relative h-36 lg:h-48 overflow-hidden flex justify-center items-center " + bgColor}>
                {icon}
                </div>
                <div className="flex flex-col text-center lg:px-6 lg:py-10 py-3 px-3 h-36">
                    <h2 className="mb-2 font-bold">{title}</h2>
                    <p className="text-sm font-light">{subtitle}</p>
                </div>
            </div>
            </article>
        )
    }
    
    return(
    <section>
      <div className="pt-3 container mx-auto pb-6 mb-6">
        <h1 className="text-3xl font-light">Sådan fungere Fixer</h1>
        <div className="flex flex-row flex-wrap justify-around">
            <Card title={'Billigere end køb'} subtitle={'For både udlejer og lejer, og godt for miljøet'} icon={<GiPiggyBank size="82pt" fill="white" className="w-1/2 h-1/2" />} bgColor="bg-gray-500" />
            <Card title={'Lej i dit område!'} subtitle={'Sub Test'} icon={<BiCycling size="82pt" fill="white" className="w-1/2 h-1/2"/>} bgColor="bg-gray-500" />
            <Card title={'Tider der passer!'} subtitle={'Sub Test'} icon={<BiHappyAlt size="82pt" fill="white" className="w-1/2 h-1/2"/>} bgColor="bg-gray-500" />
            <Card title={'Godt for miljøet!'} subtitle={'Sub Test'} icon={<BiLike fill="white" className="w-1/2 h-1/2"/>} bgColor="bg-gray-500" />
        </div>

        <div className="flex flex-row flex-wrap justify-around">
            <Card title={'Alle er forsikret'} subtitle={'Så både udlejer eller lejer er sikret'} icon={<RiShieldCheckFill size="82pt" className="text-gray-100" />} bgColor="bg-green-400" />
            <Card title={'Alle er verificeret'} subtitle={'Alle udlejer og lejere skal verificeres med nem-id'} icon={<GiShatteredGlass size="82pt" className="text-gray-100" />} bgColor="bg-blue-400" />
            <Card title={'Support 24/7'} subtitle={'Support er altid på arbejde, og sikre dig den bedste oplevelse'} icon={<BsHeadset size="82pt" className="text-gray-100" />} bgColor="bg-yellow-400" />
            <Card title={'Hurtigt Svar'} subtitle={'De fleste udlejere svare indenfor 30 minutter'} icon={<MdOutlineAlarmOn size="82pt" className="text-gray-100" />} bgColor="bg-red-400" />
        </div>
      </div>  
    </section>
    )
}

