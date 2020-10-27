export function removeLastItem(array: any[]): any[] {
  array.pop()
  return array
}

export function removeItemById(array: any[], id: number): any[] {
  return array.filter(item => item.id !== id)
}
