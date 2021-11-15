import './style.css'

const Book = ({author,title,genre,published, description}) => {

  function getRandomArbitrary(min=9.5, max=127.6) {
    return Math.random() * (max - min) + min;
  }
  return(
    <div className="book">
      <div className="capa">
        <h2 className="author">{author}</h2>
        <h1 className="title">{title}</h1>
        <h3 className="genre">{genre}</h3>  
        <h4 className="published">{published.split('-')[0]}</h4>
      </div>
      <div className="description">
        <h1 className="title">{title}</h1>
        <h2 className="author">Por: {author}</h2>
        <div className="book_single_info-rating stars_5"></div>
        <h3>Sinopse</h3>
        <p>{description}</p>
        <span>Versão Ebook <b> R$ {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(getRandomArbitrary())}</b></span>

      </div>
    </div>
  )
}
export default Book;