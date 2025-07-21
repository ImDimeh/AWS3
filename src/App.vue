<template>
  <div class="home-container fullscreen">
    <h1 class="neon-title">Bienvenue sur AWS3</h1>
    <p class="neon-subtitle">
      Mehdi Bellam
    </p>
    <button class="neon-btn">Commencer</button>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.home-container.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  z-index: 9999;
  overflow: hidden;
}

/* Reste du style inchangé */
.neon-title {
  color: #00eaff;
  font-size: 3rem;
  font-weight: bold;
  text-shadow:
    0 0 10px #00eaff,
    0 0 20px #00eaff,
    0 0 40px #00eaff;
  margin-bottom: 1rem;
}

.neon-subtitle {
  color: #b3eaff;
  font-size: 1.5rem;
  text-shadow:
    0 0 8px #00eaff,
    0 0 16px #00eaff;
  margin-bottom: 2rem;
}

.neon-btn {
  background: #00eaff;
  color: #0f2027;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow:
    0 0 10px #00eaff,
    0 0 20px #00eaff;
  transition: background 0.3s, color 0.3s;
}

.neon-btn:hover {
  background: #0f2027;
  color: #00eaff;
  box-shadow:
    0 0 20px #00eaff,
    0 0 40px #00eaff;
}
</style>