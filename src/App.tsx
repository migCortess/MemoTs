
import { Dashboard } from './components/Dashboard/Dashboard'
import valor1 from './assets/valor1.png'
import valor2 from './assets/valor2.png'
import valor3 from './assets/valor3.png'
import valor4 from './assets/valor4.png'
import valor5 from './assets/valor5.png'
import { useEffect, useState } from 'react'


const FeatureList = [
  valor1,
  valor2,
  valor3,
  valor4,
  valor5
]

interface MemoBlock {
  index:number,
  feature:string,
  flipped:boolean;
}

function App() {

  const [memoBlocksSorted,setMemoBlocksSorted] = useState([]);
  const [animations, setAnimations] = useState(false);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState<MemoBlock | null>(null);

  useEffect(() => {
    const shuffleList = ShuffleBlocks([...FeatureList,...FeatureList]);
    setMemoBlocksSorted(shuffleList.map((feature:any,i:number) => (
      {
      index:i,
      feature,
      flipped:false
      }
  )));
  }, [])
  
  const ShuffleBlocks = (FeatureList:any) => {
    for(let i = FeatureList.length - 1; i > 0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [FeatureList[i],FeatureList[j]] = [FeatureList[j],FeatureList[i]]
      console.log(FeatureList)
    };
    return FeatureList;
  } 

  const handleMemoClick = (memoBlock:MemoBlock) => {
    const invertedMemoBlock = {...memoBlock,flipped:true}
    let memoBlocksCopy=[...memoBlocksSorted]
    memoBlocksCopy.splice(memoBlock.index,1,invertedMemoBlock as never);
    setMemoBlocksSorted(memoBlocksCopy)

    if(selectedMemoBlock===null){
      setSelectedMemoBlock(memoBlock)
    }else if(selectedMemoBlock.feature === memoBlock.feature){
      setSelectedMemoBlock(null)
    }else {
      setAnimations(true)
      setTimeout(() => {
        memoBlocksCopy.splice(memoBlock.index,1,memoBlock as never);
        memoBlocksCopy.splice(selectedMemoBlock.index,1,selectedMemoBlock as never);
        setMemoBlocksSorted(memoBlocksCopy);
        setSelectedMemoBlock(null)
        setAnimations(false)

      },1000)
    }
  }

  return (
    <div>
     <Dashboard memoBlocks={memoBlocksSorted} handleMemoClick={handleMemoClick} animations={animations}/>
    </div>
  )
}

export default App
