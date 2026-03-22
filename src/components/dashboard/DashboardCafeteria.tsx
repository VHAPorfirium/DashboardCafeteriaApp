import { IDashboardProps } from '../../types/cafeteria.types';

const DashboardCafeteria = ({ dashboard }: IDashboardProps) => {
  const { totalItens, totalBebidas, totalComidas, totalSobremesas, valorTotal } = dashboard;

  const formatarPreco = (valor: number): string =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section aria-label="Dashboard do pedido" className="mb-4">
      <div className="row g-2">
        {/* Total de itens */}
        <div className="col-6 col-md-3">
          <div className="card-contador card text-white p-3" style={{ background: 'linear-gradient(135deg, #2c1a0e, #5c3317)' }}>
            <div className="contador-valor">{totalItens}</div>
            <div className="contador-label">🛒 Itens</div>
          </div>
        </div>

        {/* Bebidas */}
        <div className="col-6 col-md-3">
          <div className="card-contador card text-white p-3" style={{ background: 'linear-gradient(135deg, #1a4a6b, #2980b9)' }}>
            <div className="contador-valor">{totalBebidas}</div>
            <div className="contador-label">☕ Bebidas</div>
          </div>
        </div>

        {/* Comidas */}
        <div className="col-6 col-md-3">
          <div className="card-contador card text-white p-3" style={{ background: 'linear-gradient(135deg, #4a7c59, #27ae60)' }}>
            <div className="contador-valor">{totalComidas}</div>
            <div className="contador-label">🥐 Comidas</div>
          </div>
        </div>

        {/* Sobremesas */}
        <div className="col-6 col-md-3">
          <div className="card-contador card text-white p-3" style={{ background: 'linear-gradient(135deg, #8e44ad, #c0392b)' }}>
            <div className="contador-valor">{totalSobremesas}</div>
            <div className="contador-label">🍰 Sobremesas</div>
          </div>
        </div>
      </div>

      {/* Valor total destacado */}
      {totalItens > 0 && (
        <div
          className="mt-2 p-3 rounded-3 text-white text-center fw-bold"
          style={{ background: 'linear-gradient(90deg, #c8960c, #a0522d)', fontSize: '1.1rem', boxShadow: '0 2px 10px rgba(200,150,12,0.35)' }}
        >
          💰 Valor estimado do pedido: {formatarPreco(valorTotal)}
        </div>
      )}
    </section>
  );
};

export default DashboardCafeteria;
