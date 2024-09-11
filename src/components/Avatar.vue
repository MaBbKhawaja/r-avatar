<template>
  <div :style="style" class="avatar">
    <table>
      <tbody>
        <tr>
          <td :title="name" :style="initialsStyle">
            {{ initials }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
  size: { type: Number, default: 48 },
  radius: {
    type: Number,
    default: 50,
    validator: (value: any) => value >= 0 && value <= 50,
  },
  color: { type: String, default: "" },
  image: { type: String, default: "" },
  fontColor: { type: String, default: "rgb(255, 255, 255)" },
  fontSize: { type: Number },
  blend: { type: Boolean, default: true },
});

function toColor(str: String) {
  let hash = 0;
  if (!str) return "black";
  for (const char of str.split("")) {
    hash = (hash << (8 - hash)) + char.charCodeAt(0);
  }
  return "#" + Math.abs(hash).toString(16).substr(0, 6);
}
const initials = computed(() => {
  const words = props.name.split(/[\s-]+/);
  return words
    .map((word) => word.substr(0, 1))
    .join("")
    .substr(0, 4)
    .toUpperCase();
});
const style = computed(() => {
  const fontSize = initials.value.length > 2 ? props.size / 4 : props.size / 3;
  return {
    width: props.size + "px",
    height: props.size + "px",
    "border-radius": props.radius + "%",
    "font-size": props.fontSize ? props.fontSize + "px" : fontSize + "px",
    "background-color": props.color === "" ? toColor(props.name) : props.color,
    "background-image": hasImage ? 'url("' + props.image + '")' : "none",
    color: props.fontColor,
    "font-weight": "700",
    "font-family": '"Poppins", sans-serif',
  };
});
const hasImage = computed(() => {
  return props.image !== "";
});

const initialsStyle = computed(() => {
  return {
    color: props.fontColor,
    "mix-blend-mode": props.blend ? "difference" : "",
  };
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700display=swap");

.avatar {
  display: inline-block;
  background-color: black;
  color: white;
  width: 48px;
  height: 48px;
  font-size: 12px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  position: relative;
}
.avatar table {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-spacing: 0;
}
.avatar table td {
  text-align: center;
  vertical-align: middle;
}
.avatar img {
  width: 100%;
  overflow: hidden;
}
</style>
