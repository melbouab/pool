export function build(num) {
  let id = 1;
  let time = setInterval(() => {
    let div = document.createElement("div");
    div.setAttribute("id", `brick-${id}`);
    if (id % 3 === 2) {
      div.dataset.foundation = "true";
    }
    if (id !== num) {
      id++;
    } else {
      clearInterval(time);
    }
    document.body.append(div);
  }, 100);
}
export function repair(...args) {
  args = [...args];
  let ids = document.querySelectorAll("div");
  let list = [];

  for (let i = 0; i < ids.length; i++) {
    if ((i + 1) % 3 === 2) {
      list.push(ids[i]);
    }
  }

  let filterd = list.map((el) => el.id);

  for (let i = 0; i < args.length; i++) {
    let el = document.getElementById(args[i]);

    if (filterd.includes(args[i])) {
      el.setAttribute("data-repaired", "in progress");
    } else {
      el.setAttribute("data-repaired", "true");
    }
  }
}

export function destroy() {
  let bricks = document.querySelectorAll("div");
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }
}
