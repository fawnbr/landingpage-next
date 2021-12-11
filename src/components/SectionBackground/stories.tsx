import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
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

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
