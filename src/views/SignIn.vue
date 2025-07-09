<script setup lang="ts"></script>

<template>
  <div class="section">
    <div class="container">
      <div class="box-login">
        <span class="h2 span">Seja bem vindo!</span>
        <div class="input-box">
          <input type="text" placeholder="digite o email" maxlength="30" class="input" />
          <input type="password" placeholder="digite a senha" class="input" />
        </div>
        <div class="info-senha">
          <span>esqueci minha senha</span>
        </div>
        <div class="box-btn">
          <button class="s-btn">entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  height: 100vh;
  position: relative;
  background-color: #432e63;
}

.box-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border-color-primary);
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-background);
}

.span {
  padding-top: 15px;
}

.input-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0 5px 0;
}

.input {
  border: 1px solid var(--border-color-primary);
  border-radius: 5px;
  padding: 5px;
  width: 200px;
}

.info-senha {
  align-self: flex-end;
  padding: 0 0 20px 0;
  cursor: pointer;
}

.box-btn {
  width: 100%;
  padding-bottom: 15px;
}

.s-btn {
  width: 100%;
}

@media (min-width: 600px) {
  .input {
    width: 300px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .input {
    width: 350px;
  }
}
</style>
