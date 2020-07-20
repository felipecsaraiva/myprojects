import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    button: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    pedido: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#FCFCFC', 
        padding: 15,
        color: '#181818', 
    }, 
    texto: {
        paddingBottom: 5,
    },
    alerta: { 
        margin: 5,
        borderWidth: 1, 
        backgroundColor: '#FCFCFC',
        borderColor: '#F0F0F0',
        fontSize: 16,
        padding: 15,
        color: '#181818',
        textAlign: 'center', 
    },
    version: {
        fontSize: 9,
        paddingRight: 8,        
        color: '#CCCCCC',
        textAlign: 'right',
    }
});

export default class Main extends Component {
    static navigationOptions = {
        title: 'Rede DSN - Pedidos de Venda',
        headerStyle: {
            backgroundColor: '#3366CC',
          }, 
          headerTintColor: '#fff',
    };

    state = {
        loading: true,
        pedidos: [],
        message: 'Carregando informações...',
        count: 0,
    };

    handleOnNavigateBack = () => {
        this.setState({
            loading: true,
            count: 0,
        })
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        this.setState({loading:true});
        this.setState({message:'Atualizando informações...'});
        this.setState({pedidos:[]});
        await api.get('/UPEDIDOS')
            .then((response) => {
                // Success 🎉
                console.log(response);
                const { pedidos } = response.data;
                this.setState({pedidos});
                this.setState({loading:false});
                this.setState({count:0});
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
                    this.setState({count:this.state.count+1});
                    this.loadProducts(); 
                    
                    if (this.state.count > 3) {
                        //this.setState({count:0});
                        this.setState({message:'Não foi possível se conectar ao serviço de dados. Tente novamente em alguns minutos...'});
                    }
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
                    <Text style={styles.alerta}>{this.state.message}</Text>
                </View>
            );
        } else {
            return null; 
        }
    };

    render() {
        return (
            <ScrollView>
                <View>
                    
                    <Button
                        title="Atualizar"
                        onPress={() => this.loadProducts()}
                    />
                    {this.Loading()}
                    {this.state.pedidos.map(product => {
                        return (
                            <View style={styles.pedido} key={product.C5_NUM}>
                            <Text style={styles.texto}>Pedido: {product.C5_NUM}</Text>
                            <Button 
                                title="Detalhes"
                                onPress={() => this.props.navigation.navigate('Details', {
                                    itemId: product.C5_NUM,
                                    filial: product.C5_FILIAL,
                                    onNavigateBack: this.handleOnNavigateBack()
                                })}
                            />
                            </View> 
                        )
                    })}
                    <Text style={styles.version}>v1.2 - 26/09/2019</Text>
                </View>
            </ScrollView>
        );
    }
}