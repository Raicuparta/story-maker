function bresenham(pointA: Point, pointB: Point): Point[] {
  const points: Point[] = [];
  const deltaX = pointB.x - pointA.x;
  const deltaY = pointB.y - pointA.y;
  const absDeltaY = Math.abs(deltaX);
  const absDeltaX = Math.abs(deltaY);
  const signX = deltaX > 0 ? 1 : -1;
  const signY = deltaY > 0 ? 1 : -1;

  let eps = 0;

  if (absDeltaY > absDeltaX) {
    for (let x = pointA.x, y = pointA.y; signX < 0 ? x >= pointB.x : x <= pointB.x; x += signX) {
      points.push({ x, y });
      eps += absDeltaX;
      // tslint:disable-next-line: no-bitwise
      if ((eps << 1) >= absDeltaY) {
        y += signY;
        eps -= absDeltaY;
      }
    }
  } else {
    for (let x = pointA.x, y = pointA.y; signY < 0 ? y >= pointB.y : y <= pointB.y; y += signY) {
      points.push({ x, y });
      eps += absDeltaY;
      // tslint:disable-next-line: no-bitwise
      if ((eps << 1) >= absDeltaX) {
        x += signX;
        eps -= absDeltaX;
      }
    }
  }
  return points;
}

export default bresenham;
