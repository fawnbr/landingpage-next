import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum in
          placeat adipisci nesciunt sequi velit est incidunt, totam magnam
          quibusdam eius optio repellat odit porro maxime. Labore, magni! At,
          maxime!
        </p>
      </div>
    ),
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
