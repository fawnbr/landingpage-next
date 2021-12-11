import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  image?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  image = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {!!image && <img src={image} alt={text} />}
        {!image && text}
      </Styled.Container>
    </Heading>
  );
};
