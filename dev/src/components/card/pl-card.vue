<!-- pl-card @xudong -->
<template>
    <div class="pl-card">
        <div class="card-content">
            <h3 class="title">welcome to philuo</h3>
            <p class="content">
                我有一天去上班碰到了许久未见的好朋友xxx,他还是那么的帅气，
                精神饱满，我还是那么的喜欢他，可他再也不属于我了，真的后悔当初放手错过了他，
                这是我一生的遗憾
            </p>
            <div class="icon">
                <pl-icon name="delete" />
                <span>
                    <pl-icon name="view" />
                    <span class="view">1620</span>
                </span>
            </div>
        </div>
        <div class="card-right">
            <div class="bg"></div>
            <div class="avatar"></div>
            <div class="info">
                <span class="level">level: 6</span>
                <span class="star">star: 66666</span>
            </div>
        </div>
    </div>
</template>
<script setup>
// import { defineComponent } from 'vue';
</script>

<style lang="scss" scoped>
.pl-card {
    width: 372px;
    height: 202px;
    border-radius: 10px;
    box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.12);
    display: flex;
    overflow: hidden;
    .card-content {
        width: 65%;
        margin: 7px 20px;
        .title {
            text-align: center;
            margin-top: 15px;
            font-weight: normal;
        }
        .content {
            color: #666;
            margin-top: 10px;
            overflow: hidden;
            display: -webkit-box;
            width: 100%;
            max-height: 100%;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            line-height: 25px;
        }
        .icon {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 10px;
            .view {
                color: #828282;
                margin-left: 5px;
            }
        }
    }
    .card-right {
        width: 35%;
        height: 100%;
        overflow: hidden;
        position: relative;
        .bg {
            background: rgb(43, 124, 194);
            filter: blur(33px);
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .avatar {
            height: 56px;
            width: 56px;
            border-radius: 50%;
            background: #000;
            position: absolute;
            z-index: 1;
            top: 45px;
            left: 50%;
            transform: translateX(-50%);
        }
        .info {
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 37px;
            z-index: 1;
            font-size: 12px;
            width: 100%;
            span {
                width: 43%;
                text-align: center;
                height: 18px;
                position: relative;
            }
            .level {
                background: #83e2f4;
                &::after {
                    content: '';
                    border-width: 9px;
                    border-style: solid;
                    border-color: #83e2f4 transparent transparent #83e2f4;
                    display: inline-block;
                    position: absolute;
                    z-index: 1;
                    right: -18px;
                }
            }
            .star {
                background: #ef9a93;
                white-space: nowrap;
                &::before {
                    content: '';
                    border-width: 9px;
                    border-style: solid;
                    border-color: transparent #ef9a93 #ef9a93 transparent;
                    display: inline-block;
                    position: absolute;
                    z-index: 1;
                    left: -18px;
                }
            }
        }
    }
}
</style>
