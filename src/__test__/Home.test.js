import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native'
// importando o componente que sera testado
import Home from '../pages/home';

//importando a função que sera testada (neste caso, removeItem)
import { removeItem } from '../components/AsyncStorage';

// criando funções falsas para simular a navegação e o push
const mockNavigate = jest.fn();
const mockPush = jest.fn()

//jest.mock("descricao", () => ({}))

// substituindo o comportamento real do useNavigation
jest.mock("@react-Navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    push: mockPush
  })
}))

// substituindo a função
jest.mock("../components/AsyncStorage.js", () => ({
  removeItem: jest.fn()
}))

// describe -> Agrupa todos os testes
describe("Test Home Screen", () => {

  // beneforeEach -> Executa antes de cada teste, neste casp limpa  o historico de chamadas dos mockPush
  beforeEach(() => {
    mockNavigate.mockClear();
    mockPush.mockClear();
    // removeItem.mockClear();
  })

  it("Renderiza o titulo corretamente!", () => {
    const { getByText } = render(<Home />)
    expect(getByText("BEM VINDO (A)!")).toBeTruthy()

  })

  it("Navega para filmes ao clicar no botão", () => {
    const { getByText } = render(<Home />)
    const btn = getByText("Ver galeria de filmes")

    fireEvent.press(btn)

    expect(mockNavigate).toHaveBeenCalledWith("Filmes")
  })

  it("Chamar removeItem e navegar para a tela de Login", async () => {
    const { getByText } = render(<Home />)
    const bntSair = getByText("Sair")

    fireEvent.press(bntSair)

    await waitFor(() => {
      expect(removeItem).toHaveBeenCalledWith("login");
      expect(mockPush).toHaveBeenCalledWith("Login")
    })
  })
})
