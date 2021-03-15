const TEST = true;

export function testProp(id) {
  return TEST ? { accessible: true, accessibilityLabel: id } : null;
}