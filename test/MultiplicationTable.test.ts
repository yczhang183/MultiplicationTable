import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  it('should return null when the start less then 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the end greater then 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1001

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the start greater then end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })
})
