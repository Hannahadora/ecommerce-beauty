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
        border: 1px solid #c44e00;
        border-radius: 4px;
        font-size: 14px;
        padding: 9px 28px;
        color: #c44e00;
        /* font-weight: 700; */
    }

    button :focus {
        outline: 2px solid transparent;
    }

    button:hover {
        background: #c44e00;
        color: #fff;
    }

</style>