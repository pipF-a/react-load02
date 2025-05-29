import { FaUsb } from "react-icons/fa6";
import { useEffect, useState } from "react"
import type { PokemonResponse } from "../types/pokemon";


export const TechQuotes = () => {

  const [pokemonName,setPokemonName] = useState<string>('');
  const [pokemonImage,setPokemonImage] = useState<string>('');
  const [isLoading,setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true); 
    
    try {
      const randomId = Math.floor(Math.random() * 1025) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      await new Promise(resolve => setTimeout(resolve, 500));
      const data:PokemonResponse = await res.json();
      setPokemonName(data.name)
      const imageUrl = data.sprites.front_default;
      setPokemonImage(imageUrl);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); 
    }
  }

  useEffect(()=> {
    fetchData();
  },[])

  return (
    <>
      <button onClick={fetchData} className="bg-black text-white hover:bg-gray-700 flex mx-auto rounded-xl py-4 px-8"><FaUsb className="w-6 h-6 mr-2 fill-white"/>Generate</button>
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-blue-800 to-slate-700 shadow-md space-y-12 rounded-xl w-[720px] min-h-96 p-8">
          <div className="bg-blue-100 text-3xl h-16 w-16 rounded-full flex justify-center items-center">💬</div>
          <div>
            {isLoading ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl text-white">ポケモンを読み込み中...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <img className="w-30 h-30" src={pokemonImage} alt={`${pokemonName}の画像`} width={120} height={120} />
                <p className="text-white">{pokemonName}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
    
  )
}
