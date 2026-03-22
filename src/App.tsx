import { useState, useMemo } from 'react';
import { IItemPedido, IDashboardCafeteria, CategoriaItem } from './types/cafeteria.types';
import { cardapioMock } from './data/cardapioMock';

import HeaderCafeteria from './components/layout/HeaderCafeteria';
import FooterCafeteria from './components/layout/FooterCafeteria';
import DashboardCafeteria from './components/dashboard/DashboardCafeteria';
import SidebarPedido from './components/pedido/SidebarPedido';
import CardItem from './components/cardapio/CardItem';
import FiltroCategorias from './components/cardapio/FiltroCategorias';

import './styles/cafeteria.css';

const estadoInicial: IItemPedido[] = cardapioMock.map((item) => ({
  item,
  selecionado: false,
}));

function App() {
  const [itensPedido, setItensPedido] = useState<IItemPedido[]>(estadoInicial);
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaItem | 'todos'>('todos');

  const handleAlternarSelecao = (id: number): void => {
    setItensPedido((prev) =>
      prev.map((ip) =>
        ip.item.id === id ? { ...ip, selecionado: !ip.selecionado } : ip
      )
    );
  };

  const handleLimparPedido = (): void => {
    setItensPedido((prev) => prev.map((ip) => ({ ...ip, selecionado: false })));
  };

  const dashboard: IDashboardCafeteria = useMemo(() => {
    const selecionados = itensPedido.filter((ip) => ip.selecionado);
    return {
      totalItens: selecionados.length,
      totalBebidas: selecionados.filter((ip) => ip.item.categoria === 'bebida').length,
      totalComidas: selecionados.filter((ip) => ip.item.categoria === 'comida').length,
      totalSobremesas: selecionados.filter((ip) => ip.item.categoria === 'sobremesa').length,
      valorTotal: selecionados.reduce((acc, ip) => acc + ip.item.preco, 0),
    };
  }, [itensPedido]);

  const itensFiltrados: IItemPedido[] =
    categoriaAtiva === 'todos'
      ? itensPedido
      : itensPedido.filter((ip) => ip.item.categoria === categoriaAtiva);

  return (
    <>
      <HeaderCafeteria />
      <main className="container py-4">
        <DashboardCafeteria dashboard={dashboard} />
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <SidebarPedido
              itensPedido={itensPedido}
              dashboard={dashboard}
              aoLimparPedido={handleLimparPedido}
            />
          </div>
          <div className="col-12 col-md-9">
            <section aria-label="Cardapio completo">
              <h2 className="secao-titulo">Cardapio</h2>
              <FiltroCategorias
                categoriaAtiva={categoriaAtiva}
                aoMudarCategoria={setCategoriaAtiva}
              />
              {itensFiltrados.length === 0 ? (
                <p className="text-muted fst-italic">Nenhum item nesta categoria.</p>
              ) : (
                <div className="row g-3">
                  {itensFiltrados.map((itemPedido) => (
                    <div key={itemPedido.item.id} className="col-12 col-sm-6 col-xl-4">
                      <CardItem
                        itemPedido={itemPedido}
                        aoAlternarSelecao={handleAlternarSelecao}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <FooterCafeteria />
    </>
  );
}

export default App;
