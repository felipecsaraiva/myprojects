import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import ReactAudioPlayer from 'react-audio-player';
import './feed.css';

function Feed() {
    const defaultValues = {
        data: {
            items:[],
        },
        loaded: false,
        playing: false,
        url: '',
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

    const HandleClick = function HandleClick(e) {
        console.log(e);
    }

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
                onClick={HandleClick}
            />
        )}

        {values.playing && (
            <div className="Player">
                <ReactAudioPlayer
                    src={values.url}
                    autoPlay
                    controls
                    className="audioPlayer"
                />
            </div>
        )}
        </>            
    )
}

export default Feed;

{/*
export default class Feed extends Component {
    
    state = {
        dados: [],
        loading: true,
    };
    
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Ffeed%2F&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=50')
            .then((response) => {
                this.setState({dados:response.data});
                this.setState({loading:false});
            })
    }

    render() {
        console.log(this.state.dados);
        console.log(dadosIniciais.categorias);
        if (this.state.loading || this.state.loadingguaxa || this.state.loadsci)
            return (<div><h1>Carregando...</h1></div>);
        return (
            <>
            <BannerMain
                videoTitle={this.state.dados.items[0].title}
                url={this.state.dados.items[0].link}
                image={this.state.dados.items[0].thumbnail}
                videoDescription={this.state.dados.items[0].description}
                download={this.state.dados.items[0].enclosure.link}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
                dados={this.state.dados}
            />
            </>
        );
    }
}*/}