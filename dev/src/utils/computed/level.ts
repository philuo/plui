import { computed } from 'vue';

const getLevel = (props: Level) => computed(() => props.level);

const getType = (props: Type) => computed(() => props.type);

export {
  getLevel,
  getType,
};
