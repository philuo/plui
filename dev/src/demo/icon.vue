<template>
    <div class="demo-layout">
        <div v-for="(item, index) in iconArr" class="icon-container" :key="'icon' + item + index">
            <span>{{ item }}</span>
            <pl-icon :name="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'demo-icon',
    setup() {
        const iconArr = ref([
            'refresh_left',
            'refresh_right',
            'setting',
            'more_outline',
            'view',
            'loading',
            'refresh',
            'rank',
            'sort',
            'delete',
            'minus',
            'plus',
            'check',
            'close',
            'd_arrow_right',
            'd_arrow_left',
            'arrow_left',
            'arrow_down',
            'arrow_right',
            'arrow_up',
            'user',
            'unlock',
            'lock',
            'top',
            'top_right',
            'top_left',
            'right',
            'back',
            'bottom',
            'bottom_right',
            'bottom_left',
            'moon',
            'sunny',
            'delete_location',
            'add_location',
            'location_information',
            'location_outline',
            'star_off',
            'copy_document',
            'full_screen',
            'time',
            'circle_check',
            'remove_outline',
            'circle_plus_outline',
            'position',
            'message',
            'chat_line_square',
            'chat_dot_square',
            'chat_dot_round',
            'chat_line_round',
            'set_up',
            'link',
            'female',
            'male',
            'truck',
            'price_tag',
            'discount',
            'picture_outline',
            'collection_tag',
            'pie_chart',
            'umbrella',
            'scissors',
            'upload2',
            'download',
            'paperclip',
            'folder_checked',
            'folder_delete',
            'folder_remove',
            'document_add',
            'folder_add',
            'folder_opened',
            'document',
            'document_checked',
            'document_remove',
            'folder',
            'edit',
            'circle_close',
            'caret_top',
            'caret_bottom',
            'caret_right',
            'caret_left',
            'share',
            'more',
            'phone',
            'star_on',
            'menu',
            'd_caret',
            'success',
            'error',
            'location',
            'picture',
            'circle_plus',
            'info',
            'remove',
            'warning',
            'question',
            's_tools',
            's_comment',
            's_flag',
            's_operation',
            'sort_down',
            'sort_up',
            'delete_solid',
            'theme_system',
            'write_system',
            'info_system',
            'msg_for_u',
            'search_bar',
            'more_item'
        ]);

        return {
            iconArr
        };
    }
});
</script>

<style lang="scss" scoped>
.demo-layout {
    width: 70%;
    height: 400px;
    overflow: scroll;
    margin: 20px auto;
    box-shadow: 0 0 28px #eee;
    padding: 40px;
    .icon-container {
        display: inline-block;
        width: 25%;
        padding: 10px;
        text-align: center;
        i {
            margin-left: 15px;
        }
    }
}
</style>
