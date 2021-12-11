import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColumns, GridTwoColumnsProps } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: { mock },
} as Meta;

export const Template: Story<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
