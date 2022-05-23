export default () => {
  const position = {
    x: 0,
    y: 0,
  }
  
  interact(".puzzle-answer-item").draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     restriction: "parent",
    //     endOnly: true,
    //   }),
    // ],
    autoScroll: true,
    listeners: {
      start(e) {
        e.target.classList.add("border-2", "border-white", "text-white")
      },
      move(e) {
        position.x += e.dx
        position.y += e.dy
  
        e.target.style.transform = "translate(" + position.x + "px, " + position.y + "px)"
      },
      end(e) {
        e.target.classList.remove("border-2", "border-white", "text-white")
        position.x = 0
        position.y = 0
        e.target.style.transform = ""
      },
    },
  })
  
  interact(".puzzle-question-item").dropzone({
    accept: ".puzzle-answer-item",
    overlap: 0.6,
    ondropactivate: function (e) {
    },
    ondragenter: function (e) {
      const dropzoneElement = e.target
      dropzoneElement.classList.add("bg-gray-500")
    },
    ondragleave: function (e) {
      const dropzoneElement = e.target
      dropzoneElement.classList.remove("bg-gray-500")
    },
    ondrop: function (e) {
      const draggableElement = e.relatedTarget
      console.log(draggableElement.dataset.answer)
    },
    ondropdeactivate: function (e) {
    },
  })
}