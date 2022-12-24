import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

describe('BaseTemplate', () => {
  test('it renders the sample text', () => {
    render(
      <BaseTemplate
        sampleTextProp={mockBaseTemplateProps.base.sampleTextProp}
      ></BaseTemplate>
    );

    expect(
      screen.getByText(mockBaseTemplateProps.base.sampleTextProp)
    ).toBeDefined();
  });
});
