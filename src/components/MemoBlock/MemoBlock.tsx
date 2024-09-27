import MLTICover from '../../assets/BackCover.jpg'
import './MemoBlock.css'
interface MemoBlock {
    index:number,
    feature:string,
    flipped:boolean;
}

interface BlocksProps{
    block:MemoBlock;
    handleMemoClick: (memoBlock:MemoBlock) => void;
    animations: boolean;
}

export const MemoBlock = ({block,handleMemoClick,animations}:BlocksProps) => {
  return (<div
    className="cursor-pointer aspect-[1/1] w-full h-full flex justify-center items-center overflow-hidden"
    onClick={() => !block.flipped && !animations && handleMemoClick(block)}
  >
    <div
      className={`relative w-full h-full text-center transition-transform duration-500 ease-in-out ${
        block.flipped ? "rotate-y-180" : ""
      } transform-style-3d`}
    >
      {/* Parte frontal de la carta (siempre visible) */}
      <div className="absolute w-full h-full rounded-[4px] bg-[#7250ff] backface-hidden">
        <img className="max-w-full max-h-full object-cover block" src={MLTICover} alt="front" />
      </div>
  
      {/* Parte trasera de la carta (visible solo al hacer clic) */}
      <div
        className="absolute w-full h-full rounded-[4px] bg-white shadow-[5px_5px_10px_0px_rgba(0,0,0,0.5)] flex justify-center items-center text-[55px] backface-hidden rotate-y-180"
      >
        <img className="max-w-full max-h-full object-cover block" src={block.feature} alt="back" />
      </div>
    </div>
  </div>
  
  
  
  )
}
