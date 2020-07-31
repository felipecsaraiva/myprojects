import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import './feed.css';

function Feed(
    {url,isBanner,color}
) {
    const defaultValues = {
        data: {
            items:[],
        },
        loaded: false,
    }
    const [values,SetValues] = useState(defaultValues);
    
    useEffect(() => {
        async function fetchData() {
            await axios.get(url)
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
            <div className="load">
                <h1>{'Carregando...'}</h1>
            </div>
        )

    return (
        <>
        {isBanner & values.data.items.length > 0 && (
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
                dados={values.data}
                color={color}
            />
        )}
        </>            
    )
}

export default Feed;