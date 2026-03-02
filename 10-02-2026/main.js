// ================= Exercise 1 =================
btn1.onclick = function () {
    const p = document.createElement("p");
    p.textContent = "Hello DOM";
    container1.appendChild(p);
};

// ================= Exercise 2 =================
let count2 = 0;
btn2.onclick = function () {
    count2++;
    const li = document.createElement("li");
    li.textContent = "Item " + count2;
    list2.appendChild(li);
};

// ================= Exercise 3 =================
btn3.onclick = function () {
    const value = input3.value.trim();
    if (value === "") return;

    const p = document.createElement("p");
    p.textContent = value;
    container3.appendChild(p);

    input3.value = "";
};

// ================= Exercise 4 =================
btn4.onclick = function () {
    const value = input4.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;
    list4.appendChild(li);

    input4.value = "";
};

// ================= Exercise 5 =================
btn5.onclick = function () {
    const value = input5.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    li.onclick = function () {
        li.style.color = li.style.color === "red" ? "black" : "red";
    };

    list5.appendChild(li);
    input5.value = "";
};

// ================= Exercise 6 =================
btn6.onclick = function () {
    const value = input6.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    const del = document.createElement("button");
    del.textContent = "X";
    del.onclick = function () {
        li.remove();
    };

    li.appendChild(del);
    list6.appendChild(li);

    input6.value = "";
};

// ================= Exercise 7 =================
btn7.onclick = function () {
    const value = input7.value.trim();
    if (value === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = value;
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(del);

    list7.appendChild(li);
    input7.value = "";
};

// ================= Exercise 8 =================
btn8.onclick = function () {
    const value = input8.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    li.onclick = function () {
        const all = list8.querySelectorAll("li");
        all.forEach((item) => item.classList.remove("selected"));
        li.classList.add("selected");
    };

    list8.appendChild(li);
    input8.value = "";
};

// ================= Exercise 9 =================
btn9.onclick = function () {
    const value = input9.value.trim();
    if (value === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = value;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");

    doneBtn.onclick = function () {
        doneBtn.classList.toggle("active");
        applyFilter();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    list9.appendChild(li);
    input9.value = "";
};

search9.oninput = applyFilter;
filter9.onchange = applyFilter;

function applyFilter() {
    const keyword = search9.value.toLowerCase();
    const showDoneOnly = filter9.checked;

    const items = list9.querySelectorAll("li");

    items.forEach((li) => {
        const text = li.querySelector("span").textContent.toLowerCase();
        const isDone = li
            .querySelector(".done-btn")
            .classList.contains("active");

        const matchSearch = text.includes(keyword);
        const matchDone = showDoneOnly ? isDone : true;

        li.style.display = matchSearch && matchDone ? "list-item" : "none";
    });
}
