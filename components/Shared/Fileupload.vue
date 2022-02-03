<template>
  <div class="dropzone-wrapper">
    <div class="dropzone-desc">
      <i class="fas fa-upload"></i>
      <p>Choose an image file or drag it here.</p>
    </div>
    <input type="file" name="img_logo" class="dropzone">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .dropzone-wrapper {
  border: 2px dashed #91b0b3;
  border-radius: 5px;
  color: #92b0b3;
  position: relative;
  height: 150px;
}
.dropzone-desc {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 40%;
  top: 45px;
  font-size: 20px;
}
.dropzone,
.dropzone:focus {
  position: absolute;
  outline: none !important;
  width: 100%;
  height: 150px;
  cursor: pointer;
  opacity: 0;
}
.dropzone-wrapper:hover,
.dropzone-wrapper.dragover {
  background: #ecf0f5;
}
</style>
