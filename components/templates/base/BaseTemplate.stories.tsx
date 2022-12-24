import { ComponentMeta, ComponentStory } from '@storybook/react';
import vitestResults from '../../../unit-test-results.json';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    vitest: {
      testFile: 'BaseTemplate.test.tsx',
      testResults: vitestResults
    }
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...mockBaseTemplateProps.base
};
