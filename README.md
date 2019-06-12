# React native 


## Instalando e configurando o react native.

- ````npm install -g react-native````:( esse é o cliente para gerar o projeto com react native ).
- ````react-native init <project_name>````:( esse é o comando para iniciar um projeto a pasta que será criada está em <project_name>).
- ````react-native run-<platform>````:( esse é o comando para fazer o primeiro build do projeto [ run-android ou run-ios ]).
- ````react-native start````:( esse é o para executar o react no emulador).

## Introdução a componentes.

````
import React, { Component } from 'react';

export default class <name_class> extends Component {

    ...

    render() {
        return (...)
    }
}
````

- Essa é a estrutura básica de um componente que vai extender a classe **Component** do react e com isso vai ter o método **render()** que é o responsável pela
renderização da view.
