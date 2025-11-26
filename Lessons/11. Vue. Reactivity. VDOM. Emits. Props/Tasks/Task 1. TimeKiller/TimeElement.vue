<template>
    <div class="time-element">
        <span>{{ time }}</span>
    </div>
</template>

<script>
export default {
    props: {
        time: {
            type: String,
            required: true,
        },
    },
};
</script>