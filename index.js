const getFirstSelector = (selector) => document.querySelector(selector)

const nestedTarget = () => document.querySelector("#nested .target")

const deepestChild = () => {
  let element = document.querySelector("#grand-node")
  let child = element.children[0]

  while (child){
    element = child
    child = element.children[0]
  }
  return element;
}

const increaseRankBy = (n) => {
  return document.querySelectorAll(".ranked-list").forEach((function(ul){
     for(let li = 0; li < ul.children.length; li++) {
        ul.children[li].innerHTML = +ul.children[li].innerHTML + 3
      }
    })
  )
}
