import { useState } from "react";
import { TextInput } from "react-native";

const [lista, setLista] = useState([]);

const adicionarItem = (nome, valor, tipo) => {
    const novoItem = { nome, valor, tipo };
    setLista([...lista, novoItem]);
};

export default function ListaBackEnd({ nome, valor, tipo }) {
    <view>
        <TextInput
            onChangeText={(texto) => setNome(texto)}
            value={nome}
            placeholder="Nome"
        />
        <TextInput
            onChangeText={(texto) => setValor(texto)}
            value={valor}
            placeholder="Valor"
        />
        <Picker
            selectedValue={tipo}
            onValueChange={(valor) => setTipo(valor)}
        >
            <Picker.Item label="Tipo 1" value="tipo1" />
            <Picker.Item label="Tipo 2" value="tipo2" />
            <Picker.Item label="Tipo 3" value="tipo3" />
        </Picker>

        <Button
            title="Adicionar"
            onPress={() => adicionarItem(nome, valor, tipo)}
        />
    </view>
}