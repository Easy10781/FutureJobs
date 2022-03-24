all_jobs = document.getElementsByClassName("job__icon");

function click(job) {
    job.style.zIndex = 3;

    let _html = document.getElementsByClassName("white_screen")[0];
    _html.style.visibility = "visible";
    _html.style.opacity = 1;
}

for (let job of all_jobs) {
    job.addEventListener("click", function(){click(job)})
}
