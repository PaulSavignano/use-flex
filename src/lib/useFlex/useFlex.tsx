import { useMemo } from 'react'


import classNameMap from './classNameMap'

export interface Props {
  [key: string]: any | object
}

export interface ClassesAndStyles {
  className: string,
  style: { [key: string]: any }
}


function useFlex(props: Props, customMapping: Props = {}) {
  return useMemo(() => {
    const classesAndStyles = Object.keys(props)
      .reduce((a: Props, v: string) => {
        const className = classNameMap[v]
        const prop = props[v]
        const custom = customMapping[v]
        if (className && className[prop]) {
          a.className = a.className + ' ' + className[prop]
        } else if (customMapping && custom) {
          if (custom[prop]) {
            a.className = a.className + ' ' + custom[prop]
          } else {
            a.className = a.className + ' ' + custom
          }
        } else {
          a.style[v] = props[v]
        }
        return a
      }, {
        className: props.className ? `use-flex ${props.className}` : 'use-flex',
        style: {}
      })
    return classesAndStyles as ClassesAndStyles
  }, [customMapping, props])
}

export default useFlex