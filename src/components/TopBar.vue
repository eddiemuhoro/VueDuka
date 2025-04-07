<script setup></script>

<template>
  <div class="top-bar">
    <div class="contact-info">
      <i class="pi pi-phone"></i>
      <p>+254 3475934</p>
    </div>
    <div class="company-logo">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
    </div>
    <nav class="nav-bar">
      <ul class="nav-links">
        <li>
          <a href="#"><i class="pi pi-shopping-cart"></i></a>
        </li>
        <li>
          <a href="#"> <i class="pi pi-user"></i></a>
        </li>
        <li class="contact-us"><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </div>

  <hr class="divider" />
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.contact-info {
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 10px;
}
.company-logo {
  display: flex;
  align-items: center;
}
.logo {
  width: 40px;
  height: auto;
}
.nav-bar {
  display: flex;
  align-items: center;
}
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;

  gap: 20px;
}
.nav-links li {
  font-size: 14px;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
}

.nav-links a:hover {
  color: var(--color-text-hover);
}

.contact-us {
  background-color: var(--vt-c-indigo);
  padding: 5px 10px;
  border-radius: 20px;
}

.contact-us a {
  color: var(--vt-c-white-soft);
  font-weight: bold;
}
.contact-us a:hover {
  color: var(--vt-c-white);
}
.divider {
  border: 1px solid var(--color-divider);
  margin: 0;
}
</style>
