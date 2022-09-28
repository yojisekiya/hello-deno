export function totalPrice(unitPrice: number, quantity: number): number {
  return unitPrice * quantity;
}

export function squareNumber(n: number) {
  return n * n;
}

export const rect = {
  length: 5,
  width: 4,
  area(): void {
    console.log(this.length * this.width);
  }
};