<template>
  <div :class="alertStyle" v-show="visible">
    <div class="spinner-border spinner-border-sm" role="status" v-show="loading">
      <span class="visually-hidden">Loading...</span>
    </div>

    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      loading: false,
      message: '',
      color: '',
    }
  },
  computed: {
    alertStyle() {
      return 'alert alert-' + this.color
    }
  },
  methods: {
    alert(message, color, loading) {
      this.resetAlert()
      
      if (!message) {
        return
      }

      this.message = message
      this.color = color || 'success'
      this.loading = loading  
      this.visible = true   
    },
    hide() {
      this.visible = false
    },
    resetAlert() {
      this.message = ''
      this.color = 'success'
      this.loading = false
      this.visible = false    
    }
  }
}
</script>