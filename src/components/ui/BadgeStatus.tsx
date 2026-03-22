import { IBadgeStatusProps } from '../../types/cafeteria.types';

const BadgeStatus = ({ selecionado }: IBadgeStatusProps) => {
  if (selecionado) {
    return <span className="badge-selecionado">✓ Adicionado</span>;
  }
  return null;
};

export default BadgeStatus;
