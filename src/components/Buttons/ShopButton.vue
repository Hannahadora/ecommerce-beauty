<template>
  <div>
      <button :class="{ primary: theme === 'primary' }">
         Shop Now
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
        background: coral;
        border-radius: 4px;
        font-size: 20px;
        padding: 10px 30px;
        color: white;
        /* font-weight: 700; */
    }

    button :focus {
        outline: 2px solid transparent;
    }

</style>