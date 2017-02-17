const TOLERANCE = 3;

export default class Element {
  constructor(data) {
    this.text = data.str;
    this.width = data.width;
    this.x = data.transform[4];
    this.y = data.transform[5];
  }

  getText() {
    return this.text;
  }

  getX() {
    return this.x;
  }

  getWidth() {
    return this.width;
  }

  static orderElements(elements) {
    const sorted = elements.sort((a, b) => {
      if (b.y > a.y - TOLERANCE && b.y < a.y + TOLERANCE) {
        return a.x - b.x;
      }
      return b.y - a.y;
    });

    let prevY;
    let row = [];
    const rows = [];
    for (const element of sorted) {
      if (prevY && element.y < prevY - TOLERANCE) {
        rows.push(row);
        row = [];
      }
      row.push(element);
      prevY = element.y;
    }
    rows.push(row);
    return rows;
  }
}
