// ============================================================
// Contratos de dados do domínio Cafeteria
// ============================================================

export type CategoriaItem = 'bebida' | 'comida' | 'sobremesa';

export interface IItemCardapio {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: CategoriaItem;
  emoji: string;
  disponivel: boolean;
}

export interface IItemPedido {
  item: IItemCardapio;
  selecionado: boolean;
}

export interface IDashboardCafeteria {
  totalItens: number;
  totalBebidas: number;
  totalComidas: number;
  totalSobremesas: number;
  valorTotal: number;
}

// Props dos componentes
export interface ICardItemProps {
  itemPedido: IItemPedido;
  aoAlternarSelecao: (id: number) => void;
}

export interface IListaCardapioProps {
  itensPedido: IItemPedido[];
  categoriaAtiva: CategoriaItem | 'todos';
  aoAlternarSelecao: (id: number) => void;
}

export interface ISidebarPedidoProps {
  itensPedido: IItemPedido[];
  dashboard: IDashboardCafeteria;
  aoLimparPedido: () => void;
}

export interface IDashboardProps {
  dashboard: IDashboardCafeteria;
}

export interface IFiltroCategoriasProps {
  categoriaAtiva: CategoriaItem | 'todos';
  aoMudarCategoria: (categoria: CategoriaItem | 'todos') => void;
}

export interface IBadgeStatusProps {
  selecionado: boolean;
}
