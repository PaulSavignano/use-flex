import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import useFlex, { Props } from './useFlex'


describe('useFlex', () => {
  it('should render a mapped prop to className', () => {
    const TestComponent = (props: Props) => {
      const { className, style } = useFlex(props)
      return <div className={className} style={style} data-testid="test-element" />
    }
    const { getByTestId } = render(
      <TestComponent alignItems="center" />
    )
    const testElement = getByTestId('test-element')
    expect(testElement.className).toEqual('use-flex align-items-center')
    expect(testElement).toHaveStyle(``)
  })
  it('should render a custom mapped prop to className', () => {
    const customMapping = {
      fontSize: {
        16: 'font-size-16'
      }
    }
    const TestComponent = (props: Props) => {
      const { className, style } = useFlex(props, customMapping)
      return <div className={className} style={style} data-testid="test-element" />
    }
    const { getByTestId } = render(
      <TestComponent fontSize={16} />
    )
    const testElement = getByTestId('test-element')
    expect(testElement.className).toEqual('use-flex font-size-16')
    expect(testElement).toHaveStyle(``)
  })
  it('should render a flat custom mapped prop to className', () => {
    const customMapping = {
      padding: 'padding-8'
    }
    const TestComponent = (props: Props) => {
      const { className, style } = useFlex(props, customMapping)
      return <div className={className} style={style} data-testid="test-element" />
    }
    const { getByTestId } = render(
      <TestComponent padding />
    )
    const testElement = getByTestId('test-element')
    expect(testElement.className).toEqual('use-flex padding-8')
    expect(testElement).toHaveStyle(``)
  })
  it('should render an unmapped prop as inline style', () => {
    const TestComponent = (props: Props) => {
      const { className, style } = useFlex(props)
      return <div className={className} style={style} data-testid="test-element" />
    }
    const { getByTestId } = render(
      <TestComponent fontSize={16} />
    )
    const testElement = getByTestId('test-element')
    expect(testElement.className).toEqual('use-flex')
    expect(testElement).toHaveStyle(`font-size: 16px`)
  })
  it('should render className prop if passed', () => {
    const TestComponent = (props: Props) => {
      const { className, style } = useFlex(props)
      return <div className={className} style={style} data-testid="test-element" />
    }
    const { getByTestId } = render(
      <TestComponent className="passed-class" />
    )
    const testElement = getByTestId('test-element')
    expect(testElement.className).toEqual('use-flex passed-class')
    expect(testElement).toHaveStyle(``)
  })
})