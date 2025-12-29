window.onload = () => {
    // 1. Load Jobs
    const jobContainer = document.getElementById('job-list');
    jobContainer.innerHTML = DB_SOURCE.jobs.map(job => `
        <div class="item-card">
            <strong>${job.title}</strong><br>
            <small>${job.company} • ${job.loc}</small><br>
            <span style="color:#d4af37; font-size:0.7rem">${job.status}</span>
        </div>
    `).join('');

    // 2. Load Courses
    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = DB_SOURCE.courses.map(course => `
        <div class="item-card">
            <strong>${course.name}</strong><br>
            <small>${course.platform} • ${course.duration}</small>
        </div>
    `).join('');

    // 3. Animate Stats
    document.getElementById('match-val').innerText = "87%";
    animateSalary();
};

function animateSalary() {
    let val = 0;
    const target = 10200;
    const interval = setInterval(() => {
        val += 340;
        document.getElementById('salary-val').innerText = "$" + val.toLocaleString();
        if(val >= target) clearInterval(interval);
    }, 40);
}
