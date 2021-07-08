<template>
  <div>
      <button class="focus:outline-none" :class="{ primary: theme === 'primary' }">
         See More
      </button>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: [
     'btnTheme'
    ],
    components: {

    },
    data() {
        return {
          
        }
    }

}
</script>

<style scoped>
    button {
        border: 1px solid coral;
        border-radius: 4px;
        font-size: 14px;
        padding: 9px 28px;
        color: coral;
        /* font-weight: 700; */
    }

    button :focus {
        outline: 2px solid transparent;
    }

    button:hover {
        background: coral;
        color: #fff;
    }

</style>