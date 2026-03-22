import { IListaCardapioProps, IItemPedido } from '../../types/cafeteria.types';
import CardItem from './CardItem';
import FiltroCategorias from './FiltroCategorias';

const ListaCardapio = ({ itensPedido, categoriaAtiva, aoAlternarSelecao }: IListaCardapioProps) => {
  const itensFiltrados: IItemPedido[] =
    categoriaAtiva === 'todos'
      ? itensPedido
      : itensPedido.filter((ip) => ip.item.categoria === categoriaAtiva);

  return (
    <section aria-label="Cardápio">
      <FiltroCategorias categoriaAtiva={categoriaAtiva} aoMudarCategoria={() => {}} />

      {itensFiltrados.length === 0 ? (
        <p className="text-muted fst-italic">Nenhum item nesta categoria.</p>
      ) : (
        <div className="row g-3">
          {itensFiltrados.map((itemPedido) => (
            <div key={itemPedido.item.id} className="col-12 col-sm-6 col-xl-4">
              <CardItem itemPedido={itemPedido} aoAlternarSelecao={aoAlternarSelecao} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListaCardapio;
