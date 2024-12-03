import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
        setIsPending(true)
        try {
            const response = await fetch(url)
            const json = await response.json() 
            setIsPending(false)
            setData(json)
        } catch(error){
            setError(`${error} could not fetch data`)
            setIsPending(false)
        }  
      }
      fetchData();
    }, [url]) 
    return {data, isPending, error} 
}

export default useFetch
/* on lance une fction async pour recevoir les données
    on reçoit la reponse en json
    on met à jour avec la fonction setter les data 
    on appelle la fonction
    tableau de dépendances
    la fonction useFetch renvoie des datas qu'on aura reçu dans le useeffect
    on crée un état isPending pour attendre les données en ajoutant par ex un loader
    on crée une gestion des erreurs en cas de non reception des datas
*/    

