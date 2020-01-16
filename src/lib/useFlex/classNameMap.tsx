
interface Mapping {
  [key: string]: any | object
}

export interface ClassNameMap {
  alignItems: Mapping,
  alignSelf: Mapping,
  flexFlow: Mapping,
  justifyContent: Mapping,
  justifySelf: Mapping,
  [key: string]: Mapping,
}

const classNameMap: ClassNameMap = {
  alignItems: {
    center: 'align-items-center',
    'flex-start': 'align-items-flex-start',
    'flex-end': 'align-items-flex-end',
  },
  alignSelf: {
    stretch: 'align-self-stretch',
    center: 'align-self-center',
    start: 'align-self-start',
    end: 'align-self-end',
    'flex-start': 'align-self-flex-start',
    'flex-end': 'align-self-flex-end',
  },
  flexFlow: {
    'column wrap': 'flex-flow-column-wrap-reverse',
    'row wrap': 'flex-flow-row-wrap',
    'row wrap-reverse': 'flex-flow-row-wrap-reverse',
    column: 'flex-flow-column',
    row: 'flex-flow-row',
  },
  justifyContent: {
    center: 'justify-content-center',
    'flex-start': 'justify-content-flex-start',
    'flex-end': 'justify-content-flex-end',
    'space-around': 'justify-content-space-around',
    'space-between': 'justify-content-space-between',
  },
  justifySelf: {
    stretch: 'justify-self-stretch',
    center: 'justify-self-center',
    start: 'justify-self-start',
    end: 'justify-self-end',
    'flex-start': 'justify-self-flex-start',
    'flex-end': 'justify-self-flex-end',
  },
}

export default classNameMap