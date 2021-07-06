<template>
  <div>
      <button :class="{ primary: theme === 'primary' }">
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
        font-size: 20px;
        padding: 10px 30px;
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