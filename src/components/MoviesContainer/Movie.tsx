import {FC} from 'react';
import {IMovie} from "../../interfaces";
import css from "./Movie.module.css"

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path} = movie;
    return (<div>
        <div className={css.Movie}>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
            <h2 className={css.h2}>{title}</h2>
        </div>
    </div>
    );
};

export {Movie};