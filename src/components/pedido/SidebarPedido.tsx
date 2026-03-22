import { ISidebarPedidoProps, IItemPedido } from '../../types/cafeteria.types';

const SidebarPedido = ({ itensPedido, dashboard, aoLimparPedido }: ISidebarPedidoProps) => {
  const itensSelecionados: IItemPedido[] = itensPedido.filter((ip) => ip.selecionado);

  const formatarPreco = (valor: number): string =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <aside aria-label="Resumo do pedido" className="sidebar-pedido">
      {/* Cabeçalho */}
      <div className="sidebar-titulo d-flex justify-content-between align-items-center">
        <span>🧾 Meu Pedido</span>
        {itensSelecionados.length > 0 && (
          <button className="btn-limpar-pedido btn" onClick={aoLimparPedido} title="Limpar pedido">
            Limpar
          </button>
        )}
      </div>

      {/* Lista de itens selecionados */}
      {itensSelecionados.length === 0 ? (
        <div className="pedido-vazio">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍽️</div>
          Nenhum item selecionado.
          <br />
          Toque nos cards para adicionar.
        </div>
      ) : (
        <>
          <div>
            {itensSelecionados.map((ip) => (
              <div key={ip.item.id} className="item-pedido-linha">
                <span className="item-pedido-emoji">{ip.item.emoji}</span>
                <span className="item-pedido-nome">{ip.item.nome}</span>
                <span className="item-pedido-preco">{formatarPreco(ip.item.preco)}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="total-pedido">
            <span>Total ({dashboard.totalItens} {dashboard.totalItens === 1 ? 'item' : 'itens'})</span>
            <span>{formatarPreco(dashboard.valorTotal)}</span>
          </div>
        </>
      )}

      {/* Dica para mostrar ao garçom */}
      {itensSelecionados.length > 0 && (
        <div className="p-3 text-center" style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
          📲 Mostre esta tela ao garçom para realizar o pedido.
        </div>
      )}
    </aside>
  );
};

export default SidebarPedido;
