import { CategoriaItem, IFiltroCategoriasProps } from '../../types/cafeteria.types';

type OpcaoFiltro = {
  valor: CategoriaItem | 'todos';
  rotulo: string;
  emoji: string;
};

const opcoesFiltro: OpcaoFiltro[] = [
  { valor: 'todos', rotulo: 'Todos', emoji: '🍽️' },
  { valor: 'bebida', rotulo: 'Bebidas', emoji: '☕' },
  { valor: 'comida', rotulo: 'Comidas', emoji: '🥐' },
  { valor: 'sobremesa', rotulo: 'Sobremesas', emoji: '🍰' },
];

const FiltroCategorias = ({ categoriaAtiva, aoMudarCategoria }: IFiltroCategoriasProps) => {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filtrar por categoria">
      {opcoesFiltro.map(({ valor, rotulo, emoji }) => (
        <button
          key={valor}
          className={`filtro-categoria-btn btn btn-sm ${categoriaAtiva === valor ? 'ativo' : ''}`}
          onClick={() => aoMudarCategoria(valor)}
          aria-pressed={categoriaAtiva === valor}
        >
          {emoji} {rotulo}
        </button>
      ))}
    </div>
  );
};

export default FiltroCategorias;
