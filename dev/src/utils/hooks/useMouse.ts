import { ref, onMounted, onUnmounted } from 'vue';

const useMouse = () => {
    const x = ref(0);
    const y = ref(0);

    const update = (event: MouseEvent) => {
        x.value = event.pageX;
        y.value = event.pageY;
    };

    onMounted(() => {
        addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        removeEventListener('mousemove', update);
    });

    return { x, y };
};

export default useMouse;
