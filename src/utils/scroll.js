export default function handleScroll(id) {
  console.log(id);
  const el = document.getElementById(id);
  console.log(el);
  el.scrollIntoView(true);
}
