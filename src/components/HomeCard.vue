<script setup lang="ts">
interface Prop {
  elemento: string
  descricao: string
}

const prop = defineProps<Prop>()
</script>

<template>
  <div class="card">
    <div>
      <img :src="prop.elemento" />
    </div>
    <div>
      <span>{{ prop.descricao }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  flex: 0 1 calc(50% - 0.5rem);
  width: 150px;
  height: 150px;
  border: 3px solid rgb(202, 202, 202);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

img {
  width: 60px;
}
</style>
