<template>
  <footer>
    <div class="inner-container">
      <small>&copy; {{ currentYear }} PhoenixJaymes</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return { currentYear: new Date().getFullYear() }
  },
}
</script>