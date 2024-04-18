<template>
  <transition name="fade">
    <div v-if="isVisible" class="fixed right-4 bottom-4 z-50">
      <div :class="`alert alert-${type}`">
        <div>
          {{ message }}
          <button class="btn btn-sm btn-ghost" @click="closeToast">
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info', // 'success', 'warning', 'error'
    },
  },
  data() {
    return {
      isVisible: false,
      message: '',
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 3000); // Automatically close the toast after 3 seconds
    },
    closeToast() {
      this.isVisible = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
