import img from './iepym.jpg'
import logo from './logo.jpg'

export default function Inicio(){
    return(
        <div className='flex justify-around lg:p-8 lg:bg-yellow-400 max-sm:relative '>
           <div><img  class="h-auto max-w-xs max-sm:max-w-[100%]  " src={img} alt="" /></div> 
            <div class="  flex items-center max-sm:absolute max-sm:h-80 "><h1 class=" max-sm:mx-14  font-bold text-5xl  max-sm:text-2xl text-center lg:bg-yellow-500  max-sm:bg-yellow-500/75"> Iglesia Evangelica Pentecostal y Misionera </h1></div>
            <div className='max-sm:hidden lg:flex'> <img  class="h-auto max-w-xs " src={logo} alt="" /></div>
             

   
        </div>
    )
}