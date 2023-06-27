import React, { useState } from 'react';
import './Filtre.css'

const products = [
    {
        id : 1,
        Nom : "ChocoFruit",
        Categorie : "Fruit",
        Prix : "2",
        Note : "4.5",
        Photo : require ('../../../images/produit1.jpg')
    },
    
    {

        id : 2,
        Nom : "Coeur Caram",
        Categorie : "Caramel",
        Prix : "3",
        Note : "4.5",
        Photo : require ('../../../images/produit2.jpg')
    }, 
    {

        id : 3,
        Nom : "Coeur liqueur",
        Categorie : "Liqueur",
        Prix : "1",
        Note : "4.5",
        Photo : require ('../../../images/produit3.jpg')
    }, 
    {

        id : 4,
        Nom : "Coeur blanc",
        Categorie : "Chocolat blanc",
        Prix : "2",
        Note : "4.5",
        Photo : require ('../../../images/produit4.jpg')
    }, 
    {

        id : 5,
        Nom : "Noisette enrobée",
        Categorie : "Noix/Noisette",
        Prix : "3",
        Note : "4.5",
        Photo : require ('../../../images/produit5.jpg')
    }, 
    {

        id : 6,
        Nom : "Black & White",
        Categorie : "Chocolat blanc",
        Prix : "3",
        Note : "4.5",
        Photo : require ('../../../images/produit6.jpg')
        
    }, 
    {

        id : 7,
        Nom : "Liqu'eur ouvert",
        Categorie : "Liqueur",
        Prix : "2",
        Note : "4.5",
        Photo : require ('../../../images/produit7.jpg')
    }, 
    {

        id : 8,
        Nom : "Love & Chocolat",
        Categorie : "Chocolat noir",
        Prix : "5",
        Note : "4.5",
        Photo : require ('../../../images/produit8.jpg')
    }, 
    {

        id : 9,
        Nom : "Les pepites de lait",
        Categorie: "Chocolat au lait",
        Prix : "1",
        Note : "4.5",
        Photo : require ('../../../images/produit9.jpg')
    }, 
    {

        id : 10,
        Nom : "Palet caram",
        Categorie : "Caramel",
        Prix : "2",
        Note : "4.5",
        Photo : require ('../../../images/produit10.jpg')
    },
]

const ProductFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Tous']);
  const [selectedPriceMin, setSelectedPriceMin] = useState('');
  const [selectedPriceMax, setSelectedPriceMax] = useState('');
  const [selectedNoteMin, setSelectedNoteMin] = useState('');
  const [selectedNoteMax, setSelectedNoteMax] = useState('');

  const handleCategoryChange = (Categorie) => {
    if (Categorie === 'Tous') {
      setSelectedCategories(['Tous']);
    } else {
      const index = selectedCategories.indexOf('Tous');
      if (index !== -1) {
        setSelectedCategories([...selectedCategories.slice(0, index), ...selectedCategories.slice(index + 1)]);
      } else {
        const isSelected = selectedCategories.includes(Categorie);
        if (isSelected) {
          setSelectedCategories(selectedCategories.filter((cat) => cat !== Categorie));
        } else {
          setSelectedCategories([...selectedCategories, Categorie]);
        }
      }
    }
  };

  const handlePriceMinChange = (e) => {
    setSelectedPriceMin(e.target.value);
  };
  
  const handlePriceMaxChange = (e) => {
    setSelectedPriceMax(e.target.value);
  };
  
  const handleNoteMinChange = (e) => {
    setSelectedNoteMin(e.target.value);
  };
  
  const handleNoteMaxChange = (e) => {
    setSelectedNoteMax(e.target.value);
  };
  
  const filteredProducts = products.filter((product) => {
    const categoryFilter = selectedCategories.includes('Tous') || selectedCategories.includes(product.Categorie);
    const priceFilter =
    (selectedPriceMin === '' || product.Prix >= parseInt(selectedPriceMin)) &&
    (selectedPriceMax === '' || product.Prix <= parseInt(selectedPriceMax));
    const noteFilter =
    (selectedNoteMin === '' || product.Note >= parseInt(selectedNoteMin)) &&
    (selectedNoteMax === '' || product.Note <= parseInt(selectedNoteMax));
    return categoryFilter && priceFilter && noteFilter;
    
  });

  return (
    <div>
      <h1>Boutique</h1>
      <div className='Boutique'>
        <div className='Filtre'>
          <h2>Filtre</h2>
          <div className='Options'>
            <div className='Categories'>
              <h5>Catégories</h5>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Tous')}
                  onChange={() => handleCategoryChange('Tous')}
                />
                Tous
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Chocolat blanc')}
                  onChange={() => handleCategoryChange('Chocolat blanc')}
                />
                Chocolat blanc
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Chocolat au lait')}
                  onChange={() => handleCategoryChange('Chocolat au lait')}
                />
                Chocolat au lait
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Chocolat noir')}
                  onChange={() => handleCategoryChange('Chocolat noir')}
                />
                Chocolat noir
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Noix/Noisette')}
                  onChange={() => handleCategoryChange('Noix/Noisette')}
                />
                Noix/Noisette
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Fruit')}
                  onChange={() => handleCategoryChange('Fruit')}
                />
                Fruit
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Caramel')}
                  onChange={() => handleCategoryChange('Caramel')}
                />
                Caramel
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Liqueur')}
                  onChange={() => handleCategoryChange('Liqueur')}
                />
                Liqueur
              </label>
            </div>
          </div>
          <div className='Prix'>
            <h5>Prix</h5>
            <div className='PrixMin'>
              <h6>Prix min</h6>
              <select value={selectedPriceMin} onChange={handlePriceMinChange}>
                <option value="1">1€</option>
                <option value="2">2€</option>
                <option value="3">3€</option>
                <option value="4">4€</option>
                <option value="5">5€</option>
              </select>
            </div>
            <div className='PrixMax'>
            <h6>Prix max</h6>
              <select value={selectedPriceMax} onChange={handlePriceMaxChange}>
                <option value="5">5€</option>
                <option value="4">4€</option>
                <option value="3">3€</option>
                <option value="2">2€</option>
                <option value="1">1€</option>
              </select>
            </div>
          </div>
          <div className='Note'>
            <h5>Notes</h5>
            <div className='NoteMin'>
              <h6>Note min</h6>
              <select value={selectedNoteMin} onChange={handleNoteMinChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='NoteMax'>
              <h6>Note max</h6>
              <select value={selectedNoteMax} onChange={handleNoteMaxChange}>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </div>
        <div className='Produits'>
          {filteredProducts.map((product) => (
            <ul>
              <li key={product.id}><img src={product.Photo} alt={product.Nom} /></li>
              <li>{product.Nom}</li>
              <li>{product.Prix} €</li>
              <li>Note : {product.Note}</li>
              <button>Ajouter au panier</button>
            </ul>
          ))}
        </div>
      </div>
    </div>
 );
};
export default ProductFilter;
