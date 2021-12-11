import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridImageElementProps = {
  altText: string;
  image: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  grid: GridImageElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} as="h2" size="huge" uppercase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.altText}>
              <Styled.Image src={el.image} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
