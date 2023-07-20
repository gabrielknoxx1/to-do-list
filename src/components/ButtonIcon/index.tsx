import { CheckSquare, PencilLine, Trash } from "@phosphor-icons/react";
import { Container } from "./styles";

export interface ButtonIconProps {
  variant: "status" | "delete" | "update";
  title: string;
  action: () => void;
}
const Icon = {
  status: <CheckSquare size={24} />,
  delete: <Trash size={24} />,
  update: <PencilLine size={24} />,
};

export const ButtonIcon = ({ variant, action, title }: ButtonIconProps) => {
  const IconButton = () => Icon[variant];
  return (
    <Container type="button" onClick={action} title={title}>
      <IconButton />
    </Container>
  );
};
