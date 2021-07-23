<template>
  <div>
      <router-link to="/shop"><button :class="{ primary: theme === 'primary' }">
         Shop Now
      </button></router-link>
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
        background: #fd5f25;
        border-radius: 4px;
        font-size: 16px;
        padding: 9px 28px;
        color: white;
        /* font-weight: 700; */
    }

    button :focus {
        outline: 2px solid transparent;
    }

</style>