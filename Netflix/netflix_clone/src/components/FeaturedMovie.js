import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {

    console.log(item)

    // trata dados da data de lançamento (vem a data completa e queremos penas o ano)
    let firstDate = new Date(item.first_air_date);

    // trata daods dos gêneros dos filmes
    let genres = [];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average * 10}%</div>
                        <div className="fetured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros:{genres.join(', ')}</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}