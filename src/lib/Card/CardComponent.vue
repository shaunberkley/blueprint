<template>
    <div class="flex w-2/3 h-72 pl-10 pb-2 justify-between -mt-24">
        <div class="flex flex-col justify-end">
            <div
                class="h-32 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-24 app-bg-blue-1 w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-blue-1"></div>
            </div>
        </div>
        <div class="flex flex-col justify-end">
            <div
                class="h-28 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-16 app-bg-blue-2 w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-blue-2"></div>
            </div>
        </div>
        <div class="flex flex-col justify-end">
            <div
                class="h-52 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-44 app-bg-lavender w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-lavender"></div>
            </div>
        </div>
        <div class="flex flex-col justify-end">
            <div
                class="h-36 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-24 app-bg-pink w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-pink"></div>
            </div>
        </div>
        <div class="flex flex-col justify-end">
            <div
                class="h-44 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-32 app-bg-teal w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-teal"></div>
            </div>
        </div>
        <div class="flex flex-col justify-end">
            <div
                class="h-32 flex flex-col justify-end items-center effect-inner rounded-3xl"
            >
                <div class="h-24 app-bg-green w-full rounded-3xl"></div>
            </div>
            <div
                class="mt-2 effect w-8 h-8 rounded-full flex justify-center items-center"
            >
                <div class="w-5 h-5 rounded-full app-bg-green"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
    props: {
        label: String,
        buttonColor: {
            type: String,
            default: "#2196f3",
        },
    },
    setup(props) {
        return {};
    },
};
</script>

<style scoped>
.effect {
    background: #e0e4e7;
    box-shadow: 5px 5px 8px #b8c7dd8c, -5px -5px 8px #ffffff;
    border: 1px solid #b8c7dd8c;
}

.effect-inner {
    background: #e0e4e7;
    box-shadow: inset 3px 2px 2px 0px #b8c7dd, inset -2px -3px 3px 0px #fff;
}

.title {
    color: rgba(236, 126, 218, 0.85);
    text-shadow: 1px 1px 2px #e0e4e7, 0 0 0 black, 1px 4px 6px #def;
}

input[type="radio"] {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="radio"]:checked {
    border-radius: 50%;
    background: #e0e4e7;
    box-shadow: 4px 4px 8px #b8c7dd, -4px -4px 8px #ffffff;
}

input[type="radio"]:checked::before {
    content: "";
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background: #44dbe5;
}

input[type="checkbox"] {
    display: none;
}

input[type="text"] {
    background: none;
}

input[type="text"]:focus {
    outline: none;
}

.switch {
    position: relative;
    cursor: pointer;
}

.switch-bg {
    overflow: visible;
    height: 20px;
    width: 55px;
    border-radius: 15px;
    background: #e0e4e7;
    box-shadow: inset 7px 2px 2px 0px #c2cad5, inset -3px -2px 2px 0px #f7f7f7;
}

.switch-indicator {
    top: -4px;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #e0e4e7;
    box-shadow: 4px 4px 8px #b8c7dd, -4px -4px 8px #ffffff;
    transform: translateX(0%);
}

input[type="checkbox"]:checked ~ .switch-indicator {
    transform: translateX(85%);
    box-shadow: 4px 4px 8px #b8c7dd, -4px -4px 8px transparent;
}

input[type="checkbox"]:checked ~ .switch-bg {
    background: #5685ff;
    box-shadow: 4px 3px 3px 0px #4273ee inset;
}

.app-color-gray {
    color: #646464;
}

.app-color-pink {
    color: #ec7eda;
}

.app-bg-blue-1 {
    background: #78bfff;
}

.app-color-blue-1 {
    color: #78bfff;
}

.app-bg-blue-2 {
    background: #5685ff;
}

.app-color-blue-2 {
    color: #5685ff;
}

.app-bg-lavender {
    background: #576ee6;
}

.app-bg-pink {
    background: #ec7eda;
}

.app-bg-teal {
    background: #44dbe5;
}

.app-bg-green {
    background: #68deb4;
}
</style>
