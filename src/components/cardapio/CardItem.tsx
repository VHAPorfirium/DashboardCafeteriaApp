import { ICardItemProps } from '../../types/cafeteria.types';
import BadgeStatus from '../ui/BadgeStatus';

const CardItem = ({ itemPedido, aoAlternarSelecao }: ICardItemProps) => {
  const { item, selecionado } = itemPedido;

  const formatarPreco = (valor: number): string =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleClick = () => {
    if (item.disponivel) {
      aoAlternarSelecao(item.id);
    }
  };

  return (
    <div
      className={`card-item-cardapio card h-100 ${selecionado ? 'card-selecionado' : ''} ${!item.disponivel ? 'card-indisponivel' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={item.disponivel ? 0 : -1}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`${item.nome} — ${formatarPreco(item.preco)}${selecionado ? ' (selecionado)' : ''}${!item.disponivel ? ' (indisponível)' : ''}`}
    >
      <div className="card-body d-flex flex-column align-items-start p-3">
        {/* Emoji grande */}
        <div className="card-emoji mb-1">{item.emoji}</div>

        {/* Nome */}
        <h6 className="card-nome">{item.nome}</h6>

        {/* Descrição */}
        <p className="card-descricao flex-grow-1">{item.descricao}</p>

        {/* Preço e badge */}
        <div className="d-flex justify-content-between align-items-center w-100 mt-2">
          <span className="card-preco">{formatarPreco(item.preco)}</span>
          {!item.disponivel ? (
            <span className="badge-indisponivel">Indisponível</span>
          ) : selecionado ? (
            <BadgeStatus selecionado={selecionado} />
          ) : (
            <span className="badge-disponivel">Toque para adicionar</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
