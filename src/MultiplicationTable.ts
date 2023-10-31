export type Multiplication = [number, number, number]

export class MultiplicationTable {
  spaceBetweenEquations = '  '

  public renderMultiplicationTable(start: number, end: number): string | null {
    const isValid = this.isValidInput(start, end)
    if (!isValid) {
      return null
    }
    const multiplicationTable = this.generateMultiplicationTable(start, end)
    const multiplicationTableString = this.render(multiplicationTable)
    return multiplicationTableString
  }

  private isValidInput(start: number, end: number): boolean {
    return this.isSmaller(start, end) && (this.isInRange(start, 1, 1000) && this.isInRange(end, 1, 1000))
  }

  private isSmaller(num: number, target: number): boolean {
    return num <= target
  }

  private isInRange(num: number, lowerbound: number, upperbound: number): boolean {
    return (lowerbound <= num) && (num <= upperbound)
  }

  private generateMultiplicationTable(start: number, end: number): Multiplication[][] {
    const multiplicationTable: Multiplication[][] = []
    for (let currEnd = start; currEnd <= end; currEnd++) {
      const multiplicationRow = this.generateMultiplicationRow(start, currEnd)
      multiplicationTable.push(multiplicationRow)
    }
    return multiplicationTable
  }

  private generateMultiplicationRow(start: number, end: number): Multiplication[] {
    const multiplicationRow: Multiplication[] = []
    for (let currStart = start; currStart <= end; currStart++) {
      multiplicationRow.push(this.generateMultiplicationEquation(currStart, end))
    }
    return multiplicationRow
  }

  private generateMultiplicationEquation(num1: number, num2: number): Multiplication {
    const product = num1 * num2
    return [num1, num2, product]
  }

  // private render1(multiplicationTable: Multiplication[][]){
  //   let multiplicationTableString = ''
  //   for(let i = 0; i < multiplicationTable.length; i++){
  //     let multiplicationRowString = ''
  //     for(let j = 0; j < multiplicationTable[i].length; j++){
  //       const multiplicationEquationString = multiplicationTable[i][j][0] + '*' + multiplicationTable[i][j][1] + '=' + multiplicationTable[i][j][2]
  //       multiplicationRowString += multiplicationEquationString + this.spaceBetweenEquations
  //     }
  //     multiplicationRowString = multiplicationRowString.substring(0, multiplicationRowString.lastIndexOf(this.spaceBetweenEquations)) + '\n'
  //     multiplicationTableString += multiplicationRowString
  //   }
  //   return multiplicationTableString.trim()//remove tailing newline character
  // }

  private render(multiplicationTable: Multiplication[][]): string {
    const multiplicationRowStrings = multiplicationTable.map(multiplicationRow => this.getMultiplicationRowString(multiplicationRow))
    return multiplicationRowStrings.join('\n')
  }

  private getMultiplicationRowString(multiplicationRow: Multiplication[]): string {
    const multiplicationEquationStrings = multiplicationRow.map(multiplicationEquation => this.getMultiplicationEquationString(multiplicationEquation))
    return multiplicationEquationStrings.join(this.spaceBetweenEquations)
  }

  private getMultiplicationEquationString(multiplicationEquation: Multiplication): string {
    return `${multiplicationEquation[0]}*${multiplicationEquation[1]}=${multiplicationEquation[2]}`
  }
}
