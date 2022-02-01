<template>
  <div>
    <h1>Footer</h1>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.logo-footer {
  padding-bottom: 32px;
}

.about {
  margin-top: 24px;
  width: fit-content;
}

.doubt-text-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h4.doubt-text {
  font-weight: 500;
  font-size: 20px;
  padding-top: 8px;
  text-align: left;
  color: #000000;
}
.doubt-text {
  font-weight: 700;
  font-size: 40px;
  text-align: left;
}
.footer {
  margin: auto;
}

.doubt {
  background: #f7f8fa;
  width: 100%;
}

@media only screen and (max-width: 720px) {
  .doubt > div {
    padding: 42px 10px !important;
  }
}

.doubt > div {
  max-width: 1280px;
  position: relative;
  display: flex;
  min-height: 384px;
  padding: 42px 135px;
  margin: auto;
  flex-wrap: wrap;
  gap: 20px;
}

.doubt > div > div {
  flex: 1;
}

.doubt-img {
  display: flex;
  justify-content: flex-end;
}

.doubt-img > img {
  object-fit: scale-down;
}

.dots {
  position: absolute;
  bottom: 32px;
  left: 32px;
}

.organization-info {
  max-width: 1280px;
  margin: auto;
  padding: 48px 32px 92px 32px;
  display: flex;
  flex-wrap: wrap;
}

.left-flex {
  flex: 0.55;
}

.left-flex span {
  white-space: pre-line;
}

.right-flex {
  flex: 0.45;
}

.right-flex > .infos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.right-flex > .infos > div {
  flex: 1;
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.social {
  display: flex;
  gap: 20px;
}

.social > a {
  padding: 12px;
  border: 1px solid #edeef2;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 4px;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hr {
  border-top: 1px solid #dbdde5;
}

.footer-final {
  max-width: 1280px;
  padding: 0 32px 16px 32px;
  margin: auto;
}

.cnpj {
  padding-top: 16px;
  color: #5e6475;
  font-weight: 300;
  font-size: 12px;
  white-space: pre-line;
}

.cursorOn {
  cursor: pointer;
}
</style>
