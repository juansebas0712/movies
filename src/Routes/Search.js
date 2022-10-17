import React from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../Header";
import { MovieCard } from "../MovieCard";
import { api } from "../MovieContext";

function Search(props) {
    const [searchResults, setSearchResults] = React.useState([]);
    const [pageNum, setPageNum] = React.useState(1);
    let [searchParams] = useSearchParams();

    const observer = new IntersectionObserver((el) => {
        el.forEach(card => {
        
            if (card.isIntersecting) {
                const source = card.target.getAttribute('data-image');
                card.target.style.backgroundImage = `url(${source}), url('https://via.placeholder.com/200x300?text=Missing Image')`;

                if ( card.target.dataset.lastElement === 'true' ) {
                    setPageNum(prev => prev + 1);
                }
            }
        });
    });

    React.useEffect(() => {
        api('/search/movie', {
            params: {
                query: searchParams.get('query'),
                page: pageNum
            }
        })
        .then(res => {
            setSearchResults(loadedMovies => {
                return [...loadedMovies, ...res.data.results]
            })
        })
    }, [pageNum]);

    return(
        <>
            <Header {...props} />
            <section className="movies-section movies-category">
                <h2 className="section-title">
                    {searchParams.get('query') && (`Search Results for: ${searchParams.get('query')}`)}
                    {!searchParams.get('query') && ('Loading Search Results...')}                    
                </h2>

                {/* {!searchResults && ('No Search Results Found.')} */}

                {console.log('search results: ', searchResults)}
                {searchResults && searchResults.map((movie, i) => {
                    const lastElement = searchResults.length === i + 1;

                    return <MovieCard key={movie.id} movie={movie} observer={observer} lastElement={lastElement} likedMovies={props.likedMovies} setLikedMovies={props.setLikedMovies} />
                })}
            </section>
        </>
    );
}

export {Search};