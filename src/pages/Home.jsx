import Menu from "../menu/Menu";
import useFetch from "../hooks/useFetch";
import "./home.scss";

function Home(){
    const url = "https://fakestoreapi.com/products?limit=5";
    const {data, isPending, error } = useFetch(url)
    console.log(data)

    if (isPending) {
        return <div>Chargement...</div>;
      }
    
      if (error) {
        return <div>Erreur: {error}</div>;
      }
    
      if (!Array.isArray(data)) {
        return <div>Les données ne sont pas disponibles ou mal formatées.</div>;
      }

     return (
    <div>
      <p>home</p>
      <Menu />
      <div className="wrapper-home">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="card">
              <p>{item.title}</p>
              <img className="img-home"src={item.image} alt={item.title} />
              <p>{item.description}</p>
              <p>Prix: ${item.price}</p>
            </div>   
          ))
        ) : (
          <p>Aucun produit disponible</p>
        )}
      </div>
    </div>
    )
}

export default Home