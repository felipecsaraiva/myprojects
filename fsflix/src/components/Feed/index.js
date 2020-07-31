import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';

function Feed() {
    const defaultValues = {
        data: {
            items:[],
        },
        loaded: false,
    }
    const [values,SetValues] = useState(defaultValues);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Ffeed%2F&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=50')
            .then((response) => {
                
                SetValues({
                    data: response.data,
                    loaded: true,
                })
            })
        }
        fetchData();
    }, []); 

    if (!values.loaded)
        return (
            <>
            <h1>{'Carregando...'}</h1>
            </>
        )

    return (
        <>
        {values.data.items.length > 0 && (
            <BannerMain
                videoTitle={values.data.items[0].title}
                url={values.data.items[0].link}
                image={values.data.items[0].thumbnail}
                videoDescription={values.data.items[0].description}
                download={values.data.items[0].enclosure.link}
            />
        )}

        {values.data.items.length > 0 && (
            <Carousel
                category={dadosIniciais.categorias[0]}
                dados={values.data}
            />
        )}
        </>            
    )
}

export default Feed;