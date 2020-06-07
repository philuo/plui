import {
  computed,
  SetupContext,
} from 'vue';

const getButtonClassList = (props: ButtonProps) => computed(() => {
  const list = [];
  if (props.type) {
    list.push(`pl-button--${props.type}`);
  }
  if (props.size) {
    list.push(`pl-button--${props.size}`);
  }
  if (props.disabled) {
    list.push('is-disabled');
  }
  if (props.loading) {
    list.push('is-loading');
  }
  return list;
});

const handleClick = (context: SetupContext) => (event: Event) => context.emit('click', event);

export {
  handleClick,
  getButtonClassList,
};
