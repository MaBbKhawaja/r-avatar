<template>
   <div :style="style" class="avatar">
    <table>
      <tbody>
        <tr>
          <td
            :title="fullname"
            :style="fontColor?'color:'+fontColor:'color: rgb(255, 255, 255);mix-blend-mode: difference'"
          >
            {{ initials }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// const emit = defineEmits(['state'])
const props = defineProps({
  fullname: { type: String, default: "" },
  size: { type: Number, default: 48 },
  radius: {
    type: Number,
    default: 50,
    validator: (value: any) => value >= 0 && value <= 50,
  },
  color: { type: String, default: "" },
  image: { type: String, default: "" },
  fontColor: { type: String },
  fontSize: { type: String, default: "14px" },
})

function toColor(str: String) {
  let hash = 0;
  if (!str) return "black";
  for (const char of str.split("")) {
    hash = (hash << (8 - hash)) + char.charCodeAt(0);
  }
  return "#" + Math.abs(hash).toString(16).substr(0, 6);
}
const initials = computed(() => {
  const words = props.fullname.split(/[\s-]+/);
      return words
        .map((word) => word.substr(0, 1))
        .join("")
        .substr(0, 4)
        .toUpperCase();
})
const style = computed(() => {
  const fontSize = initials.value.length > 2 ? props.size / 4 : props.size / 3;
  console.log(props.size)
      return {
        width: props.size + "px",
        height: props.size + "px",
        "border-radius": props.radius + "%",
        "font-size": fontSize + "px",
        "background-color":
          props.color === "" ? toColor(props.fullname) : props.color,
        "background-image": hasImage ? "url(\"" + props.image + "\")" : "none",
        // "background-image": "url(\"https://amymhaddad.s3.amazonaws.com/morocco-blue.png\")",
        color: props.fontColor,
        "font-weight": "bold",
        "font-family":  "\"Domine\", serif",
        // "-webkit-filter": "invert(100%)",
        // filter: "invert(100%)"
      };
})
const hasImage = computed(() => {
  console.log(props.image !== "")
  return props.image !== "";
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap");

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