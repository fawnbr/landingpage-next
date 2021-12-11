import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  image: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  image,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={image} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
