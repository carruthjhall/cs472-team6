export const Tabs = {
    ComponentOptionsTab: 'ComponentOptionsTab',
    ComponentsListTab: 'ComponentsListTab',
    PageOptionsTab: 'PageOptionsTab'
}

export const Gradients = {
    default: 'from-grad1 via-grad2 via-grad3 to-grad4',
    'green-blue': 'from-green-400 to-blue-500'
}

export const Direction = {
    UP: 'up',
    DOWN: 'down'
}

export function toJSON(object) {
  return JSON.stringify(
    object,
    (key, value) => {
      if (value instanceof Map) {
        return Object.fromEntries(value.entries());
      } else if (value instanceof Set) {
        return [...value];
      }

      return value;
    },
    2
  );
}