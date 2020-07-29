import React, {Component} from 'react';
import axios from 'axios';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';

export default class Feed extends Component {
    
    state = {
        dados: [],
        dadosguaxa: [],
        dadossci: [],
        loading: true,
        loadingguaxa: true,
        loadingsci: true,
    };
    
    componentDidMount() {
        this.loadData();
        this.loadDataGuaxa();
        this.loadDataSci();
    }

    loadData = async () => {
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Ffeed%2F&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=50')
            .then((response) => {
                // Success 🎉
                this.setState({dados:response.data});
                this.setState({loading:false});
            })
            .catch((error) => {
                // Error 😨
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    if (error.response.status = '500') {
                        this.setState({message:'Não existem dados a serem exibidos'});
                    }
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                    
                    if (this.state.count > 3) {
                        //this.setState({count:0});
                    }
                } else {
                    // Something happened in setting up the request and triggered an Error
                }
            })
    }

    loadDataGuaxa = async () => {
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Frpguaxa%2Ffeed%2F&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=10')
            .then((response) => {
                // Success 🎉
                this.setState({dadosguaxa:response.data});
                this.setState({loadingguaxa:false});
            })
            .catch((error) => {
                // Error 😨
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    if (error.response.status = '500') {
                        this.setState({message:'Não existem dados a serem exibidos'});
                    }
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                    
                    if (this.state.count > 3) {
                        //this.setState({count:0});
                    }
                } else {
                    // Something happened in setting up the request and triggered an Error
                }
            })
    }

    loadDataSci = async () => {
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Fscicast%2Ffeed&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=10')
            .then((response) => {
                // Success 🎉
                this.setState({dadossci:response.data});
                this.setState({loadingsi:false});
            })
            .catch((error) => {
                // Error 😨
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    if (error.response.status = '500') {
                        this.setState({message:'Não existem dados a serem exibidos'});
                    }
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                    
                    if (this.state.count > 3) {
                        //this.setState({count:0});
                    }
                } else {
                    // Something happened in setting up the request and triggered an Error
                }
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
            
            <Carousel
                category={dadosIniciais.categorias[1]}
                dados={this.state.dadosguaxa}
            />
            
            <Carousel
                category={dadosIniciais.categorias[2]}
                dados={this.state.dadossci}
            />
            </>
        );
    }
}