import { Meta, Story } from '../../../node_modules/@storybook/react/types-6-0';
import { Base, BaseProps } from '.';
import { mockBase } from './mock';

export default {
  title: 'Base',
  component: Base,
  args: mockBase,
} as Meta;

export const Template: Story<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
