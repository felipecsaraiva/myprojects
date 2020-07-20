import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import api from '../services/api';

const styles = StyleSheet.create({
    button: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    pedido: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC', 
        padding: 15,
    },
    texto: {
        paddingBottom: 5,
        color: '#181818', 
        fontSize: 16,
    },
    bold: {
        paddingBottom: 5,
        color: '#181818', 
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default class Detail extends Component {
    
    state = {
        loading: true,
        pedidos: [],
        message: 'Carregando informações...',
    };
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        this.setState({loading:true});
        this.setState({message:'Atualizando informações...'});
        this.setState({pedidos:[]});
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const filial = navigation.getParam('filial', 'NO-FILIAL');
        await api.get('/UPEDIDOS/'+filial+'/'+itemId)
            .then((response) => {
                // Success 🎉
                console.log(response);
                const { pedidos } = response.data;
                this.setState({pedidos});
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
                    this.loadProducts();
                    //this.setState({message:'Não foi possível se conectar ao serviço de dados. Tente novamente em alguns minutos...'});
                } else {
                    // Something happened in setting up the request and triggered an Error
                    this.setState({message:error.message});
                }
                console.log(error.config);
            })
    };

    Loading = () => {
        if (this.state.loading) {
            return (
                <View>
                    <Text>{this.state.message}</Text>
                </View>
            );
        } else {
            return null;
        }
    };

    doLiberar = () => {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const filial = navigation.getParam('filial', 'NO-FILIAL');
    
        api.put('/UPEDIDOS/'+filial+'/'+itemId)
        .then(res => {
            console.log(res.data);
            this.props.navigation.goBack();
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
                //this.setState({message:'Não foi possível se conectar ao serviço de dados'});
                this.doLiberar();
            } else {
                // Something happened in setting up the request and triggered an Error
                this.setState({message:error.message});
            }
            console.log(error.config);
        })
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const filial = navigation.getParam('filial', 'NO-FILIAL');
     
        return (
            <ScrollView> 
                <View style={styles.pedido}> 
                    <Text style={styles.bold}>Pedido: {itemId}</Text>
                    <Text style={styles.bold}>Filial: {filial}</Text>
                    {this.Loading()}
                    {console.log(this.state.pedidos)}
                    {this.state.pedidos.map(product => {
                        return (
                            <View key={product.C5_NUM}>
                                <Text style={styles.texto}>Cliente: {product.A1_NOME}</Text>
                                <Text style={styles.texto}>Produto: {product.C6_PRODUTO} - {product.B1_DESC}</Text>
                                <Text style={styles.texto}>Quantidade: {product.C6_QTDVEN}</Text>
                                <Text style={styles.texto}>Preço Tabela: R${product.C6_PRUNIT}</Text>
                                <Text style={styles.texto}>Preço de Venda: R${product.C6_PRCVEN}</Text>
                                <Text style={styles.texto}>Per. Desconto: {product.C6_DESCONT}%</Text>
                                <Text style={styles.texto}>Vl. Desconto: R${product.C6_VALDESC}</Text>
                                <Text style={styles.texto}>Vl. Total: R${product.C6_VALOR}</Text>
                            </View>
                        )
                    })}
                    <Button 
                        title="Liberar"
                        onPress={() => this.doLiberar()
                        }
                    />
                </View>
            </ScrollView>
        );
    }
}