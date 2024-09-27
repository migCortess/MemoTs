import { MemoBlock } from "../MemoBlock/MemoBlock"
interface MemoBlock {
        index:number,
        feature:string,
        flipped:boolean;
}

interface DashboardProps{
    memoBlocks:MemoBlock[];
    handleMemoClick: (memoBlock:MemoBlock) => void;
    animations: boolean;

}

export const Dashboard = ({memoBlocks,handleMemoClick,animations}:DashboardProps) => {
  return (
    <main className="grid grid-cols-3 
					gap-2 max-w-[600px] my-5 mx-auto">
        {memoBlocks.map((block:MemoBlock,index:number)=>{
            return <MemoBlock key={`${index}_${block.feature}`} block={block} handleMemoClick={handleMemoClick} animations={animations}/>
        })}
    </main>
  )
}
